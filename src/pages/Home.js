import { useEffect, useState } from "react";
import React from "react";
import AddCovidForm from "../components/addcovidform/AddCovidForm";
import Hero from "../components/Hero/Hero";
import Indo from "../components/indo/Indo";
import Provinsi from "../components/Provinsi/Provinsi";
import data from "../utils/constants/provinces";
import ENDPOINTS from "../utils/constants/endpoints";
import axios from "axios";
function Main() {
  const[dataa, setCovid] = useState([]);
  const [provinces, setProvinces] = useState(data.provinces);
  useEffect(()=>{
    getGlobal();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
async function getGlobal() {
  const response = await axios(ENDPOINTS.GLOBAL);
  const covid = [
  {
      judul :"confirmed",
      angka : response.data.confirmed
  },
  {
      judul :"deaths",
      angka : response.data.deaths
  },
  {
      judul :"recovered",
      angka : response.data.recovered
  },
  ];
  setCovid(covid);
}
  return (
    <main>
      <Hero />
      <Indo data={dataa} title="Ini Halaman Home" />
      <Provinsi provinces ={provinces} setProvinces={setProvinces} />
      <AddCovidForm provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
