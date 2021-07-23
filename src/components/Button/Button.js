import React from "react";

import styles from "./Button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <div className={styles.div_button}>
      <button className={styles.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default Button;
