import styles from "../../styles/case-study/List.module.scss";

const List = ({ listItems }) => {
  return (
    <div className={`globalWrapper ${styles.listGrid}`}>
      {listItems.map((list) => (
        <div key={list.title} className={styles.listWrapper}>
          <h3 className={`h4 ${styles.listTitle}`}>{list.title}</h3>
          <ul className="about-services-infos">
            {list.data.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;
