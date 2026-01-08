import styles from "./CaseStudies.module.css";

export default function CaseStudies() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Case Studies</h1>

      <p className={styles.subtitle}>
        See how teams use Ryze to automate ads, improve creatives,
        and scale ROAS with AI-driven decisions.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          🚀 Increased ROAS by 42% using automated creative testing
        </div>
        <div className={styles.card}>
          📊 Reduced ad spend waste by 30% with AI optimization
        </div>
        <div className={styles.card}>
          🤖 Scaled campaigns across platforms with zero manual tuning
        </div>
      </div>
    </main>
  );
}
