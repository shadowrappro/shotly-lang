import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../Header/Header.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function index() {
  const { lang, setLang, t } = useLanguage();
  const { Header } = t;
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <img src="./Shortly.svg" alt="shortly-logo" />

        <a className={styles.links} href="#">
          {Header.features}
        </a>
        <a className={styles.links} href="#">
          {Header.pricing}
        </a>
        <a className={styles.links} href="#">
          {Header.resources}
        </a>
      </div>

      <div className={styles.linktwo}>
        <a className={styles.links} href="#">
          {Header.login}
        </a>
        <a className={styles.signUp} href="#">
          {Header.signUp}
        </a>
        {/* language select */}
        <Select
          // value={lang}
          onValueChange={(value) => {
            setLang(value);
            console.log("tanlangan til", value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="🇺🇿 O'zbekcha" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="uz">🇺🇿 O'zbekcha</SelectItem>
              <SelectItem value="ru">🇷🇺 Русский</SelectItem>
              <SelectItem value="en">🇬🇧 English</SelectItem>
              <SelectItem value="ko">🇰🇷 한국인</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default index;
