import styles from "../styles/Poster.module.scss";
import Link from "next/link";

const posterData = [
  {
    path: "blog",
    title: "User interface design",
    info: "Belajar Ul Design dari dasar",
    image: "",
  },
  {
    path: "blog",
    title: `Book marks`,
    info: "Belajar Ul Design dari dasar",
    image: "",
  },
  {
    path: "blog",
    title: "Travel blog",
    info: "Belajar Ul Design dari dasar",
    image: "",
  },
];

const Poster = () => {
  return (
    <section className={styles.poster}>
      {posterData.map((poster) => (
        <article key={poster.path} className={styles.posterCard}>
          <Link href={poster.path}>
            <a>
              <h1 className={styles.title}>{poster.title}</h1>
              <p className={styles.info}>{poster.info}</p>
            </a>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Poster;
