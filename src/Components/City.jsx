import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'

function City() {
    const {index} = useParams()
    console.log(index)
 const [info, setInfo] = useState();

    const getInfoCity = async () => {
        const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
        const readData = await fetch(url).then((result) => result.json())
        setInfo(readData.results[0]);
      };
      //console.log(getInfoCity)
      console.log(info)
      useEffect(() => {
        getInfoCity();
      }, []);

    return (
        <div>
           <p>{index}</p>
        </div>
    )
}

export default City
