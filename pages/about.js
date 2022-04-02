import styles from "../styles/about/AboutMain.module.scss";
import Intro from "../components/case-study/Intro";
import List from "../components/case-study/List";
import Link from "next/link";
import data from "../data/about.json";

export default function About() {
  return (
    <section className={styles.layout}>
      <Intro hero={data[0]} />
      <div className={styles.about}>
        <p>
          From the web development side; I&apos;m comfortable with React,
          Next.js, Angular, CSS Modules, SASS, Bootstrap... What truly sets my
          work apart is my deep understanding of CSS. I know when and how to use
          flexbox versus grid layouts and truly understand the cascade. Some of
          the side projects could be seen on{" "}
          <a href="https://github.com/DEmanderbag">Github</a>.
        </p>
        <p>
          Some stuff that make me excited are CSS, UI Animation, Angular, React
          and delightful interfaces.
        </p>
        <p>
          Outside of work, I&apos;m usually working on{" "}
          <Link href="/playground">
            <a>side projects</a>
          </Link>
          . It helps me learn new skills at my own pace, without the constraints
          of budgets and timelines.
        </p>
        <p>
          In my spare time, you&apos;ll find me{" "}
          <Link href="/blog">
            <a>travelling to new places</a>
          </Link>
          , listening to audiobooks and podcasts, or taking photos.
        </p>
        <p>
          Leaving time for sports like running, cycling, and jump rope is
          essential for my physical and mental health. But the most important
          one is the time for long walks in nature.
        </p>
        <p>Lovely to meet you, what is your story?</p>
        <a
          href="mailto:dusan-milosevic@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactMe}
        >
          Contact me
        </a>
      </div>
      <div className="p-4">
        <List listItems={data[1]} />
      </div>
    </section>
  );
}
