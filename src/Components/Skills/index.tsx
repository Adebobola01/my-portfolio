import React from "react";
import styles from "./skills.module.scss";
import Skill from "./Skill";
import itachImg from "../../assets/images/itachi.png"


const Skills = () => {
    
    return (
        <section className={styles.skills} id="skills" >
            <h2>My Skills</h2>
            <div className={styles.skills_container} >
                <Skill image={itachImg} toolName="HTML" />
                <Skill image={itachImg} toolName="CSS" />
                <Skill image={itachImg} toolName="SASS/SCSS" />
                <Skill image={itachImg} toolName="Javascript" />
                <Skill image={itachImg} toolName="Typescript" />
                <Skill image={itachImg} toolName="React" />
                <Skill image={itachImg} toolName="NodeJS" />
                <Skill image={itachImg} toolName="MongoDb" />
                <Skill image={itachImg} toolName="ExpressJS" />
                <Skill image={itachImg} toolName="Web3JS" />
                <Skill image={itachImg} toolName="EthersJS" />
                <Skill image={itachImg} toolName="Git" />
                <Skill image={itachImg} toolName="React" />
                <Skill image={itachImg} toolName="React" />
                <Skill image={itachImg} toolName="React" />
            </div>
        </section>
    )
}

export default Skills;