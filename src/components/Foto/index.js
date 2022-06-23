/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import StyledIndo from "../ui/indo/styled.indo";
import { IMGS } from "../ui/p";
import styles from "./foto.module.css";
// import Card from "../card/Card";
function Foto(props){
    const {foto, title, ket} = props;
    return (
        <div className={styles.container}>
            <StyledIndo>
                <div>
                <h1>{title}</h1>
                <p>{ket}</p>
                </div>
            <div>
                <IMGS src={foto}/>
            </div>
            </StyledIndo>
        </div>
    );
}
export default Foto;