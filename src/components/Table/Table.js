import React from "react";
import { SUB } from "../ui/p";
function Table(props) {
    const {index, kota, kasus, sembuh, dirawat, meninggal} = props;
    return(
        <tr>
            <SUB>{index + 1}</SUB>
            <SUB>{kota}</SUB>
            <SUB>{kasus}</SUB>
            <SUB>{sembuh}</SUB>
            <SUB>{dirawat}</SUB>
            <SUB>{meninggal}</SUB>
        </tr>
    );
}
export default Table;