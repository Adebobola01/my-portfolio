import React from "react";
import styles from "./intro.module.scss";
import itachImg from "../../assets/images/itachi.png";
import devIcon from "../../assets/images/dev-icon.jpg";
import Socials from "../socials";

const Intro = () => {

    const style = {
        strokeDasharray: "9541.93, 9541.93",
        strokeDashoffset: "7156",
        transition: "fill 1s ease-in-out 0s",
        stroke: "rgb(204, 204, 204)",
        fill: "rgb(204, 204, 204)",
    }
    
    return (
        <section id="about" className={styles.about_me} >
            <blockquote>
                <p>Hi, my name is</p>
                <h1>Adebobola Oyedunmade</h1>
                    A software developer with 2 years of experience With a strong background in
                    blockchain technology and decentralized applications (dapps).
                {/* <br/>
                <br/>
                I possess an in-depth understanding of smart contracts and the Ethereum blockchain network, enabling me to build secure
                decentralized applications. My expertise lies in developing frontend and backend solutions,
                integrating blockchain protocols, and implementing smart contract functionalities.
                <br/>
                <br/>
                If you are looking to bring your ideas to life or need assistance in building a web3 dapp, I am here to help.
                Let's collaborate and create impactful decentralized applications
                that redefine the way we interact and transact in the digital world. */}
            </blockquote>
            <Socials type="desktop"/>
        </section>
    )
}

export default Intro;