import styles from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";

const Project = ({ projectData }) => {
  return (
    <>
      {projectData.map((project) => (
        <article
          key={project.name}
          className={styles.project}
          style={{ backgroundColor: `${project.background}` }}
        >
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
          <Image
            src={`/${project.coverPhoto}`}
            alt="test image"
            layout="responsive"
            placeholder="blur"
            blurDataURL={`/${project.coverPhoto}`}
            width="450"
            height="450"
            objectFit="cover"
          />
        </article>
      ))}
    </>
  );
};

export default Project;
