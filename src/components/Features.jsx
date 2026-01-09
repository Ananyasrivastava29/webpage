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
    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 100%, 280px), 1fr))",
    gap: "clamp(16px, 3vw, 24px)",
    padding: "clamp(40px, 8vw, 80px)",
    marginTop: "clamp(24px, 5vw, 40px)"
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    padding: "clamp(16px, 3vw, 24px)",
    borderRadius: "16px",
    color: "white"
  }
}
