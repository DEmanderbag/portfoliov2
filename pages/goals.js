import styles from "../styles/components/GoalsCard.module.scss";
const goalsData = [
  {
    label: "Run half marathon (21km)",
    tag: "Health 🏃‍♂️",
    color: "#e6f2ee",
    complete: false,
  },
  {
    label: "Close rings on Apple Watch for 365 days",
    tag: "Health 🏃‍♂️",
    color: "#e6f2ee",
    complete: false,
  },
  {
    label: "Complete all monthly challenges on Apple Watch",
    tag: "Health 🏃‍♂️",
    color: "#e6f2ee",
    complete: false,
  },
  {
    label: "Get driving license",
    tag: "Personal",
    color: "#e6ecf2",
    complete: false,
  },
  {
    label: "Improve CSS animations knowledge",
    tag: "Growth 🎨",
    color: "#f2e6e6",
    complete: false,
  },
  {
    label: "Start creating content (Instagram, Tiktok, Blogs, Twitter)",
    tag: "Growth 🎨",
    color: "#f2e6e6",
    complete: false,
  },
  {
    label: "Become more proactive in meetings",
    tag: "Growth 🎨",
    color: "#f2e6e6",
    complete: false,
  },
  {
    label: "Travel to 3 new countries",
    tag: "Travel ✈️",
    color: "#f2eee6",
    complete: false,
  },
];

export default function Goals() {
  return (
    <section className={`globalWrapper ${styles.grid}`}>
      <h1 className="h4">
        This is the list for my goals of this year, list will be upaded as
        I&apos;m checking the boxes
      </h1>
      {goalsData.map((goal) => (
        <div key={goal.label} className={styles.card}>
          <div
            style={{ backgroundColor: `${goal.color}` }}
            className={styles.tag}
          >
            {goal.tag}
          </div>
          <div className={styles.goal}>
            <input
              id={goal.label}
              type="checkbox"
              defaultChecked={goal.complete}
              disabled
              className={styles.input}
            />
            <label htmlFor={goal.label}>{goal.label}</label>
          </div>
        </div>
      ))}
    </section>
  );
}
