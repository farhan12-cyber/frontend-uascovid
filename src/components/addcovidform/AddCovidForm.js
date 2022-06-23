import { useState } from "react";
import React from "react";
import data from "../../utils/constants/provinces";
import styles from "./AddCovidForm.module.css";
import assets from "../assets/logo2.png";
import Button from "../ui/button";
function AddCovidForm(props){
    const {provinces, setProvinces} = props;
    const [provinsi, setProvinsi] = useState();
    const [status, setStatus] = useState();
    const [jumlah, setJumlah] = useState();

    const [isProvinsiEmpty, setIsProvinsiEmpty] = useState(false);
    const [isStatusEmpty, setIsStatusEmpty] = useState(false);
    const [isJumlahEmpty, setIsJumlahEmpty] = useState(false);

    const simpan = (e) => {
        e.preventDefault();

        if (provinsi === ""){
            setIsProvinsiEmpty(true);
            return;
        }
        if (status === "") {
            setIsProvinsiEmpty(false);
            setIsStatusEmpty(true);
            return;
        }
    
        if (jumlah === "") {
            setIsProvinsiEmpty(false);
            setIsStatusEmpty(false);
            setIsJumlahEmpty(true);
            return;
        }
        const province = {
            kota: provinsi,
            [status]: jumlah,
        };
    
        const newProvince = [...provinces];
    
        const data = newProvince.map(propinsi =>
            // ternary operator
        propinsi.kota === province.kota ? { ...propinsi, [status] : jumlah } : propinsi
        );
        setProvinces(data);

    setIsProvinsiEmpty(false);
    setIsStatusEmpty(false);
    setIsJumlahEmpty(false);
    }




return (
    <div className={styles.container}>
        <div className={styles.Addmoviesapp__right}>
            <img
              className={styles.form__image}
              src={assets}
              alt=""
            />
        </div>

        <div className={styles.Addmoviesapp__left}>
            <h2 className={styles.Addmoviesapp_notes}> Form Covid</h2>
            {/* buat event onsubmit */}
            <form action="" onSubmit={simpan}>
                <div className={styles.form__title}>
                    <label htmlFor="">Provinsi</label>
                    <select className={styles.form__teks} onChange={(e) => setProvinsi(e.target.value)}>
                        <option>Silahkan Pilih Salah Satu Provinsi </option>
                            {data.provinces.map((data) => (
                                <option key={data.kota} value={data.kota}>
                                {data.kota}
                            </option>
                            ))}
                        </select>
                        {isProvinsiEmpty && <span>Provinsi Wajib di isi</span>}
                </div>

                <div className={styles.form__title}>
                    <label htmlFor="">Status</label>
                    <select className={styles.form__teks} onChange={(e) => setStatus(e.target.value)} >
                        <option>Silahkan Pilih Status</option>
                            <option value="kasus">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="meninggal">Meninggal</option>
                        </select>
                        {isStatusEmpty && <span>Status wajib di isi</span>}
                </div>

                <div className={styles.form__title}>
                    <label htmlFor="">Jumlah</label>
                    <input className={styles.form__teks} placeholder="Silahkan Input jumlah" type="text" onChange={(e) => setJumlah(e.target.value)}/>
                    {isJumlahEmpty && <span>Jumlah Wajib Diisi</span>}
                </div>
                <Button full >Submit</Button>
            </form>
        </div>
    </div>
    );    
}
export default AddCovidForm;