import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
       <nav className={styles.navbar}>
         <div>
           <h2 className={styles.navbar__brand}>Covid Id</h2>
         </div>
         <div>
           <ul className={styles.navbar__list}>
           {/* <li className={styles.navbar__item}><Link className={styles.navbar__link} to="/">Home</Link></li> */}
             <li className={styles.navbar__item}><Link className={styles.navbar__link} to="/">Global</Link></li>
             <li className={styles.navbar__item}><Link className={styles.navbar__link} to="/covid/indo">Indonesia</Link></li>
             <li className={styles.navbar__item}><Link className={styles.navbar__link} to="/covid/province">Provinsi</Link></li>
             <li className={styles.navbar__item}><Link className={styles.navbar__link} to="/covid/about">About</Link></li>
           </ul>
         </div>
       </nav>
     </div>
  );
}

export default Navbar;
