import React, {useState, useRef, useEffect} from "react";
import styles from "./projects.module.scss";
import Project from "./Project";
import itaImg from "../../assets/images/dev-icon.jpg";
import parodyImg from "../../assets/images/parody.jpg";
import big3Img from "../../assets/images/big3 prev.jpg";

const Projects = () => {
    const domRef: any = useRef();
    const [isVisible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                // console.log("intersecting", isVisible)
                return setVisible(e.isIntersecting)
            })
        });
        observer.observe(domRef.current);
        return () =>observer.unobserve(domRef.current)
    }, [])
    console.log(isVisible)
    return (
        <section className={`${styles.projects} ${ isVisible ? styles.isVisible : null}`} id="projects" ref={domRef}>
            <h2>My Projects</h2>
            <div className={styles.container}>
                <Project name="Uniswap Parody" image={parodyImg} description="A UI clone of the swapping protocol uniswap" stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/uniswap-parody" liveLink="https://uniswap-parody.vercel.app/" />
                <Project name="big3 Marketplace" image={big3Img} description="A NFT marketPlace." stacks={["React", "Typescript", "SCSS", ]} codeLink="https://github.com/Adebobola01/big3-react" liveLink="https://big3.onrender.com/" />
            </div>
        </section>
    )
}

export default Projects;