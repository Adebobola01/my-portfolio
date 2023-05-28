import React, {useState} from "react";
import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import Intro from "../Intro";
import Hero from "../hero";
import Skills from "../Skills";
import Projects from "../Projects";
import Socials from "../socials";
import Drawer from "../Drawer";
import Copyright from "../Copyright";



const Layout = () => {

    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(!open);
    }
    
    return (
        <>
            <Navbar toggleClick={openDrawer} />
            <main className={styles.main} >
                <Intro />
                <div className={styles.main_container}>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Socials type="mobile" />
                    <Copyright/>
                    <Drawer open={open} />
                </div>
            </main>
        </>
    )
}

export default Layout;