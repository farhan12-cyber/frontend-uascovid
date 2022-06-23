import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Foto from "../../components/Foto";
import Hero from "../../components/Hero/Hero";
import Indo from "../../components/indo/Indo";
import { updateCovid } from "../../features/covidSlice";
import ENDPOINTS from "../../utils/constants/endpoints";


function IndoCovid() {
    const dispatch = useDispatch();
    useEffect(()=>{
        getIndo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    async function getIndo() {
        const response = await axios(ENDPOINTS.INDO);
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
        dispatch(updateCovid(covid));
    }
    return(
        <div>
            <Hero/>
            <Indo title='Indonesia' ket='Menampilkan Data Covid Secara Indonesia'/>
            <Foto foto={ENDPOINTS.GAMBAR} title='Summary' ket='Summary Data Indonesia' />

        </div>
    );
}
export default IndoCovid;