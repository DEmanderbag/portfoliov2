import Link from "next/link";
import Image from "next/image";
import styles from "../styles/blog/BlogCard.module.scss";
import IntroText from "../components/IntroText";
const blogData = [
  {
    title: "Exploring Croatia",
    subtitle: "Four cities. Two travelers. One country.",
    coverImage: "/photo.jpeg",
    blogLink: "/blog/exploring-croatia",
    id: "1",
  },
  {
    title: "Kopaonik Winter Memories",
    subtitle: "Serbia's very own Winter Wonderland. Hidden gem or overrated?",
    coverImage: "/kopaonik/winter.jpeg",
    blogLink: "/blog/winter-at-kopaonik",
    id: "2",
  },
  {
    title: "North Balkan Rhapsody",
    subtitle: "Is it even really the Balkans?",
    coverImage: "/wando.jpg",
    blogLink: "/blog/exploring-croatia",
    id: "3",
  },
];
blogData.sort((a, b) => b.id - a.id);

const introData = {
  title: "Travelogue",
  subheading: "Stories from my journeys - every picture begets a few words",
};

export default function Blog() {
  return (
    <section className={`globalWrapper ${styles.wrapper}`}>
      <div className={styles.intro}>
        <IntroText data={introData} />
      </div>
      <div className={styles.blogGrid}>
        {blogData.map((blog) => (
          <div key={blog.title} className={`${styles.article} ${blog.class}`}>
            <Link href={blog.blogLink}>
              <a>
                <article className={styles.card}>
                  <div className={styles.cardAbout}>
                    <h2 className="h3">{blog.title}</h2>
                    <p>{blog.subtitle}</p>
                  </div>
                  <div className={styles.blogImage}>
                    <Image
                      src={`${blog.coverImage}`}
                      alt=""
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={`${blog.coverImage}`}
                      objectFit="cover"
                    />
                  </div>
                </article>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
