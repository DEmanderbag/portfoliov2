import Intro from "../../components/case-study/Intro";
import List from "../../components/case-study/List";
import TextBlock from "../../components/case-study/TextBlock";
import ReadMore from "../../components/ReadMore";
import data from "../../data/meno.json";

export default function Meno() {
  return (
    <div>
      <Intro hero={data[0]} />
      <TextBlock textData={data[1]} />
      <div>
        <List listItems={data[2]} />
      </div>
      <ReadMore readMore={data[3]} />
    </div>
  );
}
