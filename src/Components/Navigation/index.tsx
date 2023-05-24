import React from "react";
import styles from "./navigation.module.scss";

const Navigation = () => {
    

    return (
        <nav className={styles.navigation}>
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
        </nav>
    )
}

export default Navigation;