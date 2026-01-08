import heroImage from "../assets/hero-image.png"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Pricing from "../components/Pricing"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container">
          {/* LEFT */}
          <div className="hero-content">
            <h1>
              Let <span>AI</span> Run Your Ads
            </h1>
            <p>
              Automated optimization, smarter creatives, better ROAS.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">Book a Demo</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-image">
            <img src={heroImage} alt="AI Ads" />
          </div>
        </div>
      </motion.section>

      <Features />
      <Testimonials />
      <Pricing />
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


