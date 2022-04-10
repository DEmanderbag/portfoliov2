import Intro from "../../components/case-study/Intro";
import data from "../../data/playground/hey-dusan.json";
import TextBlock from "../../components/case-study/TextBlock";
import List from "../../components/case-study/List";
import Image from "next/image";
import styles from "../../styles/playgroud/PlaygroundArticle.module.scss";

export default function HeyDusan() {
  return (
    <main>
      <Intro hero={data[0]} />
      <TextBlock textData={data[1]} />
      <List listItems={data[2]} />
      <div className={styles.imageWrapper}>
        <Image
          src="/playground/hd1.jpg"
          alt="Two tablets showing different sections of the website"
          placeholder="blur"
          blurDataURL="/playground/hd1.jpg"
          width={150}
          height={100}
          layout="responsive"
        />
      </div>
      <TextBlock textData={data[3]} />
      <TextBlock textData={data[4]} />
    </main>
  );
}
