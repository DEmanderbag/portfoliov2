import styles from "../styles/components/Poster.module.scss";
import Link from "next/link";

const posterData = [
  {
    path: "blog",
    linkText: "Experience",
    title: "Things to do on your trip",
    info: "Belajar Ul Design dari dasar",
    image:
      "https://images.unsplash.com/photo-1511135570219-bbad9a02f103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    path: "blog",
    linkText: "Find more",
    title: `Bookmarks`,
    info: "Belajar Ul Design dari dasar",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    path: "blog",
    linkText: "Travel Experiences",
    title: "Travel blog",
    info: "Belajar Ul Design dari dasar",
    image:
      "https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=953&q=80",
  },
];

const Poster = () => {
  return (
    <section className={styles.poster}>
      {posterData.map((poster) => (
        <article
          key={poster.path}
          className={styles.posterCard}
          style={{ backgroundImage: `url(${poster.image})` }}
        >
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{poster.title}</h2>
            <p className={styles.info}>{poster.info}</p>
            <Link href={poster.path}>
              <a>
                <div className={styles.link}>{poster.linkText}</div>
              </a>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Poster;
