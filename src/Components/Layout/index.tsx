import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import Intro from "../Intro";
import Hero from "../hero";
import Skills from "../Skills";
import Projects from "../Projects";
import Socials from "../socials";


const Layout = () => {
    
    return (
        <>
            <Navbar />
            <main className={styles.main} >
                <Intro />
                <div className={styles.main_container}>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Socials type="mobile" />
                </div>
            </main>
        </>
    )
}

export default Layout;