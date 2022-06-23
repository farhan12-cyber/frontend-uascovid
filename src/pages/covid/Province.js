import { useState } from "react";
import AddCovidForm from "../../components/addcovidform/AddCovidForm";
import Hero from "../../components/Hero/Hero";
import Provinsi from "../../components/Provinsi/Provinsi";
import data from "../../utils/constants/provinces";
function ProvinceCovid() {
    const [provinces, setProvinces] = useState(data.provinces);
    return(
        <div>
            <Hero/>
            <Provinsi provinces ={provinces} setProvinces = {setProvinces} title = "Data Provinsi"/>
            <AddCovidForm provinces={provinces} setProvinces={setProvinces}/>
        </div>
    );
}
export default ProvinceCovid;