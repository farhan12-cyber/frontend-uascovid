import React from "react";
import { useSelector } from "react-redux";
import StyledIndo from "../ui/indo/styled.indo";
import styles from "./Indo.module.css";
// import Card from "../card/Card";
function Indo(props){
    const {title, ket} = props;
    const data = useSelector((state)=>state.covid.covid);
    return (
        <div className={styles.container}>
            <StyledIndo>
                <div>
                <h1>{title}</h1>
                <p>{ket}</p>
                </div>
            <div className={styles.indo__body}>
                {data.map((data)=>(
                    <div className={styles.card}>
                    <h4>{data.judul}</h4>
                    <h2>{data.angka.value.toLocaleString()}</h2>
                    </div>
                ))}
            </div>
            <div className={styles.indo__update}>
                <p>Last Update : {data.last_update}</p>
            </div>
            </StyledIndo>
        </div>
    );
}
export default Indo;