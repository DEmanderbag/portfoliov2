import styles from "../styles/bookmarks/Bookmarks.module.scss";
import FeatureCard from "../components/booksmarks/FeatureCard";
import BookmarkCard from "../components/booksmarks/BookmarkCard";
import IntroText from "../components/IntroText";
import data from "../data/bookmarks.json";
import Head from "next/head";
export default function Bookmarks() {
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
        <meta property="og:url" content="https://www.dusan.codes/bookmarks" />
        <meta property="og:image" content="bookmarks/bookmarks.jpg" />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content={`${data[0].title} | Dusan Milosevic`}
        />
        <meta name="twitter:description" content={data[0].subheading} />
        <meta name="twitter:url" content="https://www.dusan.codes/bookmarks" />
        <meta name="twitter:image" content="bookmarks/bookmarks.jpg" />
      </Head>
      <main className={styles.wrapper}>
        <div className={styles.intro}>
          <IntroText data={data[0]} />
        </div>
        <div className={styles.content}>
          <h2 className={`h3 ${styles.title}`}>Front-end resources</h2>
          <div className={styles.gallery}>
            <div className={styles.wrap}>
              <FeatureCard devResources={data[1]} />
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.generalBookmarksIntro}>
            <h2 className={`h3 ${styles.title}`}>Thought-provoking Tidbits</h2>
            <p>
              Things that I found interesting and stuff that other people deemed
              interesting enough to link me 🙂
            </p>
          </div>
          <BookmarkCard devResources={data[2]} />
        </div>
      </main>
    </>
  );
}
