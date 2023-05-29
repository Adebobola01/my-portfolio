import React from "react";
import styles from "./drawer.module.scss";

type propType = {
    open: boolean
}

const Drawer = ({ open }: propType) => {

    console.log(open)
    
    return (
        <div className={`${styles.drawer} ${ open === true ? styles.open_drawer : null}`} >
            <a href="#skills">
                Skills
            </a>
            <a href="#projects" >
                Projects
            </a>
            <a href="#contact" >
                Contact 
            </a>
        </div>
    )
}

export default Drawer;