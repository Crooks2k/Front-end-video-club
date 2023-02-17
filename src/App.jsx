import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'
import Index from './components/Index/Index';
import "./components/Index/Index.css"
import Movies from './components/Movies/Movies';
import "./components/Movies/Movies.css"
import Rankings from './components/Rankings/Rankings';
import "./components/Rankings/Rankings.css"
import "./components/Global-components/Menu.css"


function App() {

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {

    const DataGet = async () => {

      const movieData = await fetch ("https://backendvideoclub.onrender.com/App/movies")
      const response = await movieData.json()
      setMovieData(response)
    }
    
    DataGet()
  }, []);

// Send updated item to backend


const editTable = (id, updatedItem) => {
  const body = JSON.stringify(updatedItem);

  const requestInit = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: body
  };

  const EditTableReq = async () => {
    try {
      const response = await fetch(
        `https://backendvideoclub.onrender.com/App/movies/${id}`, requestInit
      );

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const updatedItem = await response.json();
      console.log(updatedItem);
    } catch (error) {
      console.error(error);
    }
  };

  EditTableReq();
};

const AddData = (item) => {
  const body = JSON.stringify(item);

  const requestInit = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: body
  };

  const EditTableReq = async () => {
    try {
      const response = await fetch(
        `https://backendvideoclub.onrender.com/App/newMovies/`, requestInit
      );

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const updatedItem = await response.json();
      console.log(updatedItem);
    } catch (error) {
      console.error(error);
    }
  };

  EditTableReq();
};

  return (
    <>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Movies" element={<Movies movieData={movieData} setMovieData={setMovieData} AddData={AddData} editTable={editTable}/>}/>
      <Route path="/Rankings" element={<Rankings/>}/>
    </Routes>
    </>
  )
}

export default App;
