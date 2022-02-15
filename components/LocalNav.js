import styles from "../styles/components/LocalNav.module.scss";
import Link from "next/link";
import Image from "next/image";

const LocalNav = () => {
  return (
    <nav className={styles.localNav}>
      <div className={styles.back}>
        <Link href="/">
          <a title="" className={styles.arrow}>
            <div className={styles.circle}>
              <Image
                src="/icons/back-arrow.svg"
                alt="{link.alt}"
                width={20}
                height={15}
              />
            </div>
            <p className={styles.title}>Home</p>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default LocalNav;
