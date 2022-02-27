import { useState, useEffect, useRef } from "react";
import styles from "../styles/components/Video.module.scss";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px 300px 0px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, [ref]);
  return isIntersecting;
}

const Video = ({ poster, source }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <div className={styles.videoWrapper} ref={ref}>
      {onScreen ? (
        <video controls poster={poster} preload="none">
          <source src={source} type="video/mp4" />
        </video>
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </div>
  );
};

export default Video;
