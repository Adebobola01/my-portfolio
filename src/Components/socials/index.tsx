import React from "react";
import styles from "./socials.module.scss";
import twitterLogo from "../../assets/images/Twitter-logo.svg";
import linkedInLogo from "../../assets/images/icons8-linkedin-480.svg";
import githubLogo from "../../assets/images/iconmonstr-github-5.svg";
import Copyright from "../Copyright";

type propType = {
    type: "desktop" | "mobile"
}


const Socials = ({type}: propType) => {
    

    return (
        <div className={`${styles.socials_container} ${ type === "desktop" ? styles.desktop : styles.mobile}`}>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/adebobola-oyedunmade-34a464218/"><img src={linkedInLogo} /></a>
                <a href="https://twitter.com/AdebobolaMuhyd1"><img src={twitterLogo} /></a>
                <a href="https://github.com/Adebobola01/TheBig3-minting-website"><img src={githubLogo}/></a>
            </div>
            <Copyright/>
        </div>
    )
}

export default Socials;