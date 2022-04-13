import styles from "../../styles/playgroud/PlaygroundMain.module.scss";
import IntroText from "../../components/IntroText";
import PlaygroundCard from "../../components/playground/PlaygroundCard";
import data from "../../data/playground/index.json";
import Head from "next/head";

export default function Playground() {
  return (
    <>
      <Head>
        {/* General */}
        <title>{data[0].title} | Dusan Milosevic</title>
        <meta name="description" content={data[0].subheading} />
        {/* Open graph data */}
        <meta
          property="og:title"
          content={`${data[0].title} | Dusan Milosevic`}
        />
        <meta property="og:description" content={data[0].subheading} />
        <meta
          property="og:site_name"
          content={`${data[0].title} | Dusan Milosevic`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dusan.codes/playground" />
        <meta
          property="og:image"
          content="/playground/playground.jpg"
        />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content={`${data[0].title} | Dusan Milosevic`}
        />
        <meta name="twitter:description" content={data[0].subheading} />
        <meta name="twitter:url" content="https://www.dusan.codes/playground/" />
        <meta
          name="twitter:image"
          content="/playground/playground.jpg"
        />
      </Head>
      <main className={styles.wrapper}>
        <div className={styles.intro}>
          <IntroText data={data[0]} />
        </div>
        <section className={styles.itemsGrid}>
          <PlaygroundCard data={data[1]} />
        </section>
      </main>
    </>
  );
}
