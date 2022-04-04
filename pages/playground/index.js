import styles from "../../styles/playgroud/PlaygroundMain.module.scss";
import IntroText from "../../components/IntroText";
import PlaygroundCard from "../../components/playground/PlaygroundCard";
import data from "../../data/playground/index.json";

export default function Playground() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <IntroText data={data[0]} />
      </div>
      <section className={styles.itemsGrid}>
        <PlaygroundCard data={data[1]} />
      </section>
    </section>
  );
}
