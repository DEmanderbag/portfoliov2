import styles from "../../styles/case-study/Work.module.scss";
import Project from "../../components/Project";
import IntroText from "../../components/IntroText";
import index from "../../data/work/index.json";
import Head from "next/head";
const introData = {
  title: "Projects",
  subheading: "List of some of my projects that I've worked on",
};

export default function Work() {
  return (
    <>
      <Head>
        {/* General */}
        <title>Work | Dusan Milosevic</title>
        <meta name="description" content={introData.subheading} />
        {/* Open graph data */}
        <meta property="og:title" content="Work | Dusan Milosevic" />
        <meta property="og:description" content={introData.subheading} />
        <meta property="og:site_name" content="Work | Dusan Milosevic" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dusan.codes/work" />
        <meta property="og:image" content="/case-study/work.jpg" />
        {/* Twitter */}
        <meta name="twitter:title" content="Work | Dusan Milosevic" />
        <meta name="twitter:description" content={introData.subheading} />
        <meta name="twitter:url" content="https://www.dusan.codes/work" />
        <meta name="twitter:image" content="/case-study/work.jpg" />
      </Head>
      <section className={styles.wrapper}>
        <div className={styles.intro}>
          <IntroText data={introData} />
        </div>
        <Project projectData={index} />
      </section>
    </>
  );
}
