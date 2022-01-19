import styles from "../styles/components/Map.module.scss";
import ToZagreb from "./maps/ToZagreb";
import ToZadar from "./maps/ToZadar";
import ToSplit from "./maps/ToSplit";
import ToDubrovnik from "./maps/ToDubrovnik";
import FullTrip from "./maps/fullTrip";
// import { useState, useEffect, useRef } from "react";

const Map = ({ map }) => {
  return (
    <section className={styles.map}>
      {map === "zagreb" && <ToZagreb />}
      {map === "zadar" && <ToZadar />}
      {map === "split" && <ToSplit />}
      {map === "dubrovnik" && <ToDubrovnik />}
      {map === "fulltrip" && <FullTrip />}
      {/* <div className={`${styles.wrapper}`}>
        <svg
          width="640"
          height="818"
          viewBox="0 0 640 818"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {map === "zagreb" && <toZagreb />}
          <toZagreb />
        </svg>
      </div> */}
    </section>
  );
};

export default Map;
