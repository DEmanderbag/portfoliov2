import BlogIntro from "../../components/blog/BlogIntro";
import ReviewCard from "../../components/blog/ReviewCard";
import CountryInfoCard from "../../components/blog/CountryInfoCard";
import styles from "../../styles/blog/BlogArticle.module.scss";
import ImageGrid from "../../components/blog/ImageGrid";
import ImageVideo from "../../components/blog/ImageVideo";

const blogArticleData = {
  intro: {
    datePublished: "22 February, 2021",
    title: "Winter at Kopaonik",
  },
  country: {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flag_of_Serbia_%28Pantone%29.svg/320px-Flag_of_Serbia_%28Pantone%29.svg.png",
    capital: "Belgrade",
    population: "6.908M",
  },
  apartment: {
    title: "Apartments: Dviletov Kutak",
    propertyAddress: "Vikend naselje, Treska, Kopaonik, 36354, Serbia",
    pricePerNight: "32",
    nightsStay: "1",
    stars: ["1", "1", "1", "1", ""],
    gallery: [
      "/kopaonik/dviletovkutakoutdoor.jpeg",
      "/kopaonik/dviletovkutakview.jpeg",
    ],
  },
  gallery: [
    ["/kopaonik/IMG_1619.jpeg", "/kopaonik/IMG_1659.jpeg"],
    ["/kopaonik/IMG_7037.jpeg"],
    [
      "/kopaonik/IMG_1720.jpeg",
      "/kopaonik/IMG_4645.jpeg",
      "/kopaonik/winter.jpeg",
      "/kopaonik/IMG_4658.jpeg",
    ],
    [
      "/kopaonik/IMG_4668.jpeg",
      "/kopaonik/IMG_4670.jpeg",
      "/kopaonik/IMG_4679.jpeg",
      "/kopaonik/IMG_4693.jpeg",
      "/kopaonik/IMG_4718.jpeg",
      "/kopaonik/IMG_1761.jpeg",
      "/kopaonik/IMG_4664.jpeg",
      "/kopaonik/IMG_4649.jpeg",
    ],
  ],
  video: {
    poster: "/kopaonik/poster.gif",
    source: "/kopaonik/IMG_1668.mov",
  },
};

export default function WinterAtKopaonik() {
  return (
    <section className={styles.wrapper}>
      <BlogIntro
        datePublished={blogArticleData.intro.datePublished}
        title={blogArticleData.intro.title}
      />
      <CountryInfoCard
        flag={blogArticleData.country.flag}
        capital={blogArticleData.country.capital}
        population={blogArticleData.country.population}
      />
      <div className={styles.articleText}>
        <h4>Introduction</h4>
        <p>
          Kopaonik is a mountain range located in Serbia, it was declared a
          national park in 1981. On the slopes of Kopaonik, there is Kopaonik
          ski resort which is one of the largest in Southeast Europe. There are
          25 ski lifts with a capacity of 32,000 skiers per hour.
        </p>
        <p>
          I was looking forward to this trip because the last time I was on
          Kopaonik during the winter was when I was in kindergarten, skiing is
          something I haven&apos;t done before so it was very exciting and I was
          ready for the challenge. The original plan for the trip is to ski for
          two full days and be there for 3 days. In the end, we were there for a
          day and a half and stayed in the cosy cottage which was about 3.4 km
          from the centre of Kopaonik and about 1.7km from the first ski track.
          It might seem far away but this location was served with a ski bus
          which was going every 30 minutes.
        </p>
        <ReviewCard reviewCardData={blogArticleData.apartment} />
        <p>
          When we arrived late afternoon the day ski was only lasting for 45
          more minutes, because of that we decided to go for a night skiing.
          While waiting for the night ski to start we decided to get some food
          and take photos. Many taken photos later we went to buy ski passes and
          rent the ski gear. The gear was around 20 euros for the full day
          (which was counted as 24h of the time of renting) and the person was
          very helpfully in explaining how the ski works and how should we
          control it. My partner had some experience skiing before while I was a
          total beginner. The best and recommend option especially if you are a
          beginner is to get a coach that will teach and explain how to properly
          ski but we decided again and went alone.
        </p>

        <ImageVideo image={blogArticleData.gallery[0]} />
        <p>
          Night ski started at 18h and we were ready and on the Cable, cable
          ride to the top was quick and after arriving at the top it was time to
          get down. Jie started slowly while I was trying to follow him, couple
          of seconds later I was already out of the track in the snow.
        </p>
        <ImageVideo
          video={blogArticleData.video}
          image={blogArticleData.gallery[1]}
        />
        <p>
          To get down to the track it took us around 45 minutes in total I fell
          around 10 times but after every fall I was able to get up and I was
          starting to understand how to control the ski. We went up and down the
          track in total 6 times and every time was better than the previous
          one, I was still falling but also feeling more confident. As the night
          was progressing it was getting colder and colder and after 3 hours we
          decided that we should call it a night and decided to go to our
          cottage. At first, we were looking for a Taxi that can get us there
          but we were not able to find any, I&apos;ve decided that I will try to
          hitchhike and after 2 minutes one person stopped, he was also going in
          the same direction so he gave us a ride. The ride was short and
          pleasant we had a small conversation but nothing exciting.
        </p>
        <p>
          The second day was very sunny in the morning and it started with us
          going to the wrong ski track. We decided that we want to go to the
          longest possible ski lift, it turns out the easiest track there was
          the red one which is something we weren&apos;t planning on going to as
          we are still beginners.
        </p>
        <ImageGrid data={blogArticleData.gallery[2]} />
        <p>
          The highest point of Kopaonik is Pančićev vrh which is 2017m above the
          sea and we were just 100m lower than that. The view from the top was
          breathtaking, being able to see all of the surrounding mountains
          covered with snow was something that was bringing very positive
          energy. While we were getting down we stopped a couple of times to
          take some photos and videos and also to rest. The red track that we
          were on was challenging but we&apos;ve managed to get down slowly
          without hurting ourselves.
        </p>
        <ImageGrid data={blogArticleData.gallery[3]} />
        <p>
          The goal for the rest of the day was to try as many tracks as
          possible, in one of the cable trips to the new ski track we got a
          recommendation for an easy but scenic track that was going through the
          forest. The person that recommended the track was correct, we did
          enjoy it so much. That was also our last track for this trip and it
          was time to go home. We went back to my home town to recharge and
          sleep. But the trip was just getting started because the day later we
          were going to Budapest.
        </p>
      </div>
    </section>
  );
}
