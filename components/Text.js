import styles from "../styles/components/Text.module.scss";

const data = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore quod ipsa dolorem expedita sint sequi qui ad repellat veritatis dolores saepe aperiam recusandae atque earum harum debitis, perferendis accusantium!",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore quod ipsa dolorem expedita sint sequi qui ad repellat veritatis dolores saepe aperiam recusandae atque earum harum debitis, perferendis accusantium!",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore quod ipsa dolorem expedita sint sequi qui ad repellat veritatis dolores saepe aperiam recusandae atque earum harum debitis, perferendis accusantium!",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore quod ipsa dolorem expedita sint sequi qui ad repellat veritatis dolores saepe aperiam recusandae atque earum harum debitis, perferendis accusantium!",
  },
];
const Text = () => {
  return (
    <section className={styles.textBlock}>
      <h2 className={styles.title}>This is just a random header</h2>
      {/* {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2> */}
      {data.map((p) => (
        <p key={p}>{p.text}</p>
      ))}
    </section>
  );
};

export default Text;
