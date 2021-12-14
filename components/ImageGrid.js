import Image from "next/image";
import styles from "../styles/ImageGrid.module.scss";

const ImageGrid = ({ data }) => {
  return (
    <section className={styles.ImageGrid}>
      {data.map((image) => (
        <div key={image} className={image.className}>
          <figure className="photoset-item single" data-pswp-uid="3">
            <a href="https://turbo.paulstamatiou.com/p/2018/amsterdam/copyright-paulstamatiou_com-DSC6245-1500.webp">
              <Image
                src={image.image}
                alt="Some random image"
                layout="responsive"
                width={800}
                height={450}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={image.image}
              />
            </a>
          </figure>
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
