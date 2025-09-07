import React from "react";
import styles from "./drawer.module.scss";

type propType = {
  open: boolean;
  link: boolean;
};

const Drawer = ({ open, link }: propType) => {
  return (
    <div
      className={`${styles.drawer} ${
        open === true ? styles.open_drawer : null
      }`}
    >
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href={`${!link ? "#contact-me" : "#about"}`}>
        {!link ? "Contact" : "About"}
      </a>
    </div>
  );
};

export default Drawer;
