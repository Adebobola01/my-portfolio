import React from "react";
import styles from "./contact.module.scss";


const Contact = () => {
    

    return (
        <section id="contact-me" className={styles.contact}>
            <h2>Contact Me</h2>
            <p>Got a question, proposal or want to work together on something or just want to say HI? feel free to reach out. 👇</p>
            <span>
                Say <a href="mailto:adebobolamuhydeen@gmail.com">Hi</a>👋  
            </span>
        </section>
    )
}

export default Contact;