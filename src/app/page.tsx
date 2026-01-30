"use client";

import { useState, useRef } from "react";
import Image from "next/image";
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
  Send,
  Search,
  Mic,
  FileText,
  Brain,
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

/* ─────────────── Floating Logo ─────────────── */

function FloatingLogo() {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-5 left-5 z-50 flex items-center gap-2 group"
    >
      <div className="relative">
        <Bot className="w-8 h-8 text-pink-500 pink-glow transition-transform group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full" />
      </div>
      <span className="text-xl font-bold gradient-text">Pinky</span>
    </motion.a>
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

      <motion.div style={{ y, opacity }} className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Do you want your own{" "}
              <span className="gradient-text">AI agent?</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              Name it whatever you want. We don&apos;t give a shit. Pinky, Brain,
              Jarvis, Karen — your call.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              It manages tasks, writes emails, does research, and tries to take over
              the world. Well... your business world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/30 flex items-center gap-2"
              >
                Get Your Own AI Agent
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 rounded-full border border-zinc-700 hover:border-pink-500/50 text-zinc-300 hover:text-white font-medium text-lg transition-all"
              >
                View Pricing
              </a>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 80 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl shadow-pink-500/10">
              <Image
                src="/images/hero-pinky.png"
                alt="Pinky at the holographic command center"
                width={700}
                height={500}
                className="w-full h-auto rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
            </div>
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-pink-500/5 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>

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
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Problem text */}
          <div>
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
              className="text-zinc-500 text-lg mb-8"
            >
              We get it. We&apos;ve been there too.
            </motion.p>

            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fade}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 2}
                  className="group flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 card-glow transition-all duration-300 hover:border-pink-500/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <p.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl shadow-pink-500/10">
              <Image
                src="/images/human-bot-chat.png"
                alt="Businessman with holographic AI assistant"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-4 bg-pink-500/5 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={5}
          className="relative text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent" />
          <p className="text-2xl md:text-4xl font-bold py-8">
            <span className="text-zinc-500 italic font-normal">&quot;Are you pondering what I&apos;m pondering?&quot;</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── What Would YOUR Pinky Do? ─────────────── */

function WhatWouldPinkyDo() {
  const { ref, inView } = useSection();

  const examples = [
    {
      icon: Send,
      text: "Send 50 personalized emails before you finish your coffee",
    },
    {
      icon: Search,
      text: "Research your competitors while you sleep",
    },
    {
      icon: ClipboardList,
      text: "Manage your team\u2019s tasks without a single meeting",
    },
    {
      icon: Mic,
      text: "Turn voice notes into organized knowledge bases",
    },
    {
      icon: FileText,
      text: "Generate reports that actually make sense",
    },
    {
      icon: Brain,
      text: "Learn your business and get smarter every single day",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl shadow-pink-500/10">
              <Image
                src="/images/pinky-multitask.png"
                alt="Pinky juggling multiple tasks"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-4 bg-pink-500/5 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mb-8"
            >
              <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
                Your AI, Your Rules
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What would <span className="gradient-text">YOUR</span> Pinky do?
              </h2>
              <p className="text-zinc-400 text-lg">
                One is a genius, the other&apos;s AI. They&apos;re Pinky and the...
                well, you&apos;re the Brain.
              </p>
            </motion.div>

            <div className="space-y-3">
              {examples.map((ex, i) => (
                <motion.div
                  key={i}
                  variants={fade}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 1}
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors">
                    <ex.icon className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-zinc-300 font-medium">{ex.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Features / Command Center ─────────────── */

function Features() {
  const { ref, inView } = useSection();

  const features = [
    {
      icon: ClipboardList,
      title: "Task Management",
      desc: "Kanban boards, batch creation, subtasks, real-time sync. Like Jira, but it doesn\u2019t make you want to cry.",
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
      desc: "Auto-generated with real data. No more \u201CI\u2019ll have that report by Friday\u201D lies.",
    },
    {
      icon: Mail,
      title: "Email & Comms",
      desc: "Sends emails, follows up, harasses people (politely). Your AI has better social skills than you.",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-24 md:py-32 px-4">
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

        {/* Platform Showcase with real image */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="relative mb-6 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50"
        >
          <div className="relative">
            {/* Fake browser chrome */}
            <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4">
                <div className="bg-zinc-800 rounded-md h-6 max-w-md mx-auto flex items-center px-3">
                  <span className="text-xs text-zinc-500 font-mono">pinky.stepten.io/dashboard</span>
                </div>
              </div>
            </div>
            {/* Dashboard image */}
            <div className="relative">
              <Image
                src="/images/dashboard-showcase.png"
                alt="Pinky Command Center Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              {/* Overlay floating UI elements */}
              <div className="absolute top-4 right-4 hidden md:block">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-pink-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-pink-500/30"
                >
                  <Zap className="w-3 h-3 inline mr-1" />
                  12 tasks completed
                </motion.div>
              </div>
              <div className="absolute bottom-8 left-4 hidden md:block">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="bg-zinc-900/90 border border-pink-500/30 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm"
                >
                  <Mail className="w-3 h-3 inline mr-1 text-pink-400" />
                  3 emails queued
                </motion.div>
              </div>
              <div className="absolute top-1/3 left-8 hidden md:block">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="bg-zinc-900/90 border border-purple-500/30 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm"
                >
                  <BarChart3 className="w-3 h-3 inline mr-1 text-purple-400" />
                  Report generating...
                </motion.div>
              </div>
            </div>
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-900/80 to-transparent" />
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="text-center text-zinc-500 text-sm mb-16 italic"
        >
          This is what your command center looks like. Built in 48 hours.
        </motion.p>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 3}
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
      desc: "Tasks, emails, research, reporting \u2014 all automated. You sit back and pretend you\u2019re still working.",
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

        {/* Transition quote */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={5}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl font-bold text-zinc-500 italic">
            &quot;Same thing we do every night...{" "}
            <span className="gradient-text not-italic">automate your entire business.</span>&quot;
          </p>
        </motion.div>
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
        "30 days of support",
      ],
      cta: "Get Your Own AI Agent",
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
      cta: "Get Your Own AI Agent",
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
      cta: "Get Your Own AI Agent",
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

        {/* Support note */}
        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={5}
          className="text-center text-zinc-500 text-sm mt-8"
        >
          All prices include setup, training, and 30 days of support.
        </motion.p>
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
      a: "Pinky uses Claude by Anthropic \u2014 the most capable AI model available. This isn\u2019t some GPT wrapper garbage with a pretty UI. Your AI agent reasons, plans, executes tasks, manages workflows, and learns your business. It\u2019s the real deal.",
    },
    {
      q: "Can it really replace employees?",
      a: "It replaced 12 of ours. You do the math. But seriously \u2014 it handles repetitive, time-consuming tasks that eat up your team\u2019s day. Think of it as your most productive team member who never sleeps.",
    },
    {
      q: "What if it breaks?",
      a: "NARF! It won\u2019t. But we\u2019ve got you covered with dedicated support, monitoring, and a team that actually responds to messages. Unlike your last IT support.",
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
            Get Your Own AI Agent
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
          {" "}&mdash; we&apos;ll respond faster than your AI (almost).
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */

function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-pink-500" />
          <span className="text-sm text-zinc-500">
            Built by{" "}
            <a
              href="https://stepten.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-pink-400 transition-colors font-medium"
            >
              StepTen Inc
            </a>
          </span>
        </div>

        <p className="text-xs text-zinc-600">
          Powered by Anthropic Claude, Supabase, and pure audacity.
        </p>

        <p className="text-sm text-zinc-600 italic">
          &quot;Gee Brain, what are we going to do tomorrow night?&quot;
        </p>
      </div>
    </footer>
  );
}

/* ─────────────── Page ─────────────── */

export default function Home() {
  return (
    <main className="relative">
      <FloatingLogo />
      <Hero />
      <Problem />
      <WhatWouldPinkyDo />
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
