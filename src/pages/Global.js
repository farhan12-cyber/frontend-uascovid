import axios from "axios";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import Foto from "../components/Foto";
import Hero from "../components/Hero/Hero";
import Indo from "../components/indo/Indo";
import { updateCovid } from "../features/covidSlice";
import ENDPOINTS from "../utils/constants/endpoints";

function GlobalCovid() {
    const dispatch = useDispatch();
    useEffect(()=>{
        getGlobal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    async function getGlobal() {
        const response = await axios(ENDPOINTS.GLOBAL);
        console.log(response);
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
        dispatch(updateCovid(covid))
    }
    return(
        <div>
            <Hero />
            <Indo title='Global' ket='Menampilkan Data Covid Secara Global' />
            <Foto foto={ENDPOINTS.GAMBARS} title='Summary' ket='Summary Data Global' />
        </div>
    );
}
export default GlobalCovid;