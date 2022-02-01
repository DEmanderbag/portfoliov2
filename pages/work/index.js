import styles from "../../styles/Work.module.scss";
import Project from "../../components/Project";

const projectData = [
  {
    path: "work/meno",
    linkText: "Experience",
    name: "Meno",
    date: "November 2021",
    description:
      "Meno is a modern, fast and responsive website for your coffee shop or restaurant.",
    tags: ["React", "CSS Modules", "Next.js", "UX & UI Design", "Web"],
    coverPhoto: "case-study/download.png",
    background: "#ffebd6",
    tagsBackground: "rgba(187, 131, 47, .1)",
  },
  {
    path: "project",
    linkText: "Experience",
    name: "Sparkasse",
    date: "January 2022",
    description:
      "We helped Sparkasse to enter a new era of online and mobile banking, expanded their app portfolio and improved existing products.",
    tags: ["Web", "UX & UI Design", "Menu", "QR code"],
    coverPhoto: "Splice.jpg",
    background: "#ffc7c4",
    tagsBackground: "rgba(46, 62, 77, 0.1)",
  },
  {
    path: "project",
    linkText: "Experience",
    name: "ReachNow",
    date: "Agustus 2104s",
    description:
      "In a world of pure abundance, where the large selection of public transportation and sharing services can be both amazing and overstraining at the same time, Daimler and BMW have decided to join forces to unify all mobility options within one single mobility service.",
    tags: [
      "Web",
      "UX & UI Design",
      "iOS",
      "Andoid",
      "Design System",
      "Prototyping",
    ],
    coverPhoto: "bmw.png",
    background: "#e6ecf2",
    tagsBackground: "rgba(46, 62, 77, 0.1)",
  },
  {
    path: "project",
    linkText: "Experience",
    name: "Wando",
    date: "Agustus 2104s",
    description:
      "Wando is our own, clean answer to all the cluttered to-do-apps out there. We founded and designed this project to be as minimalistic and calm as possible, to put focus on the content and allow people and ideas to breathe.",
    tags: ["User Research", "PWA", "Web", "UX & UI Design", "Menu", "QR code"],
    coverPhoto: "wando.jpg",
    background: "#e6f2ee",
    tagsBackground: "rgba(46, 77, 66, 0.1)",
  },
];

export default function Work() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <h1>Work projects</h1>
        <p>List of some of my projects that Ive worked on</p>
      </div>
      <Project projectData={projectData} />
    </section>
  );
}
