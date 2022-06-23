import React from "react";
import Table from "../Table/Table";
import { DIV, H1, P } from "../ui/p";
import styles from "./Provinsi.module.css";
// import data from "../../utils/constants/provinces";
function Provinsi(props) {
  const{provinces, title} = props;
    return (
    <div className={styles.container}>
      <div className={styles.provinsi}>
          <H1>{title}</H1>
          <P>Data Covid Berdasarkan Provinsi</P>
      <DIV>
          <table className={styles.provinsi__table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
                {provinces.map((data, index)=>(
                    <Table
                    index={index}
                    key={data.kota}
                    kota={data.kota}
                    kasus={data.kasus}
                    dirawat={data.dirawat}
                    sembuh={data.sembuh}
                    meninggal={data.meninggal}
                    />
                ))}
            </tbody>
            </table>
      </DIV>
      </div>
      </div>
    );
}
export default Provinsi;