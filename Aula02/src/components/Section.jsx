import styles from "./css/Section.module.css";

export default function Section({ cor, children }) {
  return (
    <section className={styles.bloco} style={{ backgroundColor: cor }}>
      {children}
    </section>
  );
}
