import styles from "../styles/Project.module.scss";
import Image from "next/image";

const Project = () => {
  return (
    <article className={styles.project} style={{ backgroundColor: "#e6f2ee" }}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Editorial Design</h2>
          <p className={styles.date}>Agustus 2021</p>
          <p>
            Dapet ide bikin landing page produk virtual meeting tapi disertai
            dengan game atau aktivitas yang enggak bikin bosen.
          </p>
        </div>
        <div className={styles.tools}>
          <p className={styles.tags}>Design Tool</p>
          <p className={styles.tool}>Figma</p>
        </div>
        <div className={styles.tools}>
          <p className={styles.tags}>Design Tool</p>
          <p className={styles.tool}>Figma</p>
        </div>
      </div>
      <Image
        src="/ilustration.jpg"
        alt="test image"
        layout="responsive"
        placeholder="blur"
        blurDataURL="/ilustration.jpg"
        width="400"
        height="450"
        objectFit="cover"
      />
    </article>
  );
};

export default Project;
