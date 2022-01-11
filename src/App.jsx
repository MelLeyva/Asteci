import { useState, useEffect } from "react";
import Table from "./Components/Table";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import City from "./Components/City";
import  "./Sass/styles.scss"

function App() {

  const [data, setData] = useState();
  
  const getData = async () => {
    const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
    const readData = await fetch(url).then((result) => result.json())
    setData(readData.results);
  };
  //console.log(getData)
  // console.log(data)
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Table data={data} />}/>
          <Route exact path="/:id" element={<City/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
