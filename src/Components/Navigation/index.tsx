import React from "react";
import styles from "./navigation.module.scss";
import ToggleBtn from "../ToggletBtn";

const Navigation = (props: any) => {
    

    return (
        <nav className={styles.navigation}>
            <div>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </div>
            <ToggleBtn click={props.toggleClick} />
        </nav>
    )
}

export default Navigation;