import styles from "../styles/components/IntroText.module.scss";
const IntroText = ({ data }) => {
  return (
    <div className={styles.overflow}>
      <h1 className={styles.title}>
        {[...data.title].map((letter, i) => (
          <span
            key={i}
            style={{ animationDelay: 300 + 40 * i + "ms" }}
            className={styles.rowLetter}
          >
            {letter}
          </span>
        ))}
      </h1>
      <p className={styles.subheading}>{data.subheading}</p>
    </div>
  );
};

export default IntroText;
