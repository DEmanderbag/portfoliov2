import Link from "next/link";
import styles from "../../styles/playgroud/PlaygroundCard.module.scss";

const PlaygroundCard = ({ data }) => {
  return (
    <>
      {data.map((article, i) => (
        <article key={i} className={styles.card}>
          <div className={styles.cardImage}></div>
          <p className={styles.date}>Published on {article.date}</p>
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.about}>{article.about}</p>
          <Link href={`/playground/${article.url}`}>
            <a className={styles.readMore}>Read more</a>
          </Link>
        </article>
      ))}
    </>
  );
};

export default PlaygroundCard;
