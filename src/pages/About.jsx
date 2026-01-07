import PageLayout from "../components/PageLayout"
import { motion } from "framer-motion"

export default function About() {
  const features = [
    "AI-powered ad optimization",
    "Real-time performance insights",
    "Cross-platform budget control",
    "Built for modern growth teams"
  ]

  return (
    <PageLayout>
      <section style={styles.section}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Built for Growth Teams
        </motion.h1>

        <p>
          Ryze exists to simplify ad management using AI so teams can focus
          on strategy, not spreadsheets.
        </p>

        <div style={styles.grid}>
          {features.map((item, i) => (
            <motion.div
              key={i}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

const styles = {
  section: {
    maxWidth: "1000px",
    padding: "0 80px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    marginTop: "40px"
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    padding: "24px",
    borderRadius: "14px",
    backdropFilter: "blur(10px)"
  }
}
