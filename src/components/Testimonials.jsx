import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.wrapper}>
      <h2>What teams say about Ryze</h2>

      <div className={styles.grid}>
        <motion.div className={styles.card} whileHover={{ scale: 1.03 }}>
          “Ryze helped us scale ads without increasing spend.”
          <span>– Growth Lead, SaaS</span>
        </motion.div>

        <motion.div className={styles.card} whileHover={{ scale: 1.03 }}>
          “Creative testing became automatic and measurable.”
          <span>– Performance Marketer</span>
        </motion.div>
      </div>
    </section>
  );
}
