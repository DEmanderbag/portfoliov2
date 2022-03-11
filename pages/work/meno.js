import Intro from "../../components/case-study/Intro";
import List from "../../components/case-study/List";
import TextBlock from "../../components/case-study/TextBlock";

const caseStudyIntro = [
  {
    name: "Meno",
    field: "Food and hospitality",
    intro:
      "Meno is a modern, fast and responsive website for your coffee shop or restaurant.",
    coverImage: "case-study/download.png",
    isCV: false,
    contentLink: "https://meno.vercel.app/",
    linkText: "meno.vercel.app",
    background: "#ffebd6",
  },
];

const listItems = [
  {
    title: "Platform",
    data: ["iOS", "Andoid", "Web"],
  },
  {
    title: "Strategy",
    data: ["Workshops", "Design sprints", "Positioning"],
  },
  {
    title: "User Experience",
    data: ["Product design", "Prototyping", "User testings"],
  },
  {
    title: "Production",
    data: ["Design system", "Design libraries", "Documentation"],
  },
];

const textData = [
  {
    title: "",
    paragraph:
      "The idea for this project came up while I was looking for a coffee restaurants near me and realised that most of them don’t have a nice UI and some of them don’t even have responsive or mobile versions. This project contains beautiful landing page with a simple menu page that is perfect for both mobile and desktop.",
  },
];

const learnings = [
  {
    title: "Learnings",
    paragraph:
      "This is the first project in which I was using React with Next.js where I utilised advantages Next.js routing with a Link component with speed and optimization of an Image component. With React I’ve seperated code in to smaller chucks with components. For styling I’m using CSS Modules with SCSS support, while using CSS variables for different project colors, font-sizes and paddings.",
  },
];
export default function Meno() {
  return (
    <div>
      <Intro caseStudyIntro={caseStudyIntro} />
      <TextBlock textData={textData} />
      <div className="p-4">
        <List listItems={listItems} />
      </div>
      <TextBlock textData={learnings} />
    </div>
  );
}
