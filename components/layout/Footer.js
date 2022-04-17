import styles from "../../styles/layout/Footer.module.scss";
import Link from "next/link";
import data from "../../data/footer.json";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <p>{data[0].name}</p>
          <a href={`mailto:${data[0].email}`}>{data[0].email}</a>
        </div>
        <section className={styles.links}>
          <div className={styles.separator}></div>
          <p className={styles.bold}>Website</p>
          <ul className={styles.links}>
            {data[1].map((website) => (
              <li key={website.name}>
                <Link href={website.path}>
                  <a className={styles.link}>{website.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.links}>
          <div className={styles.separator}></div>
          <p className={styles.bold}>Social</p>
          <ul className={styles.links}>
            {data[2].map((social) => (
              <li key={social.name}>
                <a href={social.path} className={styles.link}>
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
