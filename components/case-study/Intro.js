import Image from "next/image";
import styles from "../../styles/case-study/Intro.module.scss";

const Intro = ({ caseStudyIntro }) => {
  return (
    <>
      {caseStudyIntro.map((intro) => (
        <section key={intro.name} className={styles.hero}>
          <div className={`globalWrapper ${styles.heroWrapper}`}>
            <h1>{intro.name}</h1>
            <p className={styles.heroSphere}>{intro.field}</p>
            <p className={styles.heroDescription}>{intro.intro}</p>
            <a
              href={intro.contentLink}
              target="_blank"
              rel="noreferrer"
              className={styles.heroLink}
            >
              {intro.isCV
                ? `→ Check my resume`
                : `→ Visit live site (${intro.linkText})`}
            </a>
          </div>
          <div className={styles.heroImageWrapper}>
            <div
              style={{ backgroundColor: `${intro.background}` }}
              className={styles.heroImage}
            >
              <Image
                src={`/${intro.coverImage}`}
                alt="test image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Intro;
