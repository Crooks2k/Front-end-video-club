import { Route, Routes } from 'react-router-dom';
import './App.css'
import Index from './components/Index/Index';
import "./components/Index/Index.css"
import Movies from './components/Movies/Movies';
import "./components/Movies/Movies.css"
import Rankings from './components/Rankings/Rankings';
import "./components/Rankings/Rankings.css"
import "./components/Global-components/Menu.css"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path="/Rankings" element={<Rankings/>}/>
    </Routes>
    </>
  )
}

export default App;
