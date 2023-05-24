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
    
    const stacksContent: any = stacks.forEach((s: string) => (
        <div className={styles.stack} >

        </div>
    ))
    
    return (
        <div className={styles.container}>
            <img src={itachi} alt={name} />
            <p className={styles.text}>{description}</p>
            <div className={styles.stacks}>
                {stacksContent}
            </div>
        </div>
    )
}

export default Project;