import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section className={`globalWrapper ${styles.about}`}>
      <div className={styles.aboutText}>
        <div>
          <h2>Hi, I&apos;m Dusan! 👋</h2>
        </div>
        <p>
          Frontend developer working in the medical field and currently living
          in Antwerp Belgium. My development stack is focused on performance and
          accessibility, while using latest technology.
        </p>
      </div>
    </section>
  );
};

export default About;
