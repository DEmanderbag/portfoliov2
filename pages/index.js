import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Poster from "../components/Poster";
import Project from "../components/Project";
import About from "../components/About";
import index from "../data/work/index.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* General */}
        <title>Dusan Milosevic | Front-End Developer</title>
        <meta
          name="description"
          content="Dusan Milosevic is a Front-End Developer who likes solving problems with design and code."
        />
        {/* Open graph data */}
        <meta
          property="og:title"
          content="Dusan Milosevic | Front-End Developer"
        />
        <meta
          property="og:description"
          content="Dusan Milosevic is a Front-End Developer who likes solving problems with design and code."
        />
        <meta
          property="og:site_name"
          content="Dusan Milosevic | Front-End Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dusan.codes/" />
        <meta property="og:image" content="/DusanMilosevic.jpeg" />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Dusan Milosevic | Front-End Developer"
        />
        <meta
          name="twitter:description"
          content="Dusan Milosevic is a Front-End Developer who likes solving problems with design and code."
        />
        <meta name="twitter:url" content="https://www.dusan.codes/" />
        <meta name="twitter:image" content="/DusanMilosevic.jpeg" />
      </Head>
      <main className={styles.main}>
        <About />
        <Project projectData={index} />
        <Poster />
      </main>
    </div>
  );
}
