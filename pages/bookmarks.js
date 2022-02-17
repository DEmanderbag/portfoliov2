import styles from "../styles/bookmarks/Bookmarks.module.scss";
import Image from "next/image";
import FeatureCard from "../components/booksmarks/FeatureCard";
import BookmarkCard from "../components/booksmarks/BookmarkCard";

const devResources = [
  {
    title: "HTML & CSS is hard",
    subtitle:
      "But it doesn’t have to be. Explore this friendly web development tutorial for complete beginners.",
    website: "https://www.internetingishard.com/",
    logo: "/../public/internetIsHardLogo.svg",
    tag: "Tutorial",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "A comprehensive interactive course designed to change your relationship with CSS. We'll learn how the language really works, and empower you to build robust user interfaces.",
    website: "https://css-for-js.dev/",
    logo: "/../public/cssForJsLogo.png",
    tag: "Tutorial",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "A comprehensive interactive course designed to change your relationship with CSS. We'll learn how the language really works, and empower you to build robust user interfaces.",
    website: "https://css-for-js.dev/",
    logo: "/../public/cssForJsLogo.png",
    tag: "Tutorial",
  },
  {
    title: "HTML & CSS is hard",
    subtitle:
      "But it doesn’t have to be. Explore this friendly web development tutorial for complete beginners.",
    website: "https://www.internetingishard.com/",
    logo: "/../public/internetIsHardLogo.svg",
    tag: "Tutorial",
  },
];

export default function Bookmarks() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <h1>Bookmarks</h1>
        <p>
          Find the list of useful websites, great blogs, interesting ideas and
          inspirative quotes
        </p>
      </div>

      <div className={styles.content}>
        <h2 className={`h4 ${styles.title}`}>Front-end resources</h2>
        <div className={styles.gallery}>
          <div className={styles.wrap}>
            <FeatureCard devResources={devResources} />
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.special}>
          <h2 className={`h4 ${styles.title}`}>New this week</h2>
          <p>
            Explore the list of articles, tools, videos and online resources
          </p>
        </div>
        <BookmarkCard devResources={devResources} />
      </div>
    </section>
  );
}
