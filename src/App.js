import StarShips from './pages/Starships/Starships';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <h1 className='header'>Starwars Starships</h1>
    <Routes>
      <Route path='/' element={<StarShips />}/>
      <Route path='/starship' element={<StarshipPage />}/>

    </Routes>
    </>
  );
}

export default App;
