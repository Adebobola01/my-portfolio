import React from "react";
import * as Scroll from "react-scroll";
import styles from "./navigation.module.scss";
import ToggleBtn from "../ToggletBtn";

const Navigation = (props: any) => {
    const Link = Scroll.Link;
    const scroll = Scroll.animateScroll;

    const scrollToB = () => {
        scroll.scrollToBottom();
    }
    

    return (
        <nav className={styles.navigation}>
            <div>
                <a
                    href="/"
                >
                    Home
                </a>
                <a
                    href="#about"
                >
                    About
                </a><a
                    href="#skills"
                >
                    Skills
                </a>
                <a
                    href="#projects"
                >
                    Projects
                </a>
            </div>
            <ToggleBtn click={props.toggleClick} opened={props.toggleOpen} />
        </nav>
    )
}

export default Navigation;