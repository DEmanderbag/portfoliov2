import Intro from "../../components/case-study/Intro";
import List from "../../components/case-study/List";
import TextBlock from "../../components/case-study/TextBlock";
import styles from "../../styles/case-study/Main.module.scss";
import Image from "next/image";
import ReadMore from "../../components/ReadMore";
import data from "../../data/work/cat-wiki.json";

export default function CatWiki() {
  return (
    <main>
      <Intro hero={data[0]} />
      <TextBlock textData={data[1]} />
      <List listItems={data[2]} />
      <div className={styles.gallery}>
        <div className={styles.cover}>
          <Image
            src="/case-study/cat-wiki.jpg"
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL="/case-study/cat-wiki.jpg"
            width={400}
            height={300}
            layout="responsive"
          />
        </div>
        <Image
          src="/case-study/cw-one.jpg"
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL="/case-study/cat-wiki-one.png"
          width={200}
          height={200}
          layout="responsive"
        />
        <Image
          src="/case-study/cat-wiki-hero.png"
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL="/case-study/two.png"
          width={200}
          height={200}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <ReadMore readMore={data[3]} />
    </main>
  );
}
