import React, { useState, useRef, useEffect } from "react";
import styles from "./projects.module.scss";
import Project from "./Project";
import itaImg from "../../assets/images/dev-icon.jpg";
import parodyImg from "../../assets/images/parody.jpg";
import big3Img from "../../assets/images/big3 prev.jpg";
import forkifyImg from "../../assets/images/forkify.png";
import edtImg from "../../assets/images/edt.png";
import certgoImg from "../../assets/images/certgo.png";
import basicImg from "../../assets/images/basic.png";

const Projects = () => {
  const domRef: any = useRef();
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        // console.log("intersecting", isVisible)
        return setVisible(e.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    return () => {
      if (domRef) {
        return observer.unobserve(domRef.current);
      }
    };
  }, []);
  return (
    <section
      className={`${styles.projects} ${isVisible ? styles.isVisible : null}`}
      id="projects"
      ref={domRef}
    >
      <h2>My Projects</h2>
      <div className={styles.container}>
        <Project
          liveLink="https://jounal-app.vercel.app/"
          stacks={["Typescript", "Nodejs"]}
          codeLink="https://github.com/EDT-JOURNAL/journal-server"
          name="EDT Journal"
          image={edtImg}
          description="A bloging website"
        />
        <Project
          liveLink="certgo.app"
          stacks={["Javascript", "Nodejs", "react"]}
          codeLink="#"
          name="CertGo"
          image={certgoImg}
          description="A certificate generator App"
        />

        <Project
          liveLink="https://basic-agency-bobola.netlify.app/"
          stacks={["Typescript", "react"]}
          codeLink="https://github.com/Adebobola01/basic-agency-clone"
          name="Basic Agency"
          image={basicImg}
          description="A UI clone of the basic agency home page."
        />

        <Project
          name="Uniswap Parody"
          image={parodyImg}
          description="A UI clone of the swapping protocol uniswap"
          stacks={["React", "Typescript", "SCSS"]}
          codeLink="https://github.com/Adebobola01/uniswap-parody"
          liveLink="https://uniswap-parody.vercel.app/"
        />
        <Project
          name="big3 Marketplace"
          image={big3Img}
          description="A NFT marketPlace."
          stacks={["React", "Typescript", "SCSS"]}
          codeLink="https://github.com/Adebobola01/big3-react"
          liveLink="https://big3.onrender.com/"
        />
        <Project
          name="Forkify"
          image={forkifyImg}
          description="A recipe application"
          stacks={["HTML", "CSS", "JAVASCRIPT(MVP)"]}
          liveLink="https://forkify-bobola.netlify.app/"
          codeLink="https://github.com/Adebobola01/forkify"
        />
      </div>
    </section>
  );
};

export default Projects;
