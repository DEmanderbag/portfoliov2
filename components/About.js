import styles from "../styles/about/About.module.scss";

const About = () => {
  return (
    <section className={`globalWrapper ${styles.about}`}>
      <div className={styles.aboutText}>
        <div>
          <h1 className={`h2 ${styles.title}`}>Hi, I&apos;m Dusan! 👋</h1>
        </div>
        <p>
          Front End Developer who likes solving problems with design and code.
          My development stack is focused on performance and accessibility while
          using the latest technology.
        </p>
      </div>
    </section>
  );
};

export default About;
