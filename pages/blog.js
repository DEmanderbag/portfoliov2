import Link from "next/link";
import Image from "next/image";
import styles from "../styles/blog/BlogCard.module.scss";

const blogData = [
  {
    title: "Exploring Croatia",
    subtitle:
      "Story how I've travel and visited four different cities in Croatia",
    coverImage: "/photo.jpeg",
    blogLink: "/blog/exploring-croatia",
    id: "1",
  },
  {
    title: "Ski in Kopaonik",
    subtitle:
      "Story how I've travel and visited four different cities in Croatia",
    coverImage: "/kopaonik/winter.jpeg",
    blogLink: "/blog/winter-at-kopaonik",
    id: "2",
  },
  {
    title: "Exploring Budapest",
    subtitle:
      "Story how I've travel and visited four different cities in Croatia",
    coverImage: "/wando.jpg",
    blogLink: "/blog/exploring-croatia",
    id: "3",
  },
];
blogData.sort((a, b) => b.id - a.id);

export default function Blog() {
  return (
    <section className={`globalWrapper ${styles.wrapper}`}>
      <div className={styles.intro}>
        <h1>Travel blog</h1>
        <p>This is the list of contries that Ive visited</p>
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
