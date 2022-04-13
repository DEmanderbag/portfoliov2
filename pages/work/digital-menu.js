import Intro from "../../components/case-study/Intro";
import List from "../../components/case-study/List";
import TextBlock from "../../components/case-study/TextBlock";
import styles from "../../styles/case-study/Main.module.scss";
import Image from "next/image";
import ReadMore from "../../components/ReadMore";
import data from "../../data/work/digital-menu.json";
import Head from "next/head";

export default function DigitalMenu() {
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
        <meta
          property="og:url"
          content="https://www.dusan.codes/work/digital-menu"
        />
        <meta property="og:image" content="/case-study/digital-menu.jpg" />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content={`${data[0].name} | Dusan Milosevic`}
        />
        <meta name="twitter:description" content={data[0].intro} />
        <meta
          name="twitter:url"
          content="https://www.dusan.codes/work/digital-menu"
        />
        <meta name="twitter:image" content="/case-study/digital-menu.jpg" />
      </Head>
      <main>
        <Intro hero={data[0]} />
        <TextBlock textData={data[1]} />
        <List listItems={data[2]} />
        <div className={styles.gallery}>
          <Image
            src="/case-study/dm-one.jpg"
            alt="Two phones showing how to aplication and the menu look like"
            placeholder="blur"
            blurDataURL="/case-study/mb-two.jpg"
            width={400}
            height={400}
            layout="responsive"
          />
          <Image
            src="/case-study/dm-two.jpg"
            alt="Three phones showing how to aplication and the menu look like"
            placeholder="blur"
            blurDataURL="/case-study/dm-two.jpg"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
        <TextBlock textData={data[3]} />
        <ReadMore readMore={data[4]} />
      </main>
    </>
  );
}
