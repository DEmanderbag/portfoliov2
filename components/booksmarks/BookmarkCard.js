import styles from "../../styles/bookmarks/BookmarkCard.module.scss";
import { useState, useEffect, useRef, createRef } from "react";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.animated}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    ref.forEach((element) => {
      observer.observe(element.current);
    });
  }, [ref]);
  return isIntersecting;
}

const BookmarkCard = ({ devResources }) => {
  const refs = useRef([]);
  const refsArray = (refs.current = devResources.map(
    (element, i) => refs.current[i] ?? createRef()
  ));
  const onScreen = useOnScreen(refsArray);

  return (
    <>
      {devResources.map((resource, i) => (
        <a
          key={i}
          href={resource.website}
          ref={refs.current[i]}
          className={`${styles.cardBasic} ${onScreen ? styles.animated : ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <article>
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
