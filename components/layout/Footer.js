import styles from "../../styles/layout/Footer.module.scss";
import Link from "next/link";
const footerData = [
  {
    question: "Ready to make something kickass?",
    action: "Let's get on a call.",
    name: "Dusan Milosevic",
    email: "dusan-milosevic@outlook.com",
    social: [
      {
        name: "Twitter",
        path: "/about",
      },
      {
        name: "Github",
        path: "/about",
      },
      {
        name: "Linkedin",
        path: "/about",
      },
      {
        name: "Instagram",
        path: "/about",
      },
    ],
    website: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Work",
        path: "/work",
      },
      {
        name: "Playground",
        path: "/playground",
      },
      {
        name: "Travelouge",
        path: "/blog",
      },
      {
        name: "Bookmarks",
        path: "/bookmarks",
      },
      {
        name: "Links",
        path: "/links",
      },
      // {
      //   name: "Sitemap",
      //   path: "/sitemap",
      // },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {footerData.map((value) => (
        <div className={styles.wrapper} key={value}>
          {/* <div className={styles.message}>
            <h2>{value.question}</h2>
            <h3>{value.action}</h3>
          </div> */}
          <div className={styles.contact}>
            <p>{value.name}</p>
            <a href={`mailto:${value.email}`}>{value.email}</a>
          </div>
          <section className={styles.links}>
            <div className={styles.separator}></div>
            <p className={styles.bold}>Website</p>
            <ul className={styles.links}>
              {value.website.map((website) => (
                <li key={website.name}>
                  <Link href={website.path}>
                    <a className={styles.test}>{website.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.links}>
            <div className={styles.separator}></div>
            <p className={styles.bold}>Social</p>
            <ul className={styles.links}>
              {value.social.map((social) => (
                <li key={social.name}>
                  <a href={social.path} className={styles.test}>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
