import React from 'react'
import {AiOutlineEdit} from "react-icons/ai"
import {AiOutlineDelete} from "react-icons/ai"
import EditModal from './EditModal'
import { useState } from 'react'

const MovieList = ({item, position, removeFile, setMovieData}) => {

     // function to delete and alert
  const handleDelete = () => {
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminada la fila, no podras recuperar la información!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Los datos se han eliminado exitosamente", {
          icon: "success",
        });
        removeFile()
      } else {
        swal("Cancelaste la eliminación");
      }
    });
  }

  //Edit Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
        <tr>
          <th className='table-header-indicator'>{position}</th>
          <th>{item.title}</th>
          <th>{item.year}</th>
          <th>{item.time}</th>
          <th>{item.language}</th>
          <th>{item.date}</th>
          <th>{item.country}</th>
          <th> |
            {item.genres.map(genre =>{
            return(
                <span key={genre._id}> {genre.kind} |</span>
            )
          })}
          </th>
          <th>
            {
                item.actor.map(act => {
                    return(
                        <div key={act._id}>
                          <span>{act.name} </span> <span>{act.lastname}</span>
                        </div>
                    )
                })
            }
          </th>
          <th>
            {
                item.director.map(direct =>{
                    return(
                        <div key={direct._id}>
                            <span>{direct.name} </span><span>{direct.lastname}</span>
                        </div>
                    )
                })
            }
          </th>
          <th>
            <div className='table-tools'>
              <AiOutlineEdit id="edit" onClick={handleShow}/>
              <EditModal show={show} handleClose={handleClose} handleShow={handleShow} item={item} setMovieData={setMovieData}/>
              <AiOutlineDelete id="clear" onClick={() => handleDelete(item._id)}/>
            </div>
          </th>
        </tr>
  )
}

export default MovieList