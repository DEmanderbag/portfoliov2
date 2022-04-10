import styles from "../../styles/Work.module.scss";
import Project from "../../components/Project";
import IntroText from "../../components/IntroText";
import index from "../../data/work/index.json";

const introData = {
  title: "Projects",
  subheading: "List of some of my projects that Ive worked on",
};

export default function Work() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <IntroText data={introData} />
      </div>
      <Project projectData={index} />
    </section>
  );
}
