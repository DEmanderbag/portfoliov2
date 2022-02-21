import styles from "../../styles/bookmarks/FeatureCard.module.scss";
import Image from "next/image";

const FeatureCard = ({ devResources }) => {
  return (
    <>
      {devResources.map((resource) => (
        <a
          href={resource.website}
          key={resource.title}
          target="_blank"
          rel="noreferrer"
        >
          <article className={styles.featuredCard}>
            <p className={styles.tag}>{resource.tag}</p>
            <h4 className={styles.title}>{resource.title}</h4>
            <p className={styles.source}>{resource.websiteShort}</p>
            <p>{resource.subtitle}</p>
            <div className={styles.logoContainer}>
              <Image
                src={`${resource.logo}`}
                alt=""
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL={`${resource.logo}`}
              />
            </div>
          </article>
        </a>
      ))}
    </>
  );
};

export default FeatureCard;
