import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../Footer/Footer.module.css";

function index() {
  const { t } = useLanguage();
  const { Footer } = t;
  const { Features, Resources, Company } = Footer;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.img} src="./Shortly-white.svg" alt="" />

        <div className={styles.nav}>
          <div className={styles.links}>
            <ul className={styles.navList}>
              <p className={styles.title}>Features</p>
              <li className={styles.link}>
                <a href="#">{Features.linkShortening}</a>
              </li>
              <li className={styles.link}>
                <a href="#">{Features.brandedLinks}</a>
              </li>
              <li className={styles.link}>
                <a href="#">{Features.analytics}</a>
              </li>
            </ul>
            <ul className={styles.navList}>
              <p className={styles.title}>Resources</p>
              <li className={styles.link}>
                <a href="#">{Resources.blog}</a>
              </li>
              <li className={styles.link}>{Resources.developers}</li>
              <li className={styles.link}>{Resources.support}</li>
            </ul>

            <ul className={styles.navList}>
              <p className={styles.title}>Company</p>
              <li className={styles.link}>
                <a href="#">{Company.about}</a>
              </li>
              <li className={styles.link}>{Company.ourTeam}</li>
              <li className={styles.link}>{Company.careers}</li>
              <li className={styles.link}>{Company.contact}</li>
            </ul>
          </div>
          <ul className={styles.socials}>
            <li>
              <a href="#">
                <img src="./facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./pinterest.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./instagram.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
