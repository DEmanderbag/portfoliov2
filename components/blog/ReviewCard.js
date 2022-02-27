import Image from "next/image";
import styles from "../../styles/blog/ReviewCard.module.scss";

const ReviewCard = ({ reviewCardData }) => {
  return (
    <article>
      <div className={styles.reviewCard}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h4 className={styles.title}>{reviewCardData.title}</h4>
            <span className={styles.description}>
              {reviewCardData.propertyAddress}
            </span>
            <div className={styles.rating}>
              {reviewCardData.stars.map((star, i) => (
                <div
                  // Fix this key value here
                  key={star}
                  className={`${styles.star} ${
                    star === "1"
                      ? styles.full
                      : star === ".5"
                      ? styles.half
                      : styles.empty
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.reviewModule}>
            <div>
              <p className={styles.moduleMain}>
                EUR €{reviewCardData.pricePerNight}
              </p>
              <p className={styles.moduleSec}>per night</p>
            </div>
            <div>
              <p className={styles.moduleMain}>{reviewCardData.nightsStay}</p>
              <p className={styles.moduleSec}>
                {reviewCardData.nightsStay === "1" ? "night" : "nights"}
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            reviewCardData.gallery.length > 2
              ? styles.imageGridThree
              : styles.imageGridTwo
          }
        >
          {reviewCardData.gallery.map((image) => (
            <figure key={image}>
              <a href="#">
                <Image
                  src={`${image}`}
                  alt=""
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
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
