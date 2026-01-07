import { motion } from "framer-motion"

export default function Features() {
  const data = [
    "AI Keyword Optimization",
    "Creative Intelligence",
    "Budget Reallocation Engine",
    "Account Health Audits"
  ]

  return (
    <section style={styles.section}>
      {data.map((item, i) => (
        <motion.div
          key={i}
          style={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </section>
  )
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "30px",
    padding: "80px"
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    padding: "30px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)"
  }
}
