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
                <Link
                    to="home"
                    smooth={true}
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                >
                    About
                </Link><Link
                    to="skills"
                    smooth={true}
                >
                    Skills
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    Projects
                </Link>
                <a onClick={scrollToB} >btn</a>
            </div>
            <ToggleBtn click={props.toggleClick} />
        </nav>
    )
}

export default Navigation;