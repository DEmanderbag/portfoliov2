/* eslint-disable @next/next/no-img-element */
import styles from "../styles/About.module.scss";
const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutText}>
        <div>
          <p className={styles.position}>Frontend developer</p>
          <h2>Thats me!</h2>
        </div>
        <p>
          Over the past 12 years, Ive worked with a diverse range of clients,
          from startups to Fortune 500 companies.&nbsp;I love crafting
          interfaces that delight users and help businesses grow.
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
