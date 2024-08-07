import { type ReactElement } from "react";
import type { ButtonM } from "./Button.model";
import styles from "./Button.module.css";
import { cssVar } from "@/app/types/cssVar.model";

export const Button = ({
  bg,
  borderRadius,
  children,
  color,
  fontSize,
  padding,
  text,
  border
}: ButtonM): ReactElement => {
  const cssStyles:cssVar = {
    "--bg": bg,
    "--borderRadius": borderRadius,
    "--color": color,
    "--fontSize": fontSize,
    "--padding": padding,
    "--border":border
  };
  return (
    <button className={styles.btn} style={cssStyles}>
      {children}
    </button>
  );
};
