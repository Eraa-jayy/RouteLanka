import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import herobg from "../assets/herobg.png";
import ctabg from "../assets/ctabg.png";

import {
  MapPinned,
  ShieldCheck,
  Route,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  CheckCircle2,
  Star,
} from "lucide-react";

export const HomePage = () => {
  const brandBlue = "#12348c";
  const brandRed = "#9F0712";

  const features = [
    {
      icon: MapPinned,
      title: "Real-time Tracking",
      description:
        "Monitor your entire fleet location in real-time with precise GPS tracking.",
    },
    {
      icon: ShieldCheck,
      title: "Smart Expense Management",
      description:
        "Track fuel costs, maintenance expenses, driver allowances, and operational spending in one place. Gain valuable insights to reduce costs and maximize profitability.",
    },
    {
      icon: Route,
      title: "Booking & Reservation Management",
      description:
        "Manage passenger bookings, seat allocations, schedules, and payments effortlessly through a centralized system designed to streamline daily operations.",
    },
    {
      icon: Sparkles,
      title: "Maintenance Tracking",
      description:
        "Schedule and track vehicle maintenance with smart automated alerts.",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reports",
      description:
        "Comprehensive reporting and data-driven insights on fleet performance.",
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description:
        "Real-time alerts for critical fleet events and operational updates.",
    },
  ];

  const stats = [
    { value: "99%", label: "Customer Satisfaction" },
    { value: "30%", label: "Fuel Cost Reduction" },
    { value: "100%", label: "On-time Performance" },
    { value: "24/7", label: "Support Coverage" },
  ];

  return (
    <div className="min-h-screen bg-slate-10 overflow-x-hidden font-sans text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-12 md:pt-20 lg:pt-32 pb-16 lg:pb-32">
        <motion.img
          src={herobg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {/* Gradient overlay for readability while keeping the bg image visible */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-white/20 -z-10" />
        <div className="absolute inset-0 bg-white/10 -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center text-center lg:text-left">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Star
                  className="w-3.5 h-3.5 text-amber-500"
                  fill="currentColor"
                />
                Smart Transport. Stronger Business.
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                Welcome to
                <span
                  className="block font-serif text-5xl sm:text-6xl lg:text-7xl transition-colors duration-300 hover:text-[#c2151f]"
                  style={{ color: brandRed }}
                >
                  RouteLanka
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-slate-700 font-bold mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Streamline your transport business with Sri Lanka's most
                advanced fleet management ecosystem. Built for reliability,
                designed for scale.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <Link
                  to="/login"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-sky-500 to-cyan-500 px-8 py-4 text-white font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur text-slate-700 font-bold rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
                  <PlayCircle className="w-5 h-5 text-slate-500 group-hover:text-sky-500 transition-colors duration-300" />
                  Watch Demo
                </button> */}
              </motion.div>

              {/* Trust Badge */}
              {/* <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 text-slate-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-medium italic">
                  Trusted by 500+ operators
                </p>
              </motion.div> */}
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [0, 8, 0] }}
          viewport={{ once: false }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-slate-300" />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="cursor-default"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="text-3xl lg:text-4xl font-black transition-colors duration-300"
                  style={{ color: brandBlue }}
                >
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {/* <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${brandBlue}10`, color: brandBlue }}
            >
              Platform Features
            </div> */}
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6"
              style={{ color: brandBlue }}
            >
              Everything You Need to Run a{" "}
              <span style={{ color: brandRed }}>Profitable</span> Bus Business
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Powerful tools built for bus company owners in Sri Lanka to help
              you track vehicles, manage bookings, control expenses, and improve
              daily operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${brandBlue}10` }}
                  >
                    <Icon style={{ color: brandBlue }} className="w-7 h-7" />
                  </div>
                  <h4
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: brandBlue }}
                  >
                    {f.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative px-4 py-20 lg:py-32 flex items-center justify-center overflow-hidden">
        <motion.img
          src={ctabg}
          alt="CTA background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ filter: "blur(8px)" }}
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <motion.div
          className="w-full max-w-6xl rounded-4xl lg:rounded-[4rem] p-10 lg:p-24 text-center relative overflow-hidden bg-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative element */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 h-48  rounded-full -ml-24 -mb-24"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Upgrade?
            </motion.h3>
            <motion.p
  className="text-sky-100 text-lg lg:text-xl mb-16 max-w-2xl opacity-90"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  Modernize your operations today. Get a personalized walkthrough of
  the platform with our experts.
</motion.p>

<motion.div
  className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <Link
    to="/login"
    className="px-10 py-5 bg-linear-to-r from-sky-500 to-cyan-500 font-bold rounded-2xl text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:brightness-110 hover:-translate-y-1 active:scale-95"
  >
    Create Free Account
  </Link>
</motion.div>

            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <CheckCircle2 className="w-4 h-4 text-white" /> Track
 
              </div>
              <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <CheckCircle2 className="w-4 h-4 text-white" /> Analyze
              </div>
              <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <CheckCircle2 className="w-4 h-4 text-white" /> Grow
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
