import React from "react";
import styles from "./project.module.scss";

interface ProjectType {
  name: string;
  image: any;
  description: string;
  stacks: string[];
  liveLink?: string;
  codeLink?: string;
}

const Project = ({
  name,
  image,
  description,
  stacks,
  liveLink,
  codeLink,
}: ProjectType) => {
  const stacksContent: any = stacks.map((s: string) => (
    <span key={s}>{s}</span>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p className={styles.text}>{description}</p>
        <div className={styles.stacks}>
          <div className={styles.stacks_container}>{stacksContent}</div>
          <div className={styles.nav}>
            <a href={liveLink} target="_blank">
              <span>Live</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href={codeLink} target="_blank">
              <span>Code</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
