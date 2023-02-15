import React from 'react'
import Menu from '../Global-components/Menu';
import Table from 'react-bootstrap/Table';
import {AiOutlineEdit} from "react-icons/ai"
import {AiOutlineDelete} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import swal from 'sweetalert';

const Rankings = () => {

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
      } else {
        swal("Cancelaste la eliminación");
      }
    })
  };

  return (
    <>
    <Menu/>
    <div id="Menu_Main">
        <div className='Nav'>
          <span><AiOutlineSearch/></span><input type={'search'} placeholder="Search Reviews..."></input>
          <div className='info'> 
            <h4 id="Movie_Data">Rankings Data</h4>
            <button>Crear registro</button>
          </div>
        </div>

        <div className='info'>
          <div className='Movie_Data-movies'>
            <h3>Reviews: </h3>
          </div>
        </div>
    </div>

    <Table responsive="xl" bordered hover id="table">
      <thead id="table-header">
        <tr>
          <th>#</th>
          <th>Movies_Title</th>
          <th>Reviewer</th>
          <th>Rev_Stars</th>
          <th>Num_Ratings</th>
          <th>Actor</th>
          <th className='tools'>Tools</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className='table-header-indicator'>1</th>
          <th>data 2</th>
          <th>data 3</th>
          <th>data 4</th>
          <th>data 5</th>
          <th>data 6</th>
          <th>
            <div className='table-tools'>
              <AiOutlineEdit id="edit"/>
              <AiOutlineDelete id="clear" onClick={handleDelete}/>
            </div>
          </th>
        </tr>
        <tr>
          <th className='table-header-indicator'>2</th>
          <th>data 2</th>
          <th>data 3</th>
          <th>data 4</th>
          <th>data 5</th>
          <th>data 6</th>
          <th>
            <div className='table-tools'>
              <AiOutlineEdit id="edit"/>
              <AiOutlineDelete id="clear" onClick={handleDelete}/>
            </div>
          </th>
        </tr>
        <tr>
          <th className='table-header-indicator'>3</th>
          <th>data 2</th>
          <th>data 3</th>
          <th>data 4</th>
          <th>data 5</th>
          <th>data 6</th>
          <th>
            <div className='table-tools'>
              <AiOutlineEdit id="edit"/>
              <AiOutlineDelete id="clear" onClick={handleDelete}/>
            </div>
          </th>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default Rankings;