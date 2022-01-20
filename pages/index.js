import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function Home() {

  const [data, setData] = React.useState([]);
  

  const getData = async () => {
    try{
        const response = await axios.get(
            "https://61e75ae1e32cd90017acbaca.mockapi.io/api/v1/blog"
        );

        setData(response.data);
        console.log(data)
        
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    getData();
}, []);


  return (
    <table border="1">
        <tr>
            <th colspan="4" bgcolor="red">Data Mahasiswa</th>
        </tr>
        <tr bgcolor="yellow">
            <td>Nama</td>
            <td>NIM</td>
            <td>Prodi</td>
            <td>Alamat</td>
        </tr>
        <tr>
            <td>D.O.</td>
            <td>41200292</td>
            <td>Teknik Informatika</td>
            <td>Cirebon</td>
        </tr>
        <tr>
            <td>Rifa</td>
            <td>41200293</td>
            <td>Teknik Informatika</td>
            <td>Cirebon</td>
        </tr>
        <tr>
            <td>Wulan</td>
            <td>41200294</td>
            <td>Teknik Informatika</td>
            <td>Cirebon</td>
        </tr>
        <tr>
            <td>Hayah</td>
            <td>41200295</td>
            <td>Teknik Informatika</td>
            <td>Cirebon</td>
        </tr>
        <tr>
            <td>Risma</td>
            <td>41200296</td>
            <td>Teknik Informatika</td>
            <td>Cirebon</td>
        </tr>
    </table>
  )
}
