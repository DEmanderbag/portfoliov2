import Link from "next/link";
import styles from "../styles/blog/BlogCard.module.scss";

const blogData = [
  {
    title: "Exploring Croatia",
    date: "11.11.2011",
    subtitle:
      "Story how I've travel and visited four different cities in Croatia",
    coverImage:
      "https://images.unsplash.com/photo-1610106109549-5813ab87ae88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
    class: "cr2",
  },
  {
    title: "Ski in Kopaonik",
    date: "11.11.2011",
    subtitle:
      "Story how I've travel and visited four different cities in Croatia",
    coverImage:
      "https://images.unsplash.com/photo-1614619632105-b571e9f0b3d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    class: "c2",
  },
  {
    title: "Winter Holliday",
    date: "11.11.2011",
    subtitle:
      "Story how I've travel and visited four different cities in Croatia",
    coverImage:
      "https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80",
    class: "",
  },
  {
    title: "Time in Belgium",
    date: "11.11.2011",
    subtitle:
      "Story how I've travel and visited four different cities in Croatia",
    coverImage:
      "https://images.unsplash.com/photo-1580712327072-d525a6a5f840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2347&q=80",
    class: "",
  },
];
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
            <article
              className={styles.card}
              style={{ backgroundImage: `url(${blog.coverImage})` }}
            >
              <Link href="#">
                <a>
                  <h2 className="h3">{blog.title}</h2>
                  <p>{blog.subtitle}</p>
                </a>
              </Link>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
