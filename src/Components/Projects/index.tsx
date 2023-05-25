import React from "react";
import styles from "./projects.module.scss";
import Project from "./Project";
import itaImg from "../../assets/images/dev-icon.jpg";


const Projects= ()=>{
    return (
        <section className={styles.projects} id="projects">
            <h2>My Projects</h2>
            <div className={styles.container}>
                <Project name="Uniswap Parody" image={itaImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} />
                <Project name="Uniswap Parody" image={itaImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} />
                <Project name="Uniswap Parody" image={itaImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} />
                <Project name="Uniswap Parody" image={itaImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} />
                <Project name="Uniswap Parody" image={itaImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} />
                <Project name="Uniswap Parody" image={itaImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} />
            </div>
        </section>
    )
}

export default Projects;