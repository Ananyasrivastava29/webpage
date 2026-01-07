import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header style={styles.header}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
  <h2 style={{ cursor: "pointer" }}>Ryze</h2>
</Link>
      <nav style={styles.nav}>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/about">About</Link>
        <button style={styles.button}>Get Started</button>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 60px",
    alignItems: "center"
  },
  nav: {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  },
  button: {
    background: "linear-gradient(135deg, #ff6a00, #ff8f3f)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "600"
  }
}
