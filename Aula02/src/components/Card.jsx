import styles from "./css/Card.module.css";

export default function Card({ cor, border }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: cor,
        borderRadius: border ? "10px" : "0px",
      }}
    ></div>
  );
}