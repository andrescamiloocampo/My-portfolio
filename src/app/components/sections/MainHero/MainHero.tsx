import { type ReactElement } from "react";
import { Hero } from "../../organisms";
import styles from './MainHero.module.css';

export const MainHero = ():ReactElement => {
  return (
    <section className={styles.dashboard}>
      <Hero />
      <div className={styles.imgContainer}>        
      </div>
    </section>
  );
}
