import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>Ryze</Link>

      <nav style={styles.nav}>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/about">About</Link>
        <button style={styles.cta}>Get Started</button>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "clamp(16px, 4vw, 24px) clamp(16px, 5vw, 80px)",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
    flexWrap: "wrap"
  },
  logo: {
    fontSize: "clamp(18px, 5vw, 24px)",
    fontWeight: "700",
    color: "white",
    textDecoration: "none"
  },
  nav: {
    display: "flex",
    gap: "clamp(12px, 3vw, 24px)",
    alignItems: "center",
    color: "white",
    flexDirection: "row"
  },
  cta: {
    background: "#ff8a1f",
    border: "none",
    padding: "clamp(8px, 2vw, 10px) clamp(14px, 3vw, 18px)",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "clamp(12px, 2vw, 14px)"
  }
}
