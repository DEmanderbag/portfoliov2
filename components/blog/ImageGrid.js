import Image from "next/image";
import styles from "../../styles/blog/ImageGrid.module.scss";

const ImageGrid = ({ data }) => {
  return (
    <div className={styles.galleryGrid}>
      {data.map((image) => (
        <div key={image} className={styles.imageWrapper}>
          <Image
            src={image}
            alt=""
            placeholder="blur"
            blurDataURL={image}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
