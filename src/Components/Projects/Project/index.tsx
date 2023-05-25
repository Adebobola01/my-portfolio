import React from "react";
import styles from "./project.module.scss";
import itachi from "../../../assets/images/dev-icon.jpg";

interface ProjectType {
    name: string,
    image: any,
    description: string,
    stacks: string[]
}

const Project = ({ name, image, description, stacks }: ProjectType) => {
    
    const stacksContent: any = stacks.map((s: string) => (
        <span>{s}</span>
    ))

    console.log(stacksContent, stacks)
    
    return (
        <div className={styles.container}>

            <div className={styles.img_container}>
                <img src={itachi} alt={name} />     
            </div>
            <div className={styles.details}>
                <h3>{name}</h3>
                <p className={styles.text}>{description}</p>
                <div className={styles.stacks}>
                    <div className={styles.stacks_container}>
                        {stacksContent}
                    </div>
                    <div className={styles.nav}>
                        <a href="">Live</a>
                        <a href="">code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;