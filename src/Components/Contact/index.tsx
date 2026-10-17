import React, { useEffect, useRef } from "react";
import styles from "./contact.module.scss";

const Contact = (props: any) => {
  const domRef: any = useRef();
  useEffect(() => {
    const currentEl = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        // console.log("intersecting", isVisible)
        if (e.isIntersecting) {
          return props.handler(true);
        }
      });
    });
    observer.observe(domRef.current);
    if (currentEl) {
      return () => observer.unobserve(currentEl);
    }
  }, [domRef, props]);

  return (
    <section id="contact-me" className={styles.contact} ref={domRef}>
      <h2>Contact Me</h2>
      <p>
        Got a question, proposal or want to work together on something or just
        want to say HI? feel free to reach out. 👇
      </p>
      <a href="mailto:adebobolamuhydeen@gmail.com">
        Say <span>Hi</span>👋
      </a>
    </section>
  );
};

export default Contact;
