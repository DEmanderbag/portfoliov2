import styles from "../../styles/playgroud/PlaygroundMain.module.scss";
import IntroText from "../../components/IntroText";

const introData = {
  title: "Playground",
  subheading:
    "A collection of more designs and front-end coding. These are a mix of freelance, contest, practice and side projects.",
};
export default function Playground() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <IntroText data={introData} />
      </div>
      <div className={styles.itemsGrid}>
        <div className={styles.card}>
          <div className={styles.cardImage}></div>
          <p className={styles.date}>Published on 22 February, 2021</p>
          <p className={styles.title}>Lorem ipsum dolor sit</p>
          <p>
            amet consectetur adipisicing elit. Fugiat molestias facere mollitia
            vel saepe consectetur dolor illum voluptatum recusandae, aperiam
            ratione, quia doloribus nemo! Blanditiis officia vel ipsum quis
            labore?
          </p>
          <a
            href="mailto:dusan-milosevic@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactMe}
          >
            → Check code on Github
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}></div>
          <p className={styles.title}>Menu Animation</p>
          <p>
            amet consectetur adipisicing elit. Fugiat molestias facere mollitia
          </p>
          <span className={styles.tags}>React</span>
        </div>
      </div>
    </section>
  );
}
