import Intro from "../../components/case-study/Intro";
import data from "../../data/playground/advice-generator-app.json";
import TextBlock from "../../components/case-study/TextBlock";
import List from "../../components/case-study/List";
import Image from "next/image";
import ReadMore from "../../components/ReadMore";
import styles from "../../styles/playgroud/PlaygroundArticle.module.scss";

export default function AdviceGeneratorApp() {
  return (
    <main>
      <Intro hero={data[0]} />
      <TextBlock textData={data[1]} />
      <List listItems={data[2]} />
      <div className={styles.imageWrapper}>
        <Image
          src="/playground/aga1.jpg"
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL="/playground/aga1.jpg"
          width={200}
          height={150}
          layout="responsive"
        />
      </div>
      <TextBlock textData={data[3]} />
      <TextBlock textData={data[4]} />
      <ReadMore readMore={data[5]} />
    </main>
  );
}
