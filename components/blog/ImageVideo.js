import styles from "../../styles/blog/ImageVideo.module.scss";
import Image from "next/image";
import Video from "../Video";

const ImageVideo = ({ video, image }) => {
  return (
    <div className={styles.gallerySmall}>
      {video && (
        <div className={styles.imageWrapper}>
          <Video poster={video.poster} source={video.source} />
        </div>
      )}
      {image.map((src) => (
        <div key={src} className={styles.imageWrapper}>
          <Image
            src={src}
            alt=""
            placeholder="blur"
            blurDataURL={src}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageVideo;
