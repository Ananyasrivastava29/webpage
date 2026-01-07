import PageLayout from "../components/PageLayout"
import { motion } from "framer-motion"

export default function CaseStudies() {
  const cases = [
    { brand: "E-commerce Brand", roas: "+42%", spend: "-31%" },
    { brand: "SaaS Company", roas: "+55%", spend: "-27%" },
    { brand: "D2C Startup", roas: "2.5x", spend: "Faster scaling" }
  ]

  return (
    <PageLayout>
      <section style={styles.section}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Top Brands Improve ROAS with Ryze
        </motion.h1>

        <p>Real results powered by AI.</p>

        <div style={styles.grid}>
          {cases.map((item, i) => (
            <motion.div
              key={i}
              style={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <h3>{item.brand}</h3>
              <p><strong>ROAS:</strong> {item.roas}</p>
              <p><strong>Spend:</strong> {item.spend}</p>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    marginTop: "40px"
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    padding: "30px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)"
  }
}
