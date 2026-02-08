import { useState } from "react";
import { Linkedin, Twitter, Github, Mail, ArrowRight } from "lucide-react";
import { SangamLogo } from "@/components/landing/SangamLogo";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Roadmap", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "mailto:sshankar97@gatech.edu" },
  ],
  resources: [
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#0f172a] text-slate-300 overflow-hidden">
      {/* Gradient top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sangam-indigo-light/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sangam-indigo-light/8 to-transparent pointer-events-none" />
      {/* Floating orbs */}
      <div className="pointer-events-none absolute top-1/4 -right-20 w-64 h-64 rounded-full blur-3xl bg-primary/5 orb-2" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 w-48 h-48 rounded-full blur-3xl bg-sangam-indigo-light/5 orb-1" />

      <div className="container-custom py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Logo & Tagline — spans 2 cols */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-4">
              <SangamLogo size="md" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-[320px]">
              The only LMS that learns from your teaching—so you improve faster, together.
            </p>
            <p className="text-slate-500 text-xs italic mb-6">
              Built for students, by students.
            </p>

            {/* Newsletter signup */}
            <div className="max-w-sm">
              <p className="text-sm font-semibold text-white mb-3">Stay Updated</p>
              <p className="text-xs text-slate-400 mb-3">Get teaching tips and product updates.</p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-sm text-accent">
                  <Mail size={16} />
                  <span>Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-sangam-indigo-light text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1"
                  >
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2026 Sangam. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
