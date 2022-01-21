import Link from "next/link";
import styles from "../../styles/layout/Navigation.module.scss";
import { useState, useEffect } from "react";

const navigationData = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "About",
    path: "/about",
  },
  {
    link: "Gallery",
    path: "/gallery",
  },
  {
    link: "History",
    path: "/history",
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
    <header className={styles.header}>
      <p className={styles.logo}>Dusan</p>
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
            <li key={item.link}>
              <Link href={item.path}>
                <a onClick={toggle}>{item.link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
