import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../Logo";
import Navigation from "../Navigation";
const Navbar = (props: any) => {
    
    return (
        <header className={styles.header} >
            <Logo />
            <Navigation toggleClick={props.toggleClick} toggleOpen={props.toggleOpen} />
        </header>
    )
}

export default Navbar;