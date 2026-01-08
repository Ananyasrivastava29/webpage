import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={styles.wrapper}>
      <h2>Pricing</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Starter</h3>
          <p>$49 / month</p>
        </div>

        <div className={`${styles.card} ${styles.highlight}`}>
          <h3>Growth</h3>
          <p>$149 / month</p>
        </div>

        <div className={styles.card}>
          <h3>Enterprise</h3>
          <p>Custom</p>
        </div>
      </div>
    </section>
  );
}
