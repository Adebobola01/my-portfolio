import React from "react";
import styles from "./projects.module.scss";
import Project from "./Project";
import itaImg from "../../assets/images/dev-icon.jpg";
import parodyImg from "../../assets/images/parody.jpg";


const Projects= ()=>{
    return (
        <section className={styles.projects} id="projects">
            <h2>My Projects</h2>
            <div className={styles.container}>
                <Project name="Uniswap Parody" image={parodyImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/uniswap-parody" />
                <Project name="Uniswap Parody" image={parodyImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/uniswap-parody"/>
                <Project name="Uniswap Parody" image={parodyImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/uniswap-parody"/>
                <Project name="Uniswap Parody" image={parodyImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/uniswap-parody"/>
                <Project name="Uniswap Parody" image={parodyImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/uniswap-parody"/>
                <Project name="Uniswap Parody" image={parodyImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/uniswap-parody"/>
            </div>
        </section>
    )
}

export default Projects;