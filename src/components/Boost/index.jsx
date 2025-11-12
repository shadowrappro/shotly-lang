import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../Boost/Boost.module.css";
function index() {
  const { t } = useLanguage();
  const { Boost } = t;

  return (
    <div className={styles.container}>
      <div className={styles.boosContent}>
        <h2 className={styles.boostTitle}>{Boost.title}</h2>
        <button className={styles.boostButton}>{Boost.button}</button>
      </div>
    </div>
  );
}

export default index;
