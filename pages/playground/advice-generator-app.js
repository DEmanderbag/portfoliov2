import Intro from "../../components/case-study/Intro";
import data from "../../data/playground/advice-generator-app.json";
import TextBlock from "../../components/case-study/TextBlock";
import List from "../../components/case-study/List";
import Image from "next/image";
import ReadMore from "../../components/ReadMore";
import styles from "../../styles/playgroud/PlaygroundArticle.module.scss";
import Head from "next/head";

export default function AdviceGeneratorApp() {
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
        <meta property="og:url" content="https://www.dusan.codes/playground/advice-generator-app" />
        <meta property="og:image" content="/playground/advice-app.jpg" />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content={`${data[0].name} | Dusan Milosevic`}
        />
        <meta name="twitter:description" content={data[0].intro} />
        <meta name="twitter:url" content="https://www.dusan.codes/playground/advice-generator-app" />
        <meta name="twitter:image" content="/playground/advice-app.jpg" />
      </Head>
      <main>
        <Intro hero={data[0]} />
        <TextBlock textData={data[1]} />
        <List listItems={data[2]} />
        <div className={styles.imageWrapper}>
          <Image
            src="/playground/aga1.jpg"
            alt="Two phones next to each other with advice showing on the screen, left one has advice 'When in doubt, just take the next small step.' and on the right 'Don't promies what you can't deliver.' message."
            placeholder="blur"
            blurDataURL="/playground/aga1.jpg"
            width={200}
            height={150}
            layout="responsive"
          />
        </div>
        <TextBlock textData={data[3]} />
        <TextBlock textData={data[4]} />
        <ReadMore readMore={data[5]} />
      </main>
    </>
  );
}
