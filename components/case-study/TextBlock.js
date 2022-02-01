import styles from "../../styles/case-study/TextBlock.module.scss";

const TextBlock = ({ textData }) => {
  return (
    <>
      {textData.map((intro) => (
        <div className="globalWrapper" key={intro}>
          <div className={styles.wrapper}>
            {intro.title && <h4 className={styles.title}>{intro.title} </h4>}
            <p>{intro.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TextBlock;
