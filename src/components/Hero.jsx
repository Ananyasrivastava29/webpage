export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>
        Let <span style={styles.gradient}>AI</span> Run Your Ads
      </h1>
      <p>Automated optimization, smarter creatives, better ROAS.</p>

      <div style={styles.buttons}>
        <button style={styles.primary}>Get Started</button>
        <button style={styles.secondary}>Book a Demo</button>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "clamp(20px, 5vw, 80px)",
    gap: "clamp(16px, 4vw, 25px)"
  },
  gradient: {
    background: "linear-gradient(135deg, #1fb6ff, #2ee59d)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },
  buttons: {
    display: "flex",
    gap: "clamp(12px, 3vw, 20px)",
    flexWrap: "wrap"
  },
  primary: {
    background: "linear-gradient(135deg, #ff6a00, #ff8f3f)",
    padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 28px)",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "600",
    fontSize: "clamp(12px, 2.5vw, 16px)",
    border: "none",
    cursor: "pointer"
  },
  secondary: {
    background: "transparent",
    border: "1px solid #2ee59d",
    padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 28px)",
    borderRadius: "10px",
    color: "#2ee59d",
    fontSize: "clamp(12px, 2.5vw, 16px)",
    fontWeight: "600",
    cursor: "pointer"
  }
}
