import React from 'react'
import {BiMoviePlay} from "react-icons/bi"
import {AiOutlineStar} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='Menu-main'>
      <div><Link to="/Movies"><BiMoviePlay/></Link></div>
      <div><Link to="/Rankings"><AiOutlineStar/></Link></div>
    </div>
  )
}

export default Menu;