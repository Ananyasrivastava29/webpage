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
    padding: "24px 80px",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "white",
    textDecoration: "none"
  },
  nav: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
    color: "white"
  },
  cta: {
    background: "#ff8a1f",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  }
}
