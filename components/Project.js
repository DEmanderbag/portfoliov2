import styles from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef, createRef } from "react";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.animated}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -75px 0px" }
    );

    ref.forEach((element) => {
      observer.observe(element.current);
    });
  }, [ref]);
  return isIntersecting;
}

const Project = ({ projectData }) => {
  const refs = useRef([]);
  const refsArray = (refs.current = projectData.map(
    (element, i) => refs.current[i] ?? createRef()
  ));
  const onScreen = useOnScreen(refsArray);

  return (
    <section className={styles.projectGrid}>
      {projectData.map((project, i) => (
        <article
          key={project.name}
          className={`${styles.project} ${onScreen ? styles.animated : ""}`}
          ref={refs.current[i]}
          style={{ backgroundColor: `${project.background}` }}
        >
          <Link href={project.path}>
            <a className={styles.spaceTop}>
              <div className={styles.wrapper}>
                <div className={styles.about}>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <ul className={styles.tools}>
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className={styles.tags}
                      style={{ backgroundColor: `${project.tagsBackground}` }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.projectImage}>
                <Image
                  src={`${project.coverPhoto}`}
                  alt="test image"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={`${project.coverPhoto}`}
                  objectFit="cover"
                />
              </div>
            </a>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Project;
