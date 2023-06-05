import React, {useEffect, useRef, useState} from "react";
import styles from "./about.module.scss";

const About = (props: any) => {
    const domRef: any = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                // console.log("intersecting", isVisible)
                if (e.isIntersecting) {                    
                    props.handler(false);
                }
                return setVisible(e.isIntersecting)
            })
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current)
    }, [])
    
    return (
        <section className={`${styles.about} ${ isVisible ? styles.isVisible : null}`} ref={domRef} id="about" >
            <h2>About Me</h2>
            <p>
                I possess an in-depth understanding of smart contracts and the Ethereum blockchain network, enabling me to build secure
                decentralized applications. My expertise lies in developing frontend and backend solutions,
                integrating blockchain protocols, and implementing smart contract functionalities.
                <br/>
                <br/>
                If you are looking to bring your ideas to life or need assistance in building a web3 dapp, I am here to help.
                {/* Let's collaborate and create impactful decentralized applications
                that redefine the way we interact and transact in the digital world. */}
            </p>
        </section>
    )
}


export default About;