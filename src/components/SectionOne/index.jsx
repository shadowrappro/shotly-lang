import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../SectionOne/SectionOne.module.css";

function index() {
  const { lang, t } = useLanguage();
  const { statistcs } = t;
  let baseMargin = 0

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://json-api.uz/api/project/shortly/${lang}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, lang);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{statistcs.title}</h1>
          <p className={styles.text}>{statistcs.text}</p>
        </div>

        <div className={styles.cards}>
          <ul className={styles.carList}>
            {data.map((item, id) => {
              return (
                <li
                  className={styles.cardLi}
                  key={item.id}
                >
                  <img
                    className={styles.cardsImg}
                    src={`./${item.id}.svg`}
                    alt=""
                  />
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
