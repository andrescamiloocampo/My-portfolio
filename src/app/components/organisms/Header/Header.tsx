import { type ReactElement } from "react";
import styles from "./Header.module.css";
import { Button } from "../../atoms/Button/Button";

export const Header = (): ReactElement => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.title}>
        <p className={styles.name}>Andrés Ocampo</p>
        <p className={styles.job}>Frontend Developer</p>
      </div>
      <ul className={styles.items}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <Button
        border="solid 0.1rem white"
        padding="0.2rem 1rem"
        borderRadius="2rem"
      >
        Work with me
      </Button>
    </div>
  );
};
