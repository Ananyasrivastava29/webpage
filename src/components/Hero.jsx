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
    padding: "0 80px",
    gap: "25px"
  },
  gradient: {
    background: "linear-gradient(135deg, #1fb6ff, #2ee59d)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },
  buttons: {
    display: "flex",
    gap: "20px"
  },
  primary: {
    background: "linear-gradient(135deg, #ff6a00, #ff8f3f)",
    padding: "14px 28px",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "600"
  },
  secondary: {
    background: "transparent",
    border: "1px solid #2ee59d",
    padding: "14px 28px",
    borderRadius: "10px",
    color: "#2ee59d"
  }
}
