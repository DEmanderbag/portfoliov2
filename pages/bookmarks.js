import styles from "../styles/bookmarks/Bookmarks.module.scss";
import FeatureCard from "../components/booksmarks/FeatureCard";
import BookmarkCard from "../components/booksmarks/BookmarkCard";

const featuredDevResources = [
  {
    title: "HTML & CSS is hard",
    subtitle:
      "But it doesn’t have to be. Explore this friendly web development tutorial for complete beginners.",
    website: "https://www.internetingishard.com/",
    websiteShort: "internetingishard.com",
    logo: "/featured-bookmark/internetIsHardLogo.svg",
    tag: "Tutorial",
  },
  {
    title: "A Complete Guide to Flexbox",
    subtitle:
      "Comprehensive guide to CSS flexbox. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element and the child elements.",
    website: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    websiteShort: "css-tricks.com",
    logo: "/featured-bookmark/css-tricks.svg",
    tag: "Guide",
  },
  {
    title: "A Complete Guide to Grid",
    subtitle:
      "Comprehensive guide to CSS grid, focusing on all the settings both for the grid parent container and the grid child elements.",
    website: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    websiteShort: "css-tricks.com",
    logo: "/featured-bookmark/css-tricks.svg",
    tag: "Guide",
  },
  {
    title: "MDN Web Docs",
    subtitle:
      "MDN Web Docs, previously Mozilla Developer Network and formerly Mozilla Developer Center, is a documentation repository and learning resource for web developers used by Mozilla, Microsoft, Google, and Samsung.",
    website: "https://developer.mozilla.org/en-US/docs/Web",
    websiteShort: "developer.mozilla.org",
    logo: "/featured-bookmark/mdn.svg",
    tag: "Learning platform",
  },
  {
    title: "Web.dev",
    subtitle:
      "Explore structured learning paths to discover everything you need to know about building for the modern web.",
    website: "https://web.dev/learn/",
    websiteShort: "web.dev",
    logo: "/featured-bookmark/web-dev.svg",
    tag: "Guide",
  },
  {
    title: "CSS for JS developers",
    subtitle:
      "A comprehensive interactive course designed to change your relationship with CSS. We'll learn how the language really works, and empower you to build robust user interfaces.",
    website: "https://css-for-js.dev/",
    websiteShort: "css-for-js.dev",
    logo: "/featured-bookmark/cssForJsLogo.png",
    tag: "Learning platform",
  },
  {
    title: "Frontend Mentor",
    subtitle:
      "Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join over 308.000+ developers building projects, reviewing code, and helping each other get better.",
    website: "https://www.frontendmentor.io/",
    websiteShort: "frontendmentor.io",
    logo: "/featured-bookmark/frontend-mentorl-logo.svg",
    tag: "Learning platform",
  },
  {
    title: "devChallenges",
    subtitle:
      "The best way to learn is by doing. Choose a challenge, Work by yourself or with a team, Submit your solutions and give feedback",
    website: "https://devchallenges.io/",
    websiteShort: "devchallenges.io",
    logo: "/featured-bookmark/devchallenges.svg",
    tag: "Learning platform",
  },
];

const devResources = [
  {
    title: "Designing Fluid Interfaces",
    subtitle:
      "Discover the techniques used to create the fluid gestural interface of iPhone X. Learn how to design with gestures and motion that feel intuitive and natural, making your app a delight to use.",
    website: "https://developer.apple.com/videos/play/wwdc2018/803/",
    websiteShort: "developer.apple.com",
    tag: "Video",
    tagColor: "#f2e6e6",
  },
  {
    title: "Design for spatial interaction",
    subtitle:
      "Discover the principles for creating intuitive physical interactions between two or more devices, as demonstrated by Apple designers who worked on features for iPhone, HomePod mini, and AirTag. Explore how you can apply these patterns to your own app when designing features for Apple platforms, and help people using your app interact more directly with their surroundings.",
    website: "https://developer.apple.com/videos/play/wwdc2021/10245/",
    websiteShort: "developer.apple.com",
    tag: "Video",
    tagColor: "#f2e6e6",
  },
  {
    title: "Common webpage design mistakes",
    subtitle:
      "Simple layout and design tips to help you create a stunning webpage",
    website: "https://uxplanet.org/common-webpage-design-mistakes-59eed9831bd7",
    websiteShort: "uxplanet.org",
    tag: "Article",
    tagColor: "#e6f2ee",
  },
  {
    title: "Brian Lovin",
    subtitle: "Brian is a designer, podcaster, writer and software tinkerer",
    website: "https://brianlovin.com/",
    websiteShort: "brianlovin.com",
    tag: "Portfolio",
    tagColor: "#f2eee6",
  },
  {
    title: "Rauno Freiberg",
    subtitle: "Rauno is a design engineer in love with emotional interfaces.",
    website: "https://rauno.me/",
    websiteShort: "rauno.me",
    tag: "Portfolio",
    tagColor: "#f2eee6",
  },
  {
    title: "racOS",
    subtitle: "A web3 enabled portal for all $RAC holders.",
    website: "https://rac.fm/",
    websiteShort: "rac.fm",
    tag: "Portal",
    tagColor: "#f2eee6",
  },
  {
    title: "Open Doodles",
    subtitle: "A Free Set of Open-Source Illustrations!",
    website: "https://www.opendoodles.com/",
    websiteShort: "opendoodles.com",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
  {
    title: "Ouch",
    subtitle: "Free vector illustrations to enhance your project",
    website: "https://icons8.com/illustrations",
    websiteShort: "icons8.com",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
  {
    title: "Unsplash",
    subtitle:
      "The internet’s source of freely-usable images. Powered by creators everywhere.",
    website: "https://unsplash.com/",
    websiteShort: "unsplash.com",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
  {
    title: "Coverr",
    subtitle: "Beautiful Free Stock Video Footage",
    website: "https://coverr.co/",
    websiteShort: "coverr.co",
    tag: "Tools",
    tagColor: "#f2eee6",
  },
  {
    title: "Carbon",
    subtitle:
      "Create and share beautiful images of your source code. Start typing or drop a file into the text area to get started.",
    website: "https://carbon.now.sh/",
    websiteShort: "carbon.now.sh",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
  {
    title: "CSS clip-path maker",
    subtitle:
      "The clip-path property allows you to make complex shapes in CSS by clipping an element to a basic shape (circle, ellipse, polygon, or inset), or to an SVG source.",
    website: "https://bennettfeely.com/clippy/",
    websiteShort: "bennettfeely.com/clippy",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
  {
    title: "WebGradients",
    subtitle:
      "WebGradients is a free collection of 180 linear gradients that you can use as content backdrops in any part of your website. Easy copy CSS3 crossbrowser code and use it in a moment!",
    website: "https://webgradients.com/",
    websiteShort: "webgradients.com",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
  {
    title: "🔥 Design Tips",
    subtitle:
      "A collection of design tips created by Steve Schoger and Adam Wathan",
    website: "https://twitter.com/i/events/994601867987619840",
    websiteShort: "twitter.com",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
  {
    title: "Shortcuts.design",
    subtitle: "Every shortcut for designers, centralized and searchable.",
    website: "https://shortcuts.design/index.html",
    websiteShort: "shortcuts.design",
    tag: "Tools",
    tagColor: "#e8e6f2",
  },
];
export default function Bookmarks() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <h1>Bookmarks</h1>
        <p>
          Find the list of useful websites, great blogs, interesting ideas and
          inspirative quotes
        </p>
      </div>

      <div className={styles.content}>
        <h2 className={`h4 ${styles.title}`}>Front-end resources</h2>
        <div className={styles.gallery}>
          <div className={styles.wrap}>
            <FeatureCard devResources={featuredDevResources} />
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.special}>
          <h2 className={`h4 ${styles.title}`}>New this week</h2>
          <p>
            Explore the list of articles, Toolss, videos and online resources
          </p>
        </div>
        <BookmarkCard devResources={devResources} />
      </div>
    </section>
  );
}
