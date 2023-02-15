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

  return (
    <>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Movies" element={<Movies movieData={movieData}/>}/>
      <Route path="/Rankings" element={<Rankings/>}/>
    </Routes>
    </>
  )
}

export default App;
