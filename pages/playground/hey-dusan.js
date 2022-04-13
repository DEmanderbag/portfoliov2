import Intro from "../../components/case-study/Intro";
import data from "../../data/playground/hey-dusan.json";
import TextBlock from "../../components/case-study/TextBlock";
import List from "../../components/case-study/List";
import Image from "next/image";
import styles from "../../styles/playgroud/PlaygroundArticle.module.scss";
import Head from "next/head";

export default function HeyDusan() {
  return (
    <>
      <Head>
        {/* General */}
        <title>{data[0].name} | Dusan Milosevic</title>
        <meta name="description" content={data[0].intro} />
        {/* Open graph data */}
        <meta
          property="og:title"
          content={`${data[0].name} | Dusan Milosevic`}
        />
        <meta property="og:description" content={data[0].intro} />
        <meta
          property="og:site_name"
          content={`${data[0].name} | Dusan Milosevic`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.dusan.codes/playground/hey-dusan" />
        <meta property="og:image" content="/playground/hey-dusan.jpg" />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content={`${data[0].name} | Dusan Milosevic`}
        />
        <meta name="twitter:description" content={data[0].intro} />
        <meta name="twitter:url" content="https://www.dusan.codes/playground/hey-dusan" />
        <meta name="twitter:image" content="/playground/hey-dusan.jpg" />
      </Head>
      <main>
        <Intro hero={data[0]} />
        <TextBlock textData={data[1]} />
        <List listItems={data[2]} />
        <div className={styles.imageWrapper}>
          <Image
            src="/playground/hd1.jpg"
            alt="Two tablets showing different sections of the website"
            placeholder="blur"
            blurDataURL="/playground/hd1.jpg"
            width={150}
            height={100}
            layout="responsive"
          />
        </div>
        <TextBlock textData={data[3]} />
        <TextBlock textData={data[4]} />
      </main>
    </>
  );
}
