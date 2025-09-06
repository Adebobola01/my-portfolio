import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.scss";

const About = (props: any) => {
  const domRef: any = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        // console.log("intersecting", isVisible)
        if (e.isIntersecting) {
          props.handler(false);
        }
        return setVisible(e.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <section
      className={`${styles.about} ${isVisible ? styles.isVisible : null}`}
      ref={domRef}
      id="about"
    >
      <h2>About Me</h2>
      <p>
        {/* I possess an in-depth understanding of smart contracts and the
          Ethereum blockchain network, enabling me to build secure decentralized
          applications. My expertise lies in developing frontend and backend
          solutions, integrating blockchain protocols, and implementing smart
          contract functionalities.  */}
        {/* Software developer with three and a half years of experience developing
        and managing websites and web applications, with an in-depth
        understanding of smart contracts and the Ethereum blockchain network,
        enabling me to build secure decentralized applications. My expertise
        lies in developing frontend and backend solutions, integrating
        blockchain protocols, and implementing smart contract functionalities.
        <br />
        <br />
        If you are looking to bring your ideas to life or need assistance in
        building a web2 or web3 application, I am here to help. */}
        {/* Let's collaborate and create impactful decentralized applications
                that redefine the way we interact and transact in the digital world. */}
        Hi, I'm Adebobola. I'm a software developer who loves bringing ideas to
        life on the web. My path started in Engineering, which gave me a deep
        appreciation for structured problem-solving. Today, I apply that same
        precision to building full-stack web applications. Whether I'm creating
        an interactive frontend or building a scalable API, my goal is always
        the same: to create a seamless and reliable experience for the end
        users.
        <br />
        <br />I believe in the power of collaboration and am always looking for
        opportunities to learn from my peers and contribute to a positive team
        environment. Feel free to check out my projects, and let's connect!
      </p>
    </section>
  );
};

export default About;
