import Intro from "../../components/case-study/Intro";
import List from "../../components/case-study/List";
import TextBlock from "../../components/case-study/TextBlock";
import styles from "../../styles/case-study/Main.module.scss";
import Image from "next/image";
import ReadMore from "../../components/ReadMore";
import data from "../../data/markdown-blog.json";

export default function MarkdownBlog() {
  return (
    <main>
      <Intro hero={data[0]} />
      <TextBlock textData={data[1]} />
      <List listItems={data[2]} />
      <div className={styles.gallery}>
        <div className={styles.cover}>
          <Image
            src="/case-study/three.jpeg"
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL="/case-study/three.jpeg"
            width={400}
            height={200}
            layout="responsive"
          />
        </div>
        <Image
          src="/case-study/one.png"
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL="/case-study/one.png"
          width={400}
          height={400}
          layout="responsive"
        />
        <Image
          src="/case-study/two.png"
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL="/case-study/two.png"
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