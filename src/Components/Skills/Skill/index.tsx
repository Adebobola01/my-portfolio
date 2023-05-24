import React from "react";
import styles from "./skill.module.scss";

interface SkillType {
    image: any,
    toolName: string
}


const Skill = ({image, toolName}: SkillType) => {
    
    return (
        <div className={styles.skill}>
            <img src={image} alt={toolName} />
            <span>{ toolName}</span>
        </div>
    )
}

export default Skill;