import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../SectionOne/SectionOne.module.css";
import { Skeleton } from "@/components/ui/skeleton";

function index() {
  const { lang, t } = useLanguage();
  const { statistcs } = t;
  let temMargin = "56";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://json-api.uz/api/project/shortly/${lang}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, lang);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{statistcs.title}</h1>
          <p className={styles.text}>{statistcs.text}</p>
        </div>

        <span className={styles.blueLine}></span>

        <div className={styles.cards}>
          <div className={loading ? `hidden` : ''}>
            <ul className={styles.carList}>
              {data.map((item, index) => {
                return (
                  <li
                    className={`${styles.cardLi} mt-[${temMargin}px]`}
                    key={item.id}
                    style={{ marginTop: `${temMargin * index}px` }}
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

          <div className={loading ? "" : `hidden`}>
            <ul className={styles.carList}>
              <li className={`${styles.cardLi}`} style={{ marginTop: `0px` }}>
                <Skeleton
                  className={`${styles.cardsImg} h-[100px] w-[100px] rounded-50`}
                />
                <h3 className={styles.cardTitle}>
                  <Skeleton className={`${styles.cardTitle} h-4 w-[200px]`} />
                </h3>
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
              </li>
              <li className={`${styles.cardLi}`} style={{ marginTop: `44px` }}>
                <Skeleton
                  className={`${styles.cardsImg} h-[100px] w-[100px] rounded-50`}
                />
                <h3 className={styles.cardTitle}>
                  <Skeleton className={`${styles.cardTitle} h-4 w-[200px]`} />
                </h3>
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
              </li>
              <li className={`${styles.cardLi}`} style={{ marginTop: `88px` }}>
                <Skeleton
                  className={`${styles.cardsImg} h-[100px] w-[100px] rounded-50`}
                />
                <h3 className={styles.cardTitle}>
                  <Skeleton className={`${styles.cardTitle} h-4 w-[200px]`} />
                </h3>
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
                <Skeleton className={`h-4 w-[300px]`} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
