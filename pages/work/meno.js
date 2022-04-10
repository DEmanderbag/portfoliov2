import Intro from "../../components/case-study/Intro";
import List from "../../components/case-study/List";
import TextBlock from "../../components/case-study/TextBlock";
import ReadMore from "../../components/ReadMore";
import data from "../../data/work/meno.json";
import Image from "next/image";
import styles from "../../styles/case-study/Main.module.scss";

export default function Meno() {
  return (
    <main>
      <Intro hero={data[0]} />
      <TextBlock textData={data[1]} />
      <List listItems={data[2]} />
      <div className={styles.gallery}>
        <div className={styles.cover}>
          <Image
            src="/case-study/meno.jpg"
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL="/case-study/meno.jpg"
            width={400}
            height={200}
            layout="responsive"
          />
        </div>
        <Image
          src="/case-study/meno-one.jpg"
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL="/case-study/meno-one.jpg"
          width={400}
          height={400}
          layout="responsive"
        />
        <Image
          src="/case-study/meno-two.jpg"
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL="/case-study/meno-two.jpg"
          width={400}
          height={400}
          layout="responsive"
        />
      </div>
      <TextBlock textData={data[3]} />
      <ReadMore readMore={data[3]} />
    </main>
  );
}
