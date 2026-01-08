import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CaseStudies() {
  return (
    <>
      <Header />

      <main style={{ padding: "120px 80px", color: "#fff" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Case Studies
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.85, maxWidth: "700px" }}>
          See how teams use Ryze to automate ads, improve creatives,
          and scale ROAS with AI-driven decisions.
        </p>

        <div style={{ marginTop: "40px", display: "grid", gap: "20px" }}>
          <div style={cardStyle}>
            🚀 Increased ROAS by 42% using automated creative testing
          </div>
          <div style={cardStyle}>
            📊 Reduced ad spend waste by 30% with AI optimization
          </div>
          <div style={cardStyle}>
            🤖 Scaled campaigns across platforms with zero manual tuning
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.06)",
  padding: "20px",
  borderRadius: "12px",
  backdropFilter: "blur(8px)",
};
