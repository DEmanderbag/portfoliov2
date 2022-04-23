import { useState, useEffect } from "react";
import data from "../../data/bookmarks.json";
import styles from "../../styles/bookmarks/Buttons.module.scss";

const Buttons = ({ filterTags, setBookmarkCard, tags }) => {
  const [isActive, setActive] = useState({
    active: null,
    tags: tags,
  });

  function toggleActive(index) {
    setActive({ ...isActive, active: isActive.tags[index] });
  }

  function toggleActiveStyles(index) {
    if (isActive.tags[index] === isActive.active) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    toggleActive(-1);
  }, []);

  return (
    <>
      <div className={styles.tags}>
        <button
          className={styles.tag}
          type="button"
          onClick={() => {
            setBookmarkCard(data[2]);
            toggleActive(-1);
          }}
          style={
            toggleActiveStyles(-1)
              ? {
                  background:
                    "linear-gradient(90deg, var(--article) 30%, var(--games) 70%)",
                  color: "white",
                }
              : {
                  backgroundColor: `var(--color-2)`,
                  color: "var(--primary-text)",
                }
          }
        >
          All
        </button>
        {isActive.tags.map((value, index) => {
          return (
            <button
              type="button"
              key={index}
              className={`${styles.tag} ${toggleActiveStyles(index)}`}
              style={
                toggleActiveStyles(index)
                  ? {
                      backgroundColor: `var(--${value.toLowerCase()})`,
                      color: "white",
                    }
                  : {
                      backgroundColor: `var(--color-2)`,
                      color: "var(--primary-text)",
                    }
              }
              onClick={() => {
                filterTags(value);
                toggleActive(index);
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
