import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Poster from "../components/Poster";
import Project from "../components/Project";
import About from "../components/About";
import Text from "../components/Text";
import projectData from "../data/projectData.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <About />
        <Project projectData={projectData} />
        <Text />
        <Poster />
      </main>
    </div>
  );
}
