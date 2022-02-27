/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/blog/CountryInfoCard.module.scss";

const CountryInfoCard = ({ flag, capital, population }) => {
  return (
    <div className={styles.countryInfoCard}>
      <div className={styles.countryStats}>
        <img src={flag} alt="" width={100} height={100} />
      </div>
      <div className={styles.countryStats}>
        <p>Capital city</p>
        <p>{capital}</p>
      </div>
      <div className={styles.countryStats}>
        <p>Population</p>
        <p>{population}</p>
      </div>
    </div>
  );
};

export default CountryInfoCard;
