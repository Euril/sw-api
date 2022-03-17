import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom'

const StarShips = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])

  return ( 
    <>

      <div className='classDiv'>  
      {starships.length ?
      <>
      {starships.map((ship) => (
        <div className='container' key={ship.name}>
          <Link className='link'
            to='/starship'
            state={{ ship }}
            >
              {ship.name}
          </Link>

          </div>
        
      ))}  
      </>
      :
      <>
       <h2>Loading Fleet</h2>
      </>
    }
    </div>
    </>
   );
}
 
export default StarShips;