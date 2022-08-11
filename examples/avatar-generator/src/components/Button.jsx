import { forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef((props, ref) => {
  return (
    <button className={styles.btn} ref={ref} {...props}>
      {props.children}
    </button>
  );
});

export default Button;
