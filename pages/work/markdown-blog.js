import Intro from "../../components/case-study/Intro";
import List from "../../components/case-study/List";
import TextBlock from "../../components/case-study/TextBlock";
import styles from "../../styles/case-study/Main.module.scss";
import Image from "next/image";
import ReadMore from "../../components/ReadMore";
import data from "../../data/work/markdown-blog.json";

export default function MarkdownBlog() {
  return (
    <main>
      <Intro hero={data[0]} />
      <TextBlock textData={data[1]} />
      <List listItems={data[2]} />
      <div className={styles.gallery}>
        <div className={styles.cover}>
          <Image
            src="/case-study/mb-one.jpg"
            alt="Multiple phones showing diffrent part of the blog"
            placeholder="blur"
            blurDataURL="/case-study/mb-one.jpg"
            width={400}
            height={200}
            layout="responsive"
          />
        </div>
        <Image
          src="/case-study/mb-two.jpg"
          alt="Two phones showing diffrent articles in two different languages"
          placeholder="blur"
          blurDataURL="/case-study/mb-two.jpg"
          width={400}
          height={400}
          layout="responsive"
        />
        <Image
          src="/case-study/mb-three.jpg"
          alt="Two tablet showing diffrent article with the title of language support"
          placeholder="blur"
          blurDataURL="/case-study/mb-three.jpg"
          width={400}
          height={400}
          layout="responsive"
        />
      </div>
      <TextBlock textData={data[3]} />
      <ReadMore readMore={data[4]} />
    </main>
  );
}
