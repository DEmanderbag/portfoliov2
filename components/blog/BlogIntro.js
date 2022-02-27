import styles from "../../styles/blog/BlogIntro.module.scss";

const BlogIntro = ({ datePublished, title }) => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroText}>
        <span className={styles.type}>blog</span>
        <span> Published on {datePublished}</span>
      </p>
    </div>
  );
};

export default BlogIntro;
