import React, { useState } from 'react';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import DetailBand from '../components/Detail.js'

import Table from 'react-bootstrap/Table';



function Bandas() {
  const [data, setData] = useState([]);
  const [banda, setBanda] = useState("");
  const [year, setYear] = useState(0);



  const url = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((datos) => {setData(datos)});
  }, []);


  for(const element in data){
    if(2022-parseInt(data[element]["foundation_year"]) > year){
        setYear(2022-data[element]["foundation_year"])
        setBanda(data[element]["name"]);
    }

  }


  return (
    <ul>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th><FormattedMessage id = "name"></FormattedMessage></th>
          <th><FormattedMessage id = "country"></FormattedMessage></th>
          <th><FormattedMessage id = "gender"></FormattedMessage></th>
          <th><FormattedMessage id = "fundation"></FormattedMessage></th>
        </tr>
      </thead>
      <tbody style={{alignItems: "center"}}>
        { Object.keys(data).map(function(value, idx) {
            const obj = data[value]
            return(<tr>
                <td>{obj["id"]}</td>
                <td style={{color:"blue", alignItems: "center"}}>{obj["name"]}</td>
                <td>{obj["country"]}</td>
                <td>{obj["genre"]}</td>
                <td>{obj["foundation_year"]}</td>

            </tr>)
            
         })}

      </tbody>
    </Table>
        <FormattedMessage id = "antigua"></FormattedMessage>
        {banda}
        <FormattedMessage id = "tiempo"></FormattedMessage>
        {year}
        <FormattedMessage id="years"></FormattedMessage>

    </ul>
  );
}

export default Bandas;