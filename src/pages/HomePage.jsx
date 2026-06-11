import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import herobg from "../assets/herobg.png";
import {
  MapPinned,
  ShieldCheck,
  Route,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const HomePage = () => {
  const brandBlue = "#12348c";
  const brandRed = "#F70101";

  const features = [
    {
      icon: MapPinned,
      title: "Real-time Tracking",
      description:
        "Monitor your entire fleet location in real-time with precise GPS tracking.",
    },
    {
      icon: ShieldCheck,
      title: "Driver Management",
      description:
        "Manage driver profiles, performance metrics, and safety records seamlessly.",
    },
    {
      icon: Route,
      title: "Route Optimization",
      description:
        "Optimize routes to reduce fuel consumption and significantly cut delivery times.",
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

  return (
    <div className="min-h-screen bg-slate-10 overflow-x-hidden font-sans text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-32 pb-16 lg:pb-32">
        <img
          src={herobg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 -z-10"
        />
        <div className="absolute inset-0 bg-slate-50/25 -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center text-center lg:text-left">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium mb-6">
                Premium Fleet Experience
              </div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                Welcome to
                <span
                  className="block text-[#62748E] font-serif text-5xl sm:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  RouteLanka
                </span>
              </motion.h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Streamline your transport business with Sri Lanka’s most
                advanced fleet management ecosystem. Built for reliability,
                designed for scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/login"
                  className="group flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl shadow-xl transition-all hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: brandBlue }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all">
                  Watch Demo
                </button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-medium italic">
                  Trusted by 500+ operators
                </p>
              </div>
            </motion.div>

            {/* Right Dashboard Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden sm:block"
            >
              <div
                className="absolute -top-10 -right-10 w-64 h-64 blur-[100px] opacity-20"
                style={{ backgroundColor: brandBlue }}
              />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 sm:p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  {/* <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div> */}
                  {/* <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Live Dashboard
                  </div> */}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <TrendingUp
                      className="w-6 h-6 mb-2"
                      style={{ color: brandBlue }}
                    />
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">
                      Efficiency
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <MapPinned
                      className="w-6 h-6 mb-2"
                      style={{ color: brandRed }}
                    />
                    <div className="text-2xl font-bold">142</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">
                      Active Buses
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium">
                      Fuel Consumption
                    </span>
                    <span className="text-xs text-green-400">-12%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 w-3/4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6"
              style={{ color: brandBlue }}
            >
              Everything You Need to{" "}
              <span style={{ color: brandRed }}>Win</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Powerful tools designed specifically for the Sri Lankan transport
              landscape, ensuring your fleet stays moving and profitable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={i}
                  className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${brandBlue}10` }}
                  >
                    <Icon style={{ color: brandBlue }} className="w-7 h-7" />
                  </div>
                  <h4
                    className="text-xl font-bold mb-3"
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
      <section className="px-4 py-20 lg:py-32">
        <div
          className="max-w-6xl mx-auto rounded-4xl lg:rounded-[4rem] p-10 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
          style={{ backgroundColor: brandBlue }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6">
              Ready to Upgrade?
            </h3>
            <p className="text-sky-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Modernize your operations today. Get a personalized walkthrough of
              the platform with our experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="px-10 py-5 bg-white font-bold rounded-2xl shadow-lg transition-transform active:scale-95"
                style={{ color: brandBlue }}
              >
                Create Free Account
              </Link>
              <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                Contact Sales
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> No credit
                card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> Cancel
                anytime
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> 24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
