import Intro from "../../components/case-study/Intro";
import TextBlock from "../../components/case-study/TextBlock";
import data from "../../data/work/meno.json";
import Image from "next/image";
import styles from "../../styles/case-study/Main.module.scss";
import Head from "next/head";

export default function Meno() {
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
        <meta property="og:url" content="https://www.dusan.codes/work/meno" />
        <meta property="og:image" content="/case-study/meno.jpg" />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content={`${data[0].name} | Dusan Milosevic`}
        />
        <meta name="twitter:description" content={data[0].intro} />
        <meta name="twitter:url" content="https://www.dusan.codes/work/meno" />
        <meta name="twitter:image" content="/case-study/meno.jpg" />
      </Head>
      <main>
        <Intro hero={data[0]} />
        <TextBlock textData={data[1]} />
        <div className={styles.gallery}>
          <div className={styles.cover}>
            <Image
              src="/case-study/meno.jpg"
              alt="Phone and the laptop on the table showing look of the website"
              placeholder="blur"
              blurDataURL="/case-study/meno.jpg"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <Image
            src="/case-study/meno-one.jpg"
            alt="Phone showing menu and the drinks section"
            placeholder="blur"
            blurDataURL="/case-study/meno-one.jpg"
            width={400}
            height={400}
            layout="responsive"
          />
          <Image
            src="/case-study/meno-two.jpg"
            alt="Phone showing menu and the wraps section with a catering service video bellow it"
            placeholder="blur"
            blurDataURL="/case-study/meno-two.jpg"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
      </main>
    </>
  );
}
