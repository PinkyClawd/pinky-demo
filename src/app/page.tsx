"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Bot,
  DollarSign,
  Clock,
  AlertTriangle,
  ClipboardList,
  BookOpen,
  Users,
  BarChart3,
  Mail,
  Check,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Menu,
  X,
} from "lucide-react";

/* ─────────────── helpers ─────────────── */

function useSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, inView };
}

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

/* ─────────────── Navbar ─────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Bot className="w-8 h-8 text-pink-500 pink-glow transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full" />
            </div>
            <span className="text-xl font-bold gradient-text">Pinky</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-400 hover:text-pink-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-pink-500/25"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-zinc-300 hover:text-pink-400 transition-colors py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2 rounded-full bg-pink-600 text-white text-center font-medium"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ─────────────── Floating Particles ─────────────── */

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-pink-500/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────── Hero ─────────────── */

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern" />

      <Particles />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <Bot className="w-20 h-20 text-pink-500 mx-auto" />
            <div className="absolute inset-0 bg-pink-500/30 blur-2xl rounded-full" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-pink-500/10 blur-3xl rounded-full"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-pink-400 text-sm md:text-base font-mono mb-4 tracking-wider uppercase"
        >
          The same thing we do every night...
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          What if your AI{" "}
          <span className="gradient-text">actually did the work?</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Meet Pinky — an AI agent that manages tasks, writes emails, does research,
          and tries to take over the world. Well... your business world.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#features"
            className="group relative px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/30 flex items-center gap-2"
          >
            See What Pinky Can Do
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 rounded-full border border-zinc-700 hover:border-pink-500/50 text-zinc-300 hover:text-white font-medium text-lg transition-all"
          >
            View Pricing
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-pink-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────── Problem Section ─────────────── */

function Problem() {
  const { ref, inView } = useSection();

  const problems = [
    {
      icon: DollarSign,
      title: "Expensive",
      desc: "The average employee costs $60K+ per year. Your AI agent costs a fraction of that.",
    },
    {
      icon: Clock,
      title: "Slow",
      desc: "Humans need coffee breaks, weekends, and apparently \"mental health days.\"",
    },
    {
      icon: AlertTriangle,
      title: "Unreliable",
      desc: "They call in sick. They quit. They accidentally reply-all. Every. Single. Time.",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          You hired humans.{" "}
          <span className="text-zinc-500">They disappointed you.</span>
        </motion.h2>

        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-zinc-500 text-lg mb-16 max-w-xl mx-auto"
        >
          We get it. We&apos;ve been there too.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 card-glow transition-all duration-300 hover:border-pink-500/30"
            >
              <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-red-500/20 transition-colors">
                <p.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={4}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent" />
          <p className="text-2xl md:text-4xl font-bold py-8">
            What if there was a{" "}
            <span className="gradient-text">better way?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Features ─────────────── */

function Features() {
  const { ref, inView } = useSection();

  const features = [
    {
      icon: ClipboardList,
      title: "Task Management",
      desc: "Kanban boards, batch creation, subtasks, real-time sync. Like Jira, but it doesn't make you want to cry.",
    },
    {
      icon: Bot,
      title: "AI Agent",
      desc: "Works 24/7. No holidays. No complaints. No existential crises. NARF!",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      desc: "Voice-to-text, vector search, categorized docs. Your AI remembers everything. Unlike Dave from accounting.",
    },
    {
      icon: Users,
      title: "Team Coordination",
      desc: "Comments, notifications, planning. Your AI coordinates better than your project manager ever did.",
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      desc: "Auto-generated with real data. No more \"I'll have that report by Friday\" lies.",
    },
    {
      icon: Mail,
      title: "Email & Comms",
      desc: "Sends emails, follows up, harasses people (politely). Your AI has better social skills than you.",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-24 md:py-32 px-4">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Meet Your New Favorite Employee
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Pinky <span className="gradient-text">Command Center</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Everything you need to run your business, powered by an AI that never sleeps,
            never complains, and only occasionally says &quot;NARF!&quot;
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="relative mb-16 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50"
        >
          <div className="aspect-video relative">
            {/* Fake browser chrome */}
            <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4">
                <div className="bg-zinc-800 rounded-md h-6 max-w-md mx-auto flex items-center px-3">
                  <span className="text-xs text-zinc-500 font-mono">pinky.stepten.io</span>
                </div>
              </div>
            </div>
            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4 h-[calc(100%-40px)]">
              {/* Sidebar */}
              <div className="col-span-2 hidden md:flex flex-col gap-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded-lg ${
                      i === 0
                        ? "bg-pink-500/20 border border-pink-500/30"
                        : "bg-zinc-800/50"
                    }`}
                  />
                ))}
              </div>
              {/* Main area */}
              <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
                <div className="h-8 w-48 bg-zinc-800/50 rounded-lg" />
                <div className="flex gap-3 flex-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex-1 bg-zinc-800/30 rounded-xl p-3 flex flex-col gap-2">
                      <div className="h-4 w-20 bg-zinc-700/50 rounded" />
                      {[...Array(3 - i)].map((_, j) => (
                        <div
                          key={j}
                          className={`h-16 rounded-lg border ${
                            i === 0
                              ? "bg-pink-500/5 border-pink-500/20"
                              : "bg-zinc-800/50 border-zinc-700/30"
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* Right panel */}
              <div className="col-span-3 hidden md:flex flex-col gap-3">
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-3 flex-1 border border-pink-500/10">
                  <div className="h-4 w-16 bg-pink-500/20 rounded mb-3" />
                  <div className="h-20 bg-zinc-800/30 rounded-lg mb-2" />
                  <div className="h-3 w-full bg-zinc-700/30 rounded" />
                  <div className="h-3 w-3/4 bg-zinc-700/20 rounded mt-1" />
                </div>
                <div className="bg-zinc-800/30 rounded-xl p-3 flex-1">
                  <div className="h-4 w-20 bg-zinc-700/50 rounded mb-3" />
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-700/50" />
                      <div className="h-3 flex-1 bg-zinc-700/30 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-900/80 to-transparent" />
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 2}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 card-glow transition-all duration-300 hover:border-pink-500/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <f.icon className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── How It Works ─────────────── */

function HowItWorks() {
  const { ref, inView } = useSection();

  const steps = [
    {
      num: "01",
      icon: Sparkles,
      title: "We set up your AI agent",
      desc: "Configure Claude, integrations, personality. Your AI gets a name, a brain, and an unhealthy work ethic.",
    },
    {
      num: "02",
      icon: Zap,
      title: "We build your command center",
      desc: "Custom dashboard, Supabase backend, Vercel deploy. A beautiful control panel that makes you feel like a Bond villain.",
    },
    {
      num: "03",
      icon: Shield,
      title: "Your AI gets to work",
      desc: "Tasks, emails, research, reporting — all automated. You sit back and pretend you're still working.",
    },
  ];

  return (
    <section id="how" ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Simple as 1-2-NARF
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            How It <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 1}
              className="text-center relative"
            >
              {/* Number circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-32 h-32 mx-auto mb-6 relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30" />
                <div className="absolute inset-2 rounded-full bg-zinc-950 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl font-bold gradient-text">{s.num}</span>
                    <s.icon className="w-6 h-6 text-pink-400 mx-auto mt-1" />
                  </div>
                </div>
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed max-w-sm mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Testimonial ─────────────── */

function Testimonial() {
  const { ref, inView } = useSection();

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/[0.02] to-transparent" />

      <motion.div
        variants={fade}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-8">
          The Brain Behind It
        </p>

        <div className="relative">
          {/* Quote marks */}
          <div className="absolute -top-8 left-4 text-8xl text-pink-500/10 font-serif select-none">
            &ldquo;
          </div>

          <blockquote className="text-2xl md:text-4xl font-bold leading-tight mb-8 px-8">
            I sacked 12 employees and replaced them with AI.{" "}
            <span className="gradient-text">Best decision I ever made.</span>
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <span className="text-lg font-bold">S</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">Stephen</p>
              <p className="text-sm text-zinc-500">Founder, StepTen Inc</p>
            </div>
          </div>
        </div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="text-zinc-600 text-sm mt-8 italic"
        >
          (The 12 employees were also AI. It&apos;s AI all the way down.)
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ─────────────── Pricing ─────────────── */

function Pricing() {
  const { ref, inView } = useSection();

  const tiers = [
    {
      name: "Starter",
      price: "$5,000",
      desc: "Perfect for small teams who want to stop pretending spreadsheets are a system.",
      features: [
        "1 custom AI agent",
        "Basic integrations (email, calendar)",
        "Command center dashboard",
        "Supabase backend setup",
        "Vercel deployment",
        "2 weeks of support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$10,000",
      desc: "For businesses ready to let AI do the heavy lifting. NARF!",
      features: [
        "Everything in Starter",
        "Full command center build",
        "Custom workflow automation",
        "Team training & onboarding",
        "Email & comms automation",
        "Knowledge base setup",
        "30 days of support",
        "Priority response time",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$20K+",
      desc: "Multi-agent domination. World takeover sold separately.",
      features: [
        "Everything in Pro",
        "Multi-agent orchestration",
        "Custom feature development",
        "White-label option",
        "Dedicated support engineer",
        "SLA guarantees",
        "Quarterly strategy reviews",
        "First dibs on world domination",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="relative py-24 md:py-32 px-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Invest In Your AI Overlord
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            One-time setup fee. Your AI works forever. Unlike that intern.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 1}
              className={`relative group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                t.popular
                  ? "bg-gradient-to-b from-pink-500/10 to-purple-500/5 border-2 border-pink-500/30 card-glow"
                  : "bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/20"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{t.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text">{t.price}</span>
                <span className="text-zinc-500 text-sm ml-2">one-time</span>
              </div>
              <p className="text-zinc-400 text-sm mb-6">{t.desc}</p>

              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all ${
                  t.popular
                    ? "bg-pink-600 hover:bg-pink-500 text-white hover:shadow-lg hover:shadow-pink-500/25"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 hover:border-pink-500/30"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FAQ ─────────────── */

function FAQItem({
  q,
  a,
  index,
  inView,
}: {
  q: string;
  a: string;
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fade}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="border border-zinc-800 rounded-xl overflow-hidden hover:border-pink-500/20 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-900/50 transition-colors"
      >
        <span className="font-semibold pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-pink-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-zinc-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  const { ref, inView } = useSection();

  const faqs = [
    {
      q: "Is this actually AI or just a chatbot?",
      a: "Pinky uses Claude by Anthropic — the most capable AI model available. This isn't some GPT wrapper garbage with a pretty UI. Your AI agent reasons, plans, executes tasks, manages workflows, and learns your business. It's the real deal.",
    },
    {
      q: "Can it really replace employees?",
      a: "It replaced 12 of ours. You do the math. But seriously — it handles repetitive, time-consuming tasks that eat up your team's day. Think of it as your most productive team member who never sleeps.",
    },
    {
      q: "What if it breaks?",
      a: "NARF! It won't. But we've got you covered with dedicated support, monitoring, and a team that actually responds to messages. Unlike your last IT support.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from handshake to your AI saying its first NARF. We move fast because, well, our AI does most of the setup work. Meta, right?",
    },
    {
      q: "What integrations do you support?",
      a: "Email (Gmail/Outlook), Slack, calendar, Supabase, Vercel, GitHub, and basically anything with an API. If it exists, Pinky can probably talk to it.",
    },
    {
      q: "Is my data safe?",
      a: "Absolutely. Enterprise-grade encryption, SOC 2 compliant infrastructure, and your AI runs on isolated instances. We take security more seriously than we take world domination. Almost.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="relative py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Questions? We&apos;ve Got Answers.
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently <span className="gradient-text">Asked</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} index={i + 1} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA Footer ─────────────── */

function CTAFooter() {
  const { ref, inView } = useSection();

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/[0.03] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <motion.div
        variants={fade}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <Bot className="w-16 h-16 text-pink-500 mx-auto mb-6 pink-glow" />

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to try taking over the{" "}
          <span className="gradient-text">world?</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
          Or at least your industry. Let&apos;s build your AI agent and command center.
          48 hours from now, you&apos;ll wonder why you didn&apos;t do this sooner.
        </p>

        {/* Email form */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 transition-all"
          />
          <button className="px-8 py-3.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="text-zinc-500 text-sm mb-4"
        >
          or{" "}
          <a
            href="mailto:hello@stepten.io"
            className="text-pink-400 hover:text-pink-300 underline underline-offset-2 transition-colors"
          >
            book a call
          </a>
          {" "}— we&apos;ll respond faster than your AI (almost).
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */

function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-pink-500" />
          <span className="text-sm text-zinc-500">
            Powered by{" "}
            <a
              href="https://stepten.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-pink-400 transition-colors"
            >
              StepTen Inc
            </a>
          </span>
        </div>

        <p className="text-sm text-zinc-600 italic">
          &quot;Gee Brain, I think we should sign up!&quot;
        </p>

        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-pink-400 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── Page ─────────────── */

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CTAFooter />
      <Footer />
    </main>
  );
}
