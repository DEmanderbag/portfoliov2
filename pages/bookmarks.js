/* eslint-disable @next/next/no-sync-scripts */
import styles from "../styles/bookmarks/Bookmarks.module.scss";
import FeatureCard from "../components/booksmarks/FeatureCard";
import BookmarkCard from "../components/booksmarks/BookmarkCard";
import IntroText from "../components/IntroText";
import data from "../data/bookmarks.json";

export default function Bookmarks() {
  return (
    <section className={styles.wrapper}>
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
    </section>
  );
}
