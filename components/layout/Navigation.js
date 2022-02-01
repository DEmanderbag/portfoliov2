import Link from "next/link";
import styles from "../../styles/layout/Navigation.module.scss";
import { useState, useEffect } from "react";

const navigationData = [
  {
    linkLabel: "Home",
    path: "/",
  },
  {
    linkLabel: "About",
    path: "/about",
  },
  {
    linkLabel: "Work",
    path: "/work",
  },
  {
    linkLabel: "Goals 2022",
    path: "/goals",
  },
  {
    linkLabel: "Blog",
    path: "/blog",
  },
  {
    linkLabel: "Bookmarks",
    path: "/bookmarks",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    isOpen
      ? (document.body.className = "overflowControl")
      : ((document.body.className = null),
        (document.body.style.overflow = "relative"));
  }, [isOpen]);

  return (
    <header className={`globalWrapper ${styles.header}`}>
      <Link href="/">
        <a className={styles.logo}>
          Dusan Milosevic <span>Developer</span>
        </a>
      </Link>
      <button
        onClick={toggle}
        aria-controls="navigation"
        aria-expanded={isOpen}
        className={styles.mobileToggle}
      >
        <span className="sr-only">Menu</span>
        <div className={`${styles.group} ${isOpen ? styles.open : ""}`}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </button>
      <nav>
        <ul
          id="navigation"
          className={`${styles.nav} ${isOpen ? styles.show : ""}`}
        >
          {navigationData.map((item) => (
            <li key={item.linkLabel}>
              <Link href={item.path}>
                <a onClick={toggle}>{item.linkLabel}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
