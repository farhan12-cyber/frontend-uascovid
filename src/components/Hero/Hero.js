import styles from "./Hero.module.css";
import assets from "../assets/logo.png";
import { H2, IMG, P, R } from "../ui/p";
import Button from "../ui/button";
function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <H2>Covid ID</H2>
          <R>
            Monitoring Perkembangan Covid
          </R>
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </P>
          <Button>Vaccine</Button>
        </div>
        <div className="hero__right">
          <IMG
            src={assets}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;