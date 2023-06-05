import React, {useEffect, useRef} from "react";
import styles from "./contact.module.scss";


const Contact = (props: any) => {

    const domRef: any = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                // console.log("intersecting", isVisible)
                if (e.isIntersecting) {                   
                   return props.handler(true);
                }
            })
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current)
    }, [])

    return (
        <section id="contact-me" className={styles.contact} ref={domRef} >
            <h2>Contact Me</h2>
            <p>Got a question, proposal or want to work together on something or just want to say HI? feel free to reach out. 👇</p>
            <span>
                Say <a href="mailto:adebobolamuhydeen@gmail.com">Hi</a>👋  
            </span>
        </section>
    )
}

export default Contact;