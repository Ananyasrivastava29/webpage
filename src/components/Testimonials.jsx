import t1 from "../assets/testimonials/testimonial1.png";
import t2 from "../assets/testimonials/testimonial2.png";
import t3 from "../assets/testimonials/testimonial3.png";

export default function Testimonials() {
  const testimonialImages = [t1, t2, t3];

  return (
    <section className="testimonials">
      <div className="container testimonial-grid">
        {testimonialImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Customer testimonial"
            className="testimonial-img"
          />
        ))}
      </div>
    </section>
  );
}
