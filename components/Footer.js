import styles from "../styles/Footer.module.scss";

const footerData = [
  {
    question: "Ready to make something kickass?",
    action: "Let's get on a call.",
    name: "Dusan Milosevic",
    email: "dusan-milosevic@outlook.com",
    links: [
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Links",
        path: "/links",
      },
      {
        name: "Blog",
        path: "/blog",
      },
      {
        name: "Projects",
        path: "/projects",
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "Hardware I use",
        path: "/links",
      },
      {
        name: "Software I use",
        path: "/about",
      },
      {
        name: "Bookmarks",
        path: "/links",
      },
      {
        name: "Goals 2022",
        path: "/links",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {footerData.map((value) => (
        <div className={styles.wrapper} key={value}>
          <div className={styles.message}>
            <h2>{value.question}</h2>
            <h3>{value.action}</h3>
          </div>
          <div className={styles.group}>
            <div className={styles.contact}>
              <p>{value.name}</p>
              <a href={`mailto:${value.email}`}>{value.email}</a>
            </div>
            <ul className={styles.links}>
              {value.links.map((link) => (
                <li key={link.name}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
