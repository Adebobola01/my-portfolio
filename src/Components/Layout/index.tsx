import React, {useState} from "react";
import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import Intro from "../Intro";
import Hero from "../hero";
import Skills from "../Skills";
import Projects from "../Projects";
import Socials from "../socials";
import Drawer from "../Drawer";
import About from "../about";
import Contact from "../Contact";


const Layout = () => {

    const [open, setOpen] = useState(false);
    const [toggleOpen, setToggleOpen] = useState(false)
    const [drawerLink, setDrawerLink] = useState<boolean>(false);

    const openDrawer = () => {
        setOpen(!open);
        setToggleOpen(!toggleOpen)
    }

    const drawerLinkHandler = (val:boolean) => {
        setDrawerLink(val);
    }
    
    return (
        <>
            <Navbar toggleClick={openDrawer} toggleOpen={toggleOpen} />
            <main className={styles.main} >
                <Intro />
                <div className={styles.main_container}>
                    <Hero />
                    <About handler={drawerLinkHandler} />
                    <Skills />
                    <Projects/>
                    <Contact handler={drawerLinkHandler} />
                    <Socials type="mobile" />
                    <Drawer open={open} link={drawerLink} />
                </div>
            </main>
        </>
    )
}

export default Layout;