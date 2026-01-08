export default function Features() {
  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h3>Automated Optimization</h3>
        <p>AI continuously improves performance.</p>
      </div>

      <div style={styles.card}>
        <h3>Smarter Creatives</h3>
        <p>Ads adapt based on real-time data.</p>
      </div>

      <div style={styles.card}>
        <h3>Better ROAS</h3>
        <p>Higher returns with lower spend.</p>
      </div>

      <div style={styles.card}>
        <h3>Scale Faster</h3>
        <p>Grow without increasing complexity.</p>
      </div>
    </section>
  )
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
    padding: "80px",
    marginTop: "40px"
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    padding: "24px",
    borderRadius: "16px",
    color: "white"
  }
}
