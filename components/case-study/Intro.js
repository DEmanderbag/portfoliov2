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
              href={hero.cvLink}
              target="_blank"
              rel="noreferrer"
              className={styles.heroLink}
            >
              → Check my resume
            </a>
          )}
          {!hero.isCV && (
            <div className={styles.actionButtons}>
              {hero.codeLink && (
                <a
                  className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                  style={{
                    backgroundColor: `${hero.background}`,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href={hero.codeLink}
                >
                  Check code on GitHub
                </a>
              )}
              {hero.websiteLink && (
                <a
                  className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                  style={{ borderColor: `${hero.background}` }}
                  target="_blank"
                  rel="noreferrer"
                  href={hero.websiteLink}
                >
                  Check live version
                </a>
              )}
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
              placeholder="blur"
              blurDataURL={`/${hero.coverImage}`}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
