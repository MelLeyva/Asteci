import React from 'react';
import {Link} from 'react-router-dom';

function Table({data}) {

    return (
        <div >
            {data && data.map((city, index)=>(
                <ul className='table'  key={city._id}>
                    <Link to={`${city._id}`}><li key={index} >{city._id}</li></Link>
                    <li>{city.cityid}</li>
                    <li>{city.name}</li>
                    <li>{Number(city.probabilityofprecip)}</li>
                    <li>{Number(city.relativehumidity)}</li>
                    <li>{city.lastreporttime}</li>
                    {city.probabilityofprecip && (Number(city.probabilityofprecip)> 60 || Number(city.relativehumidity) > 50) ? (<p>Si</p>) : null}
                </ul>
            ))}
        </div>
    )
}

export default Table
