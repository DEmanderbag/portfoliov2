import styles from "../styles/components/AboutCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const AboutCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.cardAbout}>
        <h3 className={styles.title}>About me</h3>
        <p>
          I&apos;m a Developer passionate about solving problems to help people
          and our planet. I have a strong background in Webflow development and
          over the years I’ve used my various skills to do some really fun work
          for a variety of companies, in addition to numerous personal projects.
        </p>
        <p>
          In 2019 I received a scholarship to Apple&apos;s Worldwide Developer
          conference (WWDC) by applying with my interactive pepeha project.
        </p>
        <Link href="/about">
          <a>Read more</a>
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/DusanMilosevic.jpeg"
          alt=""
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/DusanMilosevic.jpeg"
        />
      </div>
    </article>
  );
};

export default AboutCard;
