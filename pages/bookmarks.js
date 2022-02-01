import styles from "../styles/bookmarks/Bookmarks.module.scss";

const devResources = [
  {
    title: "Interneting is hard",
    subtitle: "Friendly web development tutorials for complete beginners",
    website: "https://www.internetingishard.com/",
    shortWebsite: "internetishard.com",
    author: "Random",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "The all-new interactive learning experience designed to help JavaScript developers become confident with CSS.",
    website: "https://css-for-js.dev/",
    shortWebsite: "css-for-js.dev",
    author: "Josh W Comeau",
    authorLink: "https://twitter.com/JoshWComeau",
  },
  {
    title: "Interneting is hard",
    subtitle: "Friendly web development tutorials for complete beginners",
    website: "https://www.internetingishard.com/",
    shortWebsite: "internetishard.com",
    author: "Random",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "The all-new interactive learning experience designed to help JavaScript developers become confident with CSS.",
    website: "https://css-for-js.dev/",
    shortWebsite: "css-for-js.dev",
    author: "Josh W Comeau",
    authorLink: "https://twitter.com/JoshWComeau",
  },
  {
    title: "Interneting is hard",
    subtitle: "Friendly web development tutorials for complete beginners",
    website: "https://www.internetingishard.com/",
    shortWebsite: "internetishard.com",
    author: "Random",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "The all-new interactive learning experience designed to help JavaScript developers become confident with CSS.",
    website: "https://css-for-js.dev/",
    shortWebsite: "css-for-js.dev",
    author: "Josh W Comeau",
    authorLink: "https://twitter.com/JoshWComeau",
  },
  {
    title: "Interneting is hard",
    subtitle: "Friendly web development tutorials for complete beginners",
    website: "https://www.internetingishard.com/",
    shortWebsite: "internetishard.com",
    author: "Random",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "The all-new interactive learning experience designed to help JavaScript developers become confident with CSS.",
    website: "https://css-for-js.dev/",
    shortWebsite: "css-for-js.dev",
    author: "Josh W Comeau",
    authorLink: "https://twitter.com/JoshWComeau",
  },
  {
    title: "Interneting is hard",
    subtitle: "Friendly web development tutorials for complete beginners",
    website: "https://www.internetingishard.com/",
    shortWebsite: "internetishard.com",
    author: "Random",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "The all-new interactive learning experience designed to help JavaScript developers become confident with CSS.",
    website: "https://css-for-js.dev/",
    shortWebsite: "css-for-js.dev",
    author: "Josh W Comeau",
    authorLink: "https://twitter.com/JoshWComeau",
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
        <h2 className="h3">Learning resouces</h2>
        <p>Material found bellow is just the link to these awesome resources</p>
        <div className={styles.gallery}>
          <div className={styles.wrap}>
            {devResources.map((resource) => (
              <div key={resource.title} className={styles.item}>
                <h4>{resource.title}</h4>
                <p>{resource.subtitle}</p>
                <div className={styles.links}>
                  <a href={resource.website}>
                    <p>🌐 {resource.shortWebsite}</p>
                  </a>
                  <a href={resource.authorLink}>
                    <p>By {resource.author}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
