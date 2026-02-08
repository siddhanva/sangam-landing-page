import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, MessageSquareHeart } from "lucide-react";

const testimonials = [
  {
    quote: "Sangam helped me cut lesson prep time in half while doubling student engagement. Seeing what works for other teachers is a game-changer.",
    name: "Sarah M.",
    role: "5th Grade Teacher",
    school: "Lincoln Elementary",
    avatar: "SM",
    rating: 5,
  },
  {
    quote: "For the first time, I can see what's working across our district and adapt best practices in real time. This is the future of professional development.",
    name: "James K.",
    role: "Instructional Coach",
    school: "Denver Public Schools",
    avatar: "JK",
    rating: 5,
  },
  {
    quote: "The privacy protections gave us confidence to roll this out district-wide. Teachers love it, and our data shows measurable improvement in mastery outcomes.",
    name: "Dr. Maria L.",
    role: "Director of Curriculum",
    school: "Phoenix Unified",
    avatar: "ML",
    rating: 5,
  },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Educators collaborating",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Teacher with students",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&h=600&q=80",
    alt: "Teamwork and learning",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden section-padding bg-card" ref={ref}>
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/8 orb-1" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tl from-sangam-indigo-light/10 to-primary/8 orb-2" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="eyebrow-badge">
            <MessageSquareHeart size={14} />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="gradient-text">Innovative Educators</span>
          </h2>
        </motion.div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="relative rounded-2xl overflow-hidden border border-border shadow-card bg-muted/30 aspect-[3/2] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-sangam-indigo-light/15 group-hover:opacity-80 transition-opacity" />
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) + 0.2 }}
              className="group relative glass-card rounded-2xl p-6 card-hover-glow overflow-hidden tilt-card"
            >
              {/* Gradient top bar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-sangam-indigo-light opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
              </div>

              <Quote className="w-7 h-7 text-primary/30 mb-3" />
              <p className="text-foreground italic leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-sangam-indigo-light flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
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
