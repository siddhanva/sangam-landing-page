import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sangam helped me cut lesson prep time in half while doubling student engagement. Seeing what works for other teachers is a game-changer.",
    name: "Sarah M.",
    role: "5th Grade Teacher",
    school: "Lincoln Elementary",
    avatar: "SM",
  },
  {
    quote: "For the first time, I can see what's working across our district and adapt best practices in real time. This is the future of professional development.",
    name: "James K.",
    role: "Instructional Coach",
    school: "Denver Public Schools",
    avatar: "JK",
  },
  {
    quote: "The privacy protections gave us confidence to roll this out district-wide. Teachers love it, and our data shows measurable improvement in mastery outcomes.",
    name: "Dr. Maria L.",
    role: "Director of Curriculum",
    school: "Phoenix Unified",
    avatar: "ML",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Innovative Educators
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-muted/30 rounded-xl p-6 border border-border card-hover"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="text-foreground italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.school}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
