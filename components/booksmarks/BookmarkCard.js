import Image from "next/image";
import styles from "../../styles/bookmarks/BookmarkCard.module.scss";

const BookmarkCard = ({ devResources }) => {
  return (
    <>
      {devResources.map((resource) => (
        <article key={resource.title} className={styles.cardBasic}>
          <div className={styles.favicon}>
            <div className={styles.faviconMask}>
              <Image
                src={`/${resource.logo}`}
                alt="test image"
                layout="responsive"
                width={40}
                height={40}
                blurDataURL={`/${resource.logo}`}
              />
            </div>
          </div>
          <div className={styles.cardContent}>
            <p style={{ backgroundColor: `#f8f8f8` }} className={styles.tag}>
              {resource.tag}
            </p>
            <h4 className={styles.title}>{resource.title}</h4>
            <p>{resource.subtitle}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default BookmarkCard;
