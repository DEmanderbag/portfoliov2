import Image from "next/image";
import styles from "../styles/ReviewCard.module.scss";

const ReviewCard = () => {
  return (
    <article className={styles.reviewSection}>
      <div className={styles.reviewCard}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h4 className={styles.title}>Lemala: Kuria Hills Lodge</h4>
            <span className={styles.description}>
              Wogakurya Hills, Northern Sergengeti, Tanzania
            </span>
            {/* You need to implement this component */}
            <div className={styles.rating}>
              <div className={`${styles.star} ${styles.full}`}></div>
              <div className={`${styles.star} ${styles.full}`}></div>
              <div className={`${styles.star} ${styles.full}`}></div>
              <div className={`${styles.star} ${styles.half}`}></div>
              <div className={`${styles.star} ${styles.empty}`}></div>
            </div>
          </div>
          <div className={styles.reviewModule}>
            <div>
              <p className={styles.moduleMain}>USD $600+</p>
              <p className={styles.moduleSec}>per night</p>
            </div>
            <div>
              <p className={styles.moduleMain}>4</p>
              <p className={styles.moduleSec}>nights</p>
            </div>
          </div>
        </div>
        <section className={styles.reviewGrid}>
          <figure className="photoset-item" data-pswp-uid="13">
            <a href="https://turbo.paulstamatiou.com/p/sets/africa-2018/north-serengeti/copyright-paulstamatiou_com-sony-a7riii-safari-setup-DSC9914-2000.webp">
              <Image
                src="/camp.webp"
                alt="Some random image"
                layout="responsive"
                width={150}
                height={200}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/camp.webp"
              />
            </a>
          </figure>
          <figure className="photoset-item" data-pswp-uid="14">
            <a href="https://turbo.paulstamatiou.com/p/sets/africa-2018/north-serengeti/copyright-paulstamatiou_com-DSC4446-2000.webp">
              <Image
                src="/camp.webp"
                alt="Some random image"
                layout="responsive"
                width={150}
                height={200}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/camp.webp"
              />
            </a>
          </figure>
          <figure className="photoset-item" data-pswp-uid="15">
            <a href="https://turbo.paulstamatiou.com/p/sets/africa-2018/north-serengeti/copyright-paulstamatiou_com-DSC4444-2000.webp">
              <Image
                src="/camp.webp"
                alt="Some random image"
                layout="responsive"
                width={150}
                height={200}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/camp.webp"
              />
            </a>
          </figure>
        </section>
      </div>
    </article>
  );
};

export default ReviewCard;
