import React from "react";
import styles from "./skills.module.scss";
import Skill from "./Skill";
import itachImg from "../../assets/images/itachi.png";
import htmlLogo from "../../assets/images/icons8-html-5.svg";
import cssLogo from "../../assets/images/icons8-css.svg";
import jsLogo from "../../assets/images/icons8-js.svg";
import tsLogo from "../../assets/images/icons8-typescript.svg";
import reactLogo from "../../assets/images/icons8-react-native.svg";
import nodeLogo from "../../assets/images/icons8-nodejs.svg";



const Skills = () => {


    
    return (
        <section className={styles.skills} id="skills" >
            <h2>My Skills</h2>
            <div className={styles.skills_container} >
                <Skill image={htmlLogo} toolName="HTML" />
                <Skill image={htmlLogo} toolName="CSS" />
                <Skill image={htmlLogo} toolName="SASS/SCSS" />
                <Skill image={htmlLogo} toolName="Javascript" />
                <Skill image={htmlLogo} toolName="Typescript" />
                <Skill image={htmlLogo} toolName="React" />
                <Skill image={htmlLogo} toolName="NodeJS" />
                <Skill image={htmlLogo} toolName="MongoDb" />
                <Skill image={htmlLogo} toolName="ExpressJS" />
                <Skill image={htmlLogo} toolName="Web3JS" />
                <Skill image={htmlLogo} toolName="EthersJS" />
                <Skill image={htmlLogo} toolName="Git" />
                <Skill image={htmlLogo} toolName="React" />
                <Skill image={htmlLogo} toolName="React" />
                <Skill image={htmlLogo} toolName="React" />
            </div>
        </section>
    )
}

export default Skills;