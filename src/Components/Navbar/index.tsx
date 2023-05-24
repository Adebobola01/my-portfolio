import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../Logo";
import Navigation from "../Navigation";

const Navbar = () => {
    
    return (
        <header className={styles.header} >
            <Logo />
            <Navigation/>
        </header>
    )
}

export default Navbar;