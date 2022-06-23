/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
 import StyledFooter from "../ui/footer/styled.footer";
import styles from "./Footer.module.css";

 function Footer() {
   /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
   return (
     <div className={styles.container}>
       <StyledFooter>
         <h2>Covid Id</h2>
         <div>
           <ul>
             <li>Global</li>
             <li>Indonesia</li>
             <li>Provinsi</li>
           </ul>
         </div>
         </StyledFooter>
     </div>
   );
 }
 
 export default Footer;