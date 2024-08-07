import { ReactElement } from "react";
import { Button } from "../../atoms/Button/Button";
import styles from "./Hero.module.css";

export const Hero = (): ReactElement => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Creating solutions from code</h1>
        <div className={styles.separator}/>
        <h2 className={styles.subtitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>
      </div>
      <div className={styles.buttons}>
        <Button bg="#007BFF" padding="1rem" borderRadius="0.2rem">
          Get to know my skills
        </Button>
        <Button border="solid 1px yellow" padding="1rem" borderRadius="0.2rem" color="yellow">
          My experience
        </Button>
      </div>
    </div>
  );
};
