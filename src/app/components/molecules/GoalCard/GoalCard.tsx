import { type ReactElement } from "react";
import styles from "./GoalCard.module.css";
import { type GoalCardM } from "./GoalCard.model";

import { NextIcon } from "../../svgs/NextIcon";

export const GoalCard = ({children,icon}:GoalCardM): ReactElement => {
  return (
    <div className={styles.goalCard}>
      <div className={styles.imageContainer}>        
        {icon}
      </div>
      <div className={styles.description}>        
        {children}
      </div>
    </div>
  );
};
