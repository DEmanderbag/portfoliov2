import Image from "next/image";
import styles from "../../styles/bookmarks/BookmarkCard.module.scss";

const BookmarkCard = ({ devResources }) => {
  return (
    <>
      {devResources.map((resource) => (
        <a
          key={resource.title}
          href={resource.website}
          className={styles.cardBasic}
          target="_blank"
          rel="noreferrer"
        >
          <article>
            {/* <div className={styles.favicon}>
            <div className={styles.faviconMask}>
              <Image
                src={`${resource.logo}`}
                alt="test image"
                layout="responsive"
                width={40}
                height={40}
                blurDataURL={`${resource.logo}`}
              />
            </div>
          </div> */}
            <div className={styles.cardContent}>
              <p
                style={{ backgroundColor: `${resource.tagColor}` }}
                className={styles.tag}
              >
                {resource.tag}
              </p>
              <h4 className={styles.title}>{resource.title}</h4>
              <p className={styles.source}>{resource.websiteShort}</p>
              <p>{resource.subtitle}</p>
            </div>
          </article>
        </a>
      ))}
    </>
  );
};

export default BookmarkCard;
