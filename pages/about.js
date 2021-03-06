import styles from "../styles/about/AboutMain.module.scss";
import Intro from "../components/case-study/Intro";
import Head from "next/head";
import Link from "next/link";
import data from "../data/about.json";

export default function About() {
  return (
    <>
      <Head>
        {/* General */}
        <title>About | Dusan Milosevic</title>
        <meta
          name="description"
          content="Dusan Milosevic is a Front-End Developer likes solving problems with design and code. From the web development side; I'm comfortable with React, Next.js, Angular, CSS Modules, SASS, Bootstrap... What truly sets my work apart is my deep understanding of CSS. I know when and how to use flexbox versus grid layouts and truly understand the cascade."
        />
        {/* Open graph data */}
        <meta
          property="og:title"
          content="Dusan Milosevic | Front-End Developer"
        />
        <meta
          property="og:description"
          content="Dusan Milosevic is a Front-End Developer likes solving problems with design and code. From the web development side; I'm comfortable with React, Next.js, Angular, CSS Modules, SASS, Bootstrap... What truly sets my work apart is my deep understanding of CSS. I know when and how to use flexbox versus grid layouts and truly understand the cascade."
        />
        <meta property="og:site_name" content="About | Dusan Milosevic" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dusan.codes/about" />
        <meta property="og:image" content="/DusanMilosevic.jpeg" />
        {/* Twitter */}
        <meta name="twitter:title" content="About | Dusan Milosevic" />
        <meta
          name="twitter:description"
          content="Dusan Milosevic is a Front-End Developer likes solving problems with design and code. From the web development side; I'm comfortable with React, Next.js, Angular, CSS Modules, SASS, Bootstrap... What truly sets my work apart is my deep understanding of CSS. I know when and how to use flexbox versus grid layouts and truly understand the cascade."
        />
        <meta name="twitter:url" content="https://www.dusan.codes/about" />
        <meta name="twitter:image" content="/DusanMilosevic.jpeg" />
      </Head>
      <main className={styles.layout}>
        <Intro hero={data[0]} />
        <div className={styles.about}>
          <p>
            From the web development side; I&apos;m comfortable with React,
            Next.js, Angular, CSS Modules, SASS, Bootstrap... What truly sets my
            work apart is my deep understanding of CSS. I know when and how to
            use flexbox versus grid layouts and truly understand the cascade.
            Some of the side projects could be seen on{" "}
            <a href="https://github.com/DEmanderbag">Github</a>.
          </p>
          <p>
            Some stuff that makes me excited are CSS, UI Animation, Angular,
            React and delightful interfaces.
          </p>
          <p>
            Outside of work, I&apos;m usually working on{" "}
            <Link href="/playground">
              <a>side projects</a>
            </Link>
            , this helps me learn new skills at my own pace, without the
            constraints of budgets and timelines.
          </p>
          <p>
            In my spare time, you&apos;ll find me travelling to new places,
            listening to audiobooks and podcasts, taking photos or helping
            people with day to day tasks on Be My Eyes.
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
      </main>
    </>
  );
}
