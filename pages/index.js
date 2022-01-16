import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import Project from "../components/Project";
import About from "../components/About";

const projectData = [
  {
    path: "project",
    linkText: "Experience",
    name: "Editorial Design",
    date: "Agustus 2104s",
    description:
      "Dapet ide bikin landing page produk virtual meeting tapi disertai dengan game atau aktivitas yang enggak bikin bosen.",
    tags: ["User Research", "PWA", "Web", "UX & UI Design", "Menu", "QR code"],
    coverPhoto: "ilustration.jpg",
    background: "#e6f2ee",
    tagsBackground: "rgba(46, 77, 66, 0.1);",
  },
  {
    path: "project",
    linkText: "Experience",
    name: "Editorial Design",
    date: "Agustus 2104s",
    description:
      "Dapet ide bikin landing page produk virtual meeting tapi disertai dengan game atau aktivitas yang enggak bikin bosen.",
    tags: ["Web", "UX & UI Design", "Menu", "QR code"],
    coverPhoto: "ilustration2.jpg",
    background: "#e6ecf2",
    tagsBackground: "rgba(46, 62, 77, 0.1)",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello world</h1>
        <Poster />
        <Project projectData={projectData} />
        <About />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
