import Head from "next/head";
import Image from "next/image";
import styles from "../styles/LinksPage.module.scss";

const links = [
  {
    platform: "Personal Website",
    url: "/",
    shortUrl: "dusan.codes",
  },
  {
    platform: "Github",
    url: "https://github.com/DEmanderbag",
    shortUrl: "github.com/DEmanderbag",
  },
  {
    platform: "Bookmarks",
    url: "/bookmarks",
    shortUrl: "dusan.codes/bookmarks",
  },
  {
    platform: "Playground",
    url: "/playground",
    shortUrl: "dusan.codes/playground",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/demanderbag_",
    shortUrl: "twitter.com/demanderbag_",
  },
  {
    platform: "Linkedin",
    url: "https://www.linkedin.com/in/dusan-milosevic/",
    shortUrl: "linkedin.com/in/dusan-milosevic",
  },
];

export default function LinksPage() {
  return (
    <div className={styles.container}>
      <Head>
        {/* General */}
        <title>Links | Dusan Milosevic</title>
        <meta
          name="description"
          content="This page contains links for personal website, projects and social media"
        />
        {/* Open graph data */}
        <meta property="og:title" content="Links | Dusan Milosevic" />
        <meta
          property="og:description"
          content="This page contains links for personal website, projects and social media"
        />
        <meta property="og:site_name" content="Links | Dusan Milosevic" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dusan.codes/" />
        <meta property="og:image" content="/links.jpg" />
        {/* Twitter */}
        <meta name="twitter:title" content="Links | Dusan Milosevic" />
        <meta
          name="twitter:description"
          content="This page contains links for personal website, projects and social media"
        />
        <meta name="twitter:url" content="https://www.dusan.codes/" />
        <meta name="twitter:image" content="/links.jpg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.imageWrapper}>
            <Image
              src="/DusanMilosevic.jpeg"
              alt="Photo of me with glasses with the tree the background"
              width={400}
              height={400}
              layout="responsive"
              priority
            />
          </div>
          <p>
            I&apos;m a Front End developer working in the medical field and
            currently living in Antwerp Belgium. My development stack is focused
            on performance and accessibility while using the latest technology.
          </p>
        </div>
        <div>
          {links.map((link, index) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={link.url}
              key={link.platform}
            >
              <div className={styles.card}>
                <div className={styles.platform}>
                  <p className={styles.decoration}>
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </p>
                  <div>
                    <p className={styles.title}>{link.platform}</p>
                    <p className={styles.shortUrl}>{link.shortUrl}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
