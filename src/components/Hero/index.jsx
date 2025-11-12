import React from "react";
import styles from "../Hero/Hero.module.css";
import { useLanguage } from "../../context/LanguageContext";

function index() {
  const { t } = useLanguage();
  const { Hero } = t;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{Hero.title}</h1>
        <p className={styles.text}>{Hero.text}</p>
        <button className={styles.button}>{Hero.button}</button>
      </div>
      <img className={styles.img} src="./working_with_computer.svg" alt="working_with_computer" />
    </div>
  );
}

export default index;
