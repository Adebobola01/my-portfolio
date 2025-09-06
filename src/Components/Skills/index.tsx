import React, { useState, useRef, useEffect } from "react";
import styles from "./skills.module.scss";
import Skill from "./Skill";
// import htmlLogo from "../../assets/images/itachi.png";
import htmlLogo from "../../assets/images/icons8-html.svg";
import cssLogo from "../../assets/images/icons8-css.svg";
import jsLogo from "../../assets/images/icons8-javascript.svg";
import tsLogo from "../../assets/images/icons8-typescript.svg";
import reactLogo from "../../assets/images/react-original.svg";
import scssLogo from "../../assets/images/icons8-sass.svg";
import gitLogo from "../../assets/images/icons8-git.svg";
import mongoLogo from "../../assets/images/mongodb-original.svg";
import expLogo from "../../assets/images/express-original.svg";
import nodeLogo from "../../assets/images/icons8-nodejs.svg";
import ethersLogo from "../../assets/images/ethers-seeklogo.com.svg";
import web3jsLogo from "../../assets/images/web3js-seeklogo.com.svg";
import hardLogo from "../../assets/images/hardhat-seeklogo.com.svg";
import truffleLogo from "../../assets/images/truffle-seeklogo.com.svg";
import shadcnLogo from "../../assets/images/shadcn-ui-seeklogo.svg";
import framermotionLogo from "../../assets/images/framer-motion.svg";
import redisLogo from "../../assets/images/redis-logo-svgrepo-com.svg";
const Skills = () => {
  const domRef: any = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        // console.log("intersecting", isVisible)
        return setVisible(e.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <section
      className={`${styles.skills} ${isVisible ? styles.isVisible : null}`}
      id="skills"
      ref={domRef}
    >
      <h2>My Skills</h2>
      <div className={styles.skills_container}>
        <Skill image={reactLogo} toolName="React" />
        {/* <Skill image={htmlLogo} toolName="HTML" /> */}
        <Skill image={cssLogo} toolName="CSS" />
        <Skill
          image={
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          }
          toolName="Tailwind CSS"
        />
        <Skill image={scssLogo} toolName="SASS/SCSS" />
        <Skill image={shadcnLogo} toolName="ShadCn UI" />
        <Skill image={framermotionLogo} toolName="Framer Motion" />
        <Skill image={jsLogo} toolName="Javascript" />
        <Skill image={tsLogo} toolName="Typescript" />
        <Skill image={nodeLogo} toolName="NodeJS" />
        <Skill
          image={
            "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
          }
          toolName="PostgreSQL"
        />
        <Skill image={mongoLogo} toolName="MongoDb" />
        <Skill image={expLogo} toolName="ExpressJS" />
        <Skill
          image={"https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"}
          toolName="Golang"
        />
        <Skill image={redisLogo} toolName="Redis" />
        <Skill image={web3jsLogo} toolName="Web3JS" />
        <Skill image={ethersLogo} toolName="EthersJS" />
        <Skill image={gitLogo} toolName="Git" />
        <Skill image={hardLogo} toolName="Hardhat" />
        <Skill image={truffleLogo} toolName="truffle" />
      </div>
    </section>
  );
};

export default Skills;
