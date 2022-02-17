import styles from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const Project = ({ projectData }) => {
  return (
    <section className={styles.projectGrid}>
      {projectData.map((project) => (
        <article
          key={project.name}
          className={styles.project}
          style={{ backgroundColor: `${project.background}` }}
        >
          <Link href={project.path}>
            <a>
              <div className={styles.wrapper}>
                <div className={styles.about}>
                  <h2>{project.name}</h2>
                  <p className={styles.date}>{project.date}</p>
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
