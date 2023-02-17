import React from 'react'
import Menu from '../Global-components/Menu';
import Table from 'react-bootstrap/Table';
import {AiOutlineSearch} from "react-icons/ai"
import MovieList from './MovieList';
import AddModal from './AddModal';
import { useState } from 'react';
import swal from 'sweetalert';
import {AiOutlineStar} from "react-icons/ai"

const Movies = ({movieData, setMovieData, editTable, AddData}) => {

  const [MovieDataSearchTemp, setMovieDataSearchTemp] = useState(movieData);

  const removeTodo = (id) => {
    console.log(id)
    let salida={"id": id }
    const body = JSON.stringify(salida);

    const requestInit = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: body
    };
    
    const fetchData = async () => {
      const response = await fetch(
        "https://backendvideoclub.onrender.com/App/removeMovies",
        requestInit //send headers, methods and req body
      );
      const data = await response.json(); //Convierte la respuesta en un archivo json
      
      // console.log(data[0]._id);
    }
    fetchData()
    setMovieData((oldlist) =>
      oldlist.filter((deleteReq) => {
        return deleteReq._id !== id;
      })
    );

  };

  const modalTest = () =>{
    swal({
      text: "You can try to search a movie here :3",
      content: "input",
      button: {
        text: "Search!",
        closeModal: false,
      },
    })
    .then(name => {
      if (!name) throw null;
     
      return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
    })
    .then(results => {
      return results.json();
    })
    .then(json => {
      const movie = json.results[0];
     
      if (!movie) {
        return swal("No movie was found!");
      }
     
      const name = movie.trackName;
      const imageURL = movie.artworkUrl100;
     
      swal({
        title: "Top result:",
        text: name,
        icon: imageURL,
      });
    })
    .catch(err => {
      if (err) {
        swal("Oh noes!", "The AJAX request failed!", "error");
      } else {
        swal.stopLoading();
        swal.close();
      }
    });
  }

  //OnSearch
  const [search, setSearch] = useState("");
  const onSearch = (e) =>{
    setSearch(e.target.value)
    handleSearch()
    console.log(search)
  }
  const handleSearch = async() =>{
        if(search == ""){
          setMovieData(MovieDataSearchTemp)
        }else{
          const movieData = await fetch (`https://backendvideoclub.onrender.com/App/movContenga/${search}`) //en prueba
          const response = await movieData.json()
          setMovieData(response)
        }
  }

  //Add Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <AddModal show={show} handleClose={handleClose} handleShow={handleShow} AddData={AddData}/>
    <Menu/>
    <div id="Menu_Main">
        <div className='Nav'>
          <span><AiOutlineSearch/></span><input type={'search'} placeholder="Search Movies..." onChange={onSearch}></input>
          <div className='info'> 
            <h4 id="Movie_Data">Movie Data</h4>
            <button onClick={handleShow}>Crear registro</button>
            <button onClick={modalTest}><AiOutlineStar/></button>
          </div>
        </div>

        <div className='info'>
          <div className='Movie_Data-movies'>
            <h3>Movies: {movieData.length}</h3>
          </div>
        </div>
    </div>

    <Table responsive="xl" bordered hover id="table">
      <thead id="table-header">
        <tr>
          <th>#</th>
          <th>Movies_Title</th>
          <th>Year</th>
          <th>Duration</th>
          <th>Lenguage</th>
          <th>Date</th>
          <th>Country</th>
          <th>Genres</th>
          <th>Actor</th>
          <th>Director</th>
          <th className='tools'>Tools</th>
        </tr>
      </thead>
      <tbody>
        
        {
          movieData.map((item, index) =>{
            return(
              <MovieList item={item} key={item._id} position={index+1} setMovieData={setMovieData} editTable={editTable} removeFile={() => removeTodo(item._id)} /> //removeFile send a function reference and item._id actual to use removeFile() to delete.
            )
          })
        }
      </tbody>
    </Table>
    </>
  )
}

export default Movies;