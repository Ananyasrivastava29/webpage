import Header from "./Header"
import Footer from "./Footer"

export default function PageLayout({ children }) {
  return (
    <div style={styles.page}>
      <Header />

      <main style={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center"
  }
}
