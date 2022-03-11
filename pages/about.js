import styles from "../styles/about/AboutMain.module.scss";
import Intro from "../components/case-study/Intro";
import List from "../components/case-study/List";
import Link from "next/link";

const caseStudyIntro = [
  {
    name: "Dusan Milosevic",
    field: "Frontend Developer",
    intro:
      "I'm currently working in the medical field and living in Antwerp Belgium. My development stack is focused on performance and accessibility, while using latest technology.",
    coverImage:
      "60751db04d121379342550c6_image_processing20200129-19798-1k8ponz 11-min-p-500.png",
    isCV: true,
    contentLink: "cv.pdf",
    background: "var(--color-2)",
  },
];

const listItems = [
  {
    title: "Software",
    data: [
      "Visual Studio Code",
      "Github",
      "Terminal",
      "Figma",
      "Sketch",
      "Browsers: Safari, Edge",
      "iCloud 2TB",
    ],
  },
  {
    title: "Hardware",
    data: [
      "MacBook Pro 2018 (6-core Intel i7, 256GB, 16GB, Radeon Pro 555X 4 GB)",
      "MX Master 3",
      "iPhone 12 Pro Max 128GB",
      "Apple Magic Keyboard",
      "Airpods Pro",
    ],
  },
];

export default function About() {
  return (
    <section className={styles.layout}>
      <Intro caseStudyIntro={caseStudyIntro} />
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
          Some stuff that makes me excited are CSS, UI Animation, Angular, React
          and delightful interfaces ✨.
        </p>
        <p>
          Outside of work, I&apos;m usually working on{" "}
          <Link href="/playgroud">
            <a>side projects</a>
          </Link>
          . It helps me learn new skills at my own pace, without the constraints
          of budgets and timelines.
        </p>
        <p>
          In my spare time, you&apos;ll either find me{" "}
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
        <List listItems={listItems} />
      </div>
    </section>
  );
}
