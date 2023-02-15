import React from 'react'
import {BiMoviePlay} from "react-icons/bi"
import {AiOutlineStar} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className='main_index'>
      <h1>VIDEO CLUB</h1>
      <div className='Redirection-buttons'>

        <div className='button-group'>
          <h4>Movies</h4>
          <Link to="/Movies"><button><BiMoviePlay/></button></Link>
        </div>
        
        <div className='button-group'>
          <h4>Rankings</h4>
          <Link to="/Rankings"><button><AiOutlineStar/></button></Link>
        </div>

      </div>
    </div>
  )
}

export default Index;