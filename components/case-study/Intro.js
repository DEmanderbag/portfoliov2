import Image from "next/image";
import styles from "../../styles/case-study/Intro.module.scss";

const Intro = ({ hero }) => {
  return (
    <>
      <section key={hero.name} className={styles.hero}>
        <div className={`globalWrapper ${styles.heroWrapper}`}>
          <h1>{hero.name}</h1>
          <p className={styles.heroSphere}>{hero.field}</p>
          <p className={styles.heroDescription}>{hero.intro}</p>
          {hero.isCV && (
            <a
              href={hero.contentLink}
              target="_blank"
              rel="noreferrer"
              className={styles.heroLink}
            >
              → Check my resume
            </a>
          )}
          {!hero.isCV && (
            <div className={styles.actionButtons}>
              <a
                className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                href={hero.contentLink}
              >
                Check code on GitHub
              </a>
              <a
                className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                href={hero.contentLink}
              >
                Check live version
              </a>
            </div>
          )}
        </div>
        <div className={styles.heroImageWrapper}>
          <div
            style={{ backgroundColor: `${hero.background}` }}
            className={styles.heroImage}
          >
            <Image
              src={`/${hero.coverImage}`}
              alt="test image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
