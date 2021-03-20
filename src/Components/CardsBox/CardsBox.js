import React from "react";
import Cards from "../Cards/Cards";
import styles from "./CardsBox.module.css";

const CardsBox = () => {
  return (
    <div id={styles.container}>
      <Cards />
    </div>
  );
};

export default CardsBox;
