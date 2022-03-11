import BlogIntro from "../../components/blog/BlogIntro";
import CountryInfoCard from "../../components/blog/CountryInfoCard";
import Map from "../../components/Map";
import styles from "../../styles/blog/BlogArticle.module.scss";

const countryFlag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/320px-Flag_of_Croatia.svg.png";
const countryCapital = "Zagreb";
const countryPopulation = "4.047M";

const datePublished = "15 February, 2021";
const articleTitle = "Exploring Croatia";

export default function ExploringCroatia() {
  return (
    <section className={styles.wrapper}>
      <BlogIntro datePublished={datePublished} title={articleTitle} />
      <CountryInfoCard
        flag={countryFlag}
        capital={countryCapital}
        population={countryPopulation}
      />
      <div className={styles.articleText}>
        <h4>Introduction</h4>
        <p>
          This trip was originally planned for the end summer of 2020 but
          because of the travel restrictions it was postponed to late summer of
          2021.
        </p>
        <p>
          In this trip I was joined by my Partner, from the begging we knew that
          the final destination is going to be the city of Dubrovnik but we
          didn’t know which cities and places we are going to visit until one or
          two days before we go to it. After looking cities in Croatia we
          decided two days before the trip that the first city we are going to
          visit is going to be Zagreb capital city of Croatia. We immediately
          knew that we are going to spend only after as we wanted to be closer
          to the sea.
        </p>
        <p>
          My reponsibality was to work out the way to get there while he was
          looking for Airbnbs and cool places to visit in the city, he was more
          traveled so I had total confidence in him. I’ve decided that we are
          going to use BlaBlaCar to try and find the car transportation to
          Zagreb. It was the cheapest, fastest and most comfortable way for the
          transportatio, sure enought we found a couple from Serbia that was
          also traveling to Croatia for a vacation. Ride was good and without
          any problems they were plasent to talk to and very good people. The
          ride was about 5 hours, withouth any issues on the border and no
          queue.
        </p>
        <Map map={"zagreb"} />
        <p>
          When we arrived in Zagreb in the afternoon, wished them safe rest of
          the journey and we on the way to look for our Airbnb so we can put our
          traveling bags.
        </p>
      </div>
    </section>
  );
}
