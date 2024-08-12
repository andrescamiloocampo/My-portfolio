import { type ReactElement } from "react";
import { GoalCard } from "../../molecules/GoalCard/GoalCard";
import { NextIcon, ReactIcon } from "../../svgs";

import styles from "./GoalsSection.module.css";

export const GoalsSection = (): ReactElement => {
  return (
    <section className={styles.goalsSection}>
      <div className={styles.title}>
        <div className={styles.separator} />
        <h1>My goals</h1>
        <div className={styles.separator} />
      </div>
      <div className={styles.goals}>
        <GoalCard icon={<NextIcon size="92" />}>
          <p>
            10 months of certified work experience developing in nextjs, in
            projects such as <q>EPM Novacoin</q>, <q>Sqil Campus</q> and{" "}
            <q>Wavf platform</q>.
          </p>
        </GoalCard>
        <GoalCard icon={<ReactIcon />}>
          <p>
            More than a year of empirical learning and almost a year applying it
            in professional projects.
          </p>
        </GoalCard>
      </div>
    </section>
  );
};
