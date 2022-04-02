import styles from "../../styles/case-study/TextBlock.module.scss";

const TextBlock = ({ textData }) => {
  return (
    <div className="globalWrapper" key={textData.intro}>
      <div className={styles.wrapper}>
        {textData.title && <h4 className={styles.title}>{textData.title} </h4>}
        <p>{textData.paragraph}</p>
      </div>
    </div>
  );
};

export default TextBlock;
