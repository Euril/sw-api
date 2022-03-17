import { useState, useEffect } from 'react';
import { getStarshipDetail } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const StarshipPage = () => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getStarshipDetail(location.state.ship.url)
    .then(shipData => setShipDetails(shipData))
  })
  return ( 
    <>
    <div className='classDiv'>
      <div className='container'>
        {shipDetails.name ? 
        <>
        <h3>Name: {shipDetails.name} </h3>
        <h3>Model: {shipDetails.model} </h3>

        <Link className='link'
            to='/'
            state={{  }}
            >
              RETURN
        </Link>
        </>
        :
        <>
        <h2>Loading Ship Details</h2>
        </>}
      </div>
    </div>
    </>
   );
}
export default StarshipPage;
