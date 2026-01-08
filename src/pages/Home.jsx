import heroImage from "../assets/hero-image.png"
import Features from "../components/Features"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div>
          <h1>
            Let <span style={{ color: "#2de2c5" }}>AI</span> Run Your Ads
          </h1>
          <p>Automated optimization, smarter creatives, better ROAS.</p>

          <div style={styles.buttons}>
            <button style={styles.primary}>Get Started</button>
            <button style={styles.secondary}>Book a Demo</button>
          </div>
        </div>

        <img src={heroImage} alt="AI Ads" style={styles.image} />
      </section>

      {/* FEATURES */}
      <Features />
    </>
  )
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    padding: "0 80px",
    gap: "40px"
  },
  image: {
    width: "100%",
    maxWidth: "520px",
    justifySelf: "end"
  },
  buttons: {
    display: "flex",
    gap: "16px",
    marginTop: "24px"
  },
  primary: {
    background: "#ff8a1f",
    border: "none",
    padding: "12px 22px",
    borderRadius: "8px",
    color: "white"
  },
  secondary: {
    background: "transparent",
    border: "1px solid #2de2c5",
    padding: "12px 22px",
    borderRadius: "8px",
    color: "#2de2c5"
  }
}
