import styles from "../styles/components/Poster.module.scss";
import Link from "next/link";
import Image from "next/image";
import data from "../data/posterData.json";

const Poster = () => {
  return (
    <section className={`globalWrapper ${styles.poster}`}>
      <h3 className={styles.title}>Discover other pages</h3>
      {data.map((poster) => (
        <article key={poster.path} className={styles.posterCard}>
          <div className={styles.wrapper}>
            <h4 className={`h3 ${styles.title}`}>{poster.title}</h4>
            <p className={styles.info}>{poster.info}</p>
            <Link href={poster.path}>
              <a>
                <div className={styles.link}>{poster.linkText}</div>
              </a>
            </Link>
          </div>
          <Image
            src={`${poster.image}`}
            alt="Picture of a laptop screen"
            placeholder="blur"
            blurDataURL={`${poster.image}`}
            layout="fill"
          />
        </article>
      ))}
    </section>
  );
};

export default Poster;
