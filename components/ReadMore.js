import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/ReadMore.module.scss";

const ReadMore = ({ readMore }) => {
  return (
    <section className={styles.readMore}>
      <div className={styles.readMoreSectionTitle}>
        <h4>{readMore.sectionTitle}</h4>
        <p>&#8595;</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.readMoreImage}>
          <Image
            src={readMore.imageUrl}
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL={readMore.imageUrl}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={styles.readMoreAbout}>
          <h3 className={styles.readMoreTitle}>{readMore.name}</h3>
          <p>{readMore.description}</p>
          {readMore.url && (
            <Link href={readMore.url}>
              <a>{readMore.actionLabel}</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
