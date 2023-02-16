import React from 'react'
import Menu from '../Global-components/Menu';
import Table from 'react-bootstrap/Table';
import {AiOutlineSearch} from "react-icons/ai"
import MovieList from './MovieList';

const Movies = ({movieData, setMovieData}) => {

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

  return (
    <>
    <Menu/>
    <div id="Menu_Main">
        <div className='Nav'>
          <span><AiOutlineSearch/></span><input type={'search'} placeholder="Search Movies..."></input>
          <div className='info'> 
            <h4 id="Movie_Data">Movie Data</h4>
            <button>Crear registro</button>
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
              <MovieList item={item} key={item._id} position={index+1} setMovieData={setMovieData} removeFile={() => removeTodo(item._id)} /> //removeFile send a function reference and item._id actual to use removeFile() to delete.
            )
          })
        }
      </tbody>
    </Table>
    </>
  )
}

export default Movies;