/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/LinksPage.module.scss";

const links = [
  {
    path: "",
    platform: "Twitter",
    short: "For announcements, blog posts, and general Radix tips.",
  },
  {
    path: "",
    platform: "Discord",
    short: "To get involved in the community, ask questions, and share tips",
  },
  {
    path: "",
    platform: "GitHub",
    short:
      "To file issues, request features, and contribute, check out our GitHub.",
  },
];

export default function LinksPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>An active and friendly community 👋</p>
        <h1>Join our fast-growing community</h1>
        <div className={styles.linkGrid}>
          {links.map((link) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={link.link}
              key={link.platform}
            >
              <div className={styles.card}>
                <h4 className={styles.platform}>{link.platform}</h4>
                <span>{link.short}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
