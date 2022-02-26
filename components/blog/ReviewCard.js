import Image from "next/image";
import styles from "../../styles/blog/ReviewCard.module.scss";

const ReviewCard = ({ apartment }) => {
  return (
    <article>
      <div className={styles.reviewCard}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h4 className={styles.title}>{apartment.title}</h4>
            <span className={styles.description}>
              {apartment.propertyAddress}
            </span>
            <div className={styles.rating}>
              <div className={`${styles.star} ${styles.full}`}></div>
              <div className={`${styles.star} ${styles.full}`}></div>
              <div className={`${styles.star} ${styles.full}`}></div>
              <div className={`${styles.star} ${styles.full}`}></div>
              <div className={`${styles.star} ${styles.empty}`}></div>
            </div>
          </div>
          <div className={styles.reviewModule}>
            <div>
              <p className={styles.moduleMain}>
                EUR €{apartment.pricePerNight}
              </p>
              <p className={styles.moduleSec}>per night</p>
            </div>
            <div>
              <p className={styles.moduleMain}>{apartment.nightsStay}</p>
              <p className={styles.moduleSec}>
                {apartment.nightsStay === "1" ? "night" : "nights"}
              </p>
            </div>
          </div>
        </div>
        <section
          className={
            apartment.gallery.length > 2
              ? styles.imageGridThree
              : styles.imageGridTwo
          }
        >
          {apartment.gallery.map((image) => (
            <figure key={image} className="photoset-item" data-pswp-uid="13">
              <a href="#">
                <Image
                  src={`${image}`}
                  alt="Some random image"
                  layout="responsive"
                  width={150}
                  height={200}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={`${image}`}
                />
              </a>
            </figure>
          ))}
        </section>
      </div>
    </article>
  );
};

export default ReviewCard;
