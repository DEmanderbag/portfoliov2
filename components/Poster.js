import styles from "../styles/components/Poster.module.scss";
import Link from "next/link";

const posterData = [
  {
    path: "blog",
    linkText: "Join the fun",
    title: "Playground",
    info: "Play is not a luxury. Play is a necessity. Follow me as I recreate designs I've come across online",
    image:
      "https://images.unsplash.com/photo-1511135570219-bbad9a02f103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    path: "bookmarks",
    linkText: "Explore",
    title: `Bookmarks`,
    info: "A repository of all things useful and those less so",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    path: "blog",
    linkText: "Travel Experiences",
    title: "Travelogue",
    info: "trav·​el·​ogue |  ˈtra-və-ˌlȯg  , -ˌläg a piece of writing about travel",
    image:
      "https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=953&q=80",
  },
];

const Poster = () => {
  return (
    <section className={`globalWrapper ${styles.poster}`}>
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
