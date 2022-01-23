/* eslint-disable @next/next/no-img-element */
import styles from "../styles/About.module.scss";
const About = () => {
  return (
    <section className={`globalWrapper ${styles.about}`}>
      <div className={styles.aboutText}>
        <div>
          <h2>Hi, I&apos;m Dusan!</h2>
        </div>
        <p>
          I&apos;m a Frontend developer working in the medical field and
          currently living in Antwerp Belgium. My development stack is focused
          on performance and accessibility, while using latest technology.
        </p>
      </div>
      <div className={styles.grid}>
        <div>
          <img
            src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db04d121379342550c6_image_processing20200129-19798-1k8ponz%2011-min-p-500.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%2012-min.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%2013-min.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db05a9a1b47d320c2a0_image_processing20200129-19798-1k8ponz%207-min.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
