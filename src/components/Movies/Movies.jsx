import React from 'react'
import Menu from '../Global-components/Menu';
import Table from 'react-bootstrap/Table';
import {AiOutlineSearch} from "react-icons/ai"
import MovieList from './MovieList';

const Movies = ({movieData}) => {

  console.log(movieData)

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
            <h3>Movies: </h3>
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
          <th>Actor / Genre</th>
          <th>Director</th>
          <th className='tools'>Tools</th>
        </tr>
      </thead>
      <tbody>
        {
          movieData.map(item =>{
            return(
              <MovieList item={item} key={item._id}/>
            )
          })
        }
      </tbody>
    </Table>
    </>
  )
}

export default Movies;