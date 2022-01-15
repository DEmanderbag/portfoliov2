import styles from "../styles/Project.module.scss";
import Image from "next/image";

const Project2 = () => {
  return (
    <article className={styles.project2} style={{ backgroundColor: "#e6ecf2" }}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <h2>Editorial Design</h2>
          <p className={styles.date}>Agustus 2021</p>
          <p>
            Dapet ide bikin landing page produk virtual meeting tapi disertai
            dengan game atau aktivitas yang enggak bikin bosen.
          </p>
        </div>
        <ul className={styles.tools}>
          <li className={styles.tags}>User Research</li>
          <li className={styles.tags}>PWA</li>
          <li className={styles.tags}>Web</li>
          <li className={styles.tags}>UX & UI Design</li>
          <li className={styles.tags}>Menu</li>
          <li className={styles.tags}>QR code</li>
          <li className={styles.tags}>Design Tool</li>
        </ul>
      </div>
      <Image
        src="/ilustration2.jpg"
        alt="test image"
        layout="responsive"
        placeholder="blur"
        blurDataURL="/ilustration2.jpg"
        width="450"
        height="450"
        objectFit="cover"
      />
    </article>
  );
};

export default Project2;
