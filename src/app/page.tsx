"use client";

import { useState, useRef, useEffect } from "react";
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
  Code,
  Globe,
  Palette,
  MessageSquare,
  TrendingUp,
  Home as HomeIcon,
  ShoppingCart,
  Briefcase,
  Rocket,
  Video,
  Plug,
  PenTool,
  LayoutDashboard,
  UsersRound,
  Infinity as InfinityIcon,
  Lightbulb,
  MessageCircle,
  Scale,
  Smartphone,
  Headphones,
  Radio,
  X,
  Crown,
  Hammer,
  Monitor,
  Rat,
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

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
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
      className="fixed top-3 left-3 md:top-5 md:left-5 z-50 flex items-center gap-2 group"
    >
      <div className="relative">
        <Bot className="w-6 h-6 md:w-8 md:h-8 text-pink-500 pink-glow transition-transform group-hover:scale-110" />
        <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full" />
      </div>
      <span className="text-lg md:text-xl font-bold gradient-text">Pinky</span>
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              You had the idea.{" "}
              <span className="gradient-text">Now meet the rat that builds it.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              Every business owner has a crazy idea they can&apos;t execute.
              Pinky connects the dots &mdash; apps, APIs, databases, design,
              deployment &mdash; while you run the business.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Not a chatbot. Not a wrapper. A full AI agent that actually
              builds, connects, deploys, and runs the thing.
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
                className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/30 flex items-center justify-center gap-2"
              >
                Get Your Own AI Agent
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-700 hover:border-pink-500/50 text-zinc-300 hover:text-white font-medium text-lg transition-all text-center"
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
            className="relative max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl shadow-pink-500/10 lg:animate-bob">
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

  const scenarios = [
    {
      icon: HomeIcon,
      title: "The Real Estate Agent",
      desc: "Wanted a customer service bot connected to his calendar and lead gen \u2014 but couldn\u2019t code a single line.",
    },
    {
      icon: ShoppingCart,
      title: "The Dropshipper",
      desc: "Needed automated supplier emails, inventory tracking, and SEO content \u2014 but got stuck at \u2018Hello World.\u2019",
    },
    {
      icon: Rocket,
      title: "The Startup Founder",
      desc: "Had the million-dollar app idea \u2014 and is still scribbling on napkins six months later.",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left: Problem text */}
          <div>
            <motion.h2
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              You had the idea.{" "}
              <span className="text-zinc-500">That&apos;s as far as it got.</span>
            </motion.h2>

            <motion.p
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              className="text-zinc-500 text-lg mb-8"
            >
              Sound familiar?
            </motion.p>

            <div className="space-y-4">
              {scenarios.map((p, i) => (
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
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl shadow-pink-500/10 animate-bob">
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
          <p className="text-xl md:text-3xl font-bold py-8 leading-relaxed">
            <span className="text-zinc-500">They all went to ChatGPT. Wrote one page of code.</span>{" "}
            <span className="text-zinc-400">And that&apos;s as far as they got.</span>
            <br />
            <span className="text-zinc-600 text-lg md:text-xl font-normal mt-2 block">
              Because a chatbot can&apos;t deploy your database, connect your CRM, or build your dashboard.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── What Pinky Actually Does ─────────────── */

function WhatPinkyDoes() {
  const { ref, inView } = useSection();

  const capabilities = [
    {
      icon: Code,
      title: "Builds Entire Applications",
      desc: "Full-stack apps, dashboards, landing pages. Deployed. Live. Working. Not \u201Chere\u2019s some code, good luck.\u201D",
    },
    {
      icon: Plug,
      title: "Connects Everything",
      desc: "Supabase, Vercel, CRMs, calendars, payment systems, email providers, Slack, Telegram. If it has an API, Pinky talks to it.",
    },
    {
      icon: PenTool,
      title: "Generates Content",
      desc: "Marketing materials, SEO articles, social media posts, email campaigns. Written in your voice, not robot speak.",
    },
    {
      icon: Palette,
      title: "Creates Visuals",
      desc: "AI image generation, video creation with Remotion, PowerPoint decks. Design assets without a designer.",
    },
    {
      icon: LayoutDashboard,
      title: "Manages Your Business",
      desc: "Task management, team coordination, project tracking, reports. Your entire operation in one place.",
    },
    {
      icon: MessageSquare,
      title: "Talks to You Anywhere",
      desc: "Telegram, Slack, WhatsApp. In your car, on the beach, at 3am. The rat never sleeps.",
    },
    {
      icon: UsersRound,
      title: "Powers Your Team",
      desc: "Integrate your employees so they get the power of the rat too. Every team member, supercharged.",
    },
    {
      icon: InfinityIcon,
      title: "Scales Infinitely",
      desc: "Want more rats? We add more rats. Each one specialized. No hiring, no training, no limit.",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Way More Than a Chatbot
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Pinky <span className="gradient-text">Actually Does</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Not tasks and emails. We&apos;re talking full-stack business automation.
            The kind of stuff that makes your competitors nervous.
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
                  App deployed to production
                </motion.div>
              </div>
              <div className="absolute bottom-8 left-4 hidden md:block">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="bg-zinc-900/90 border border-pink-500/30 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm"
                >
                  <Mail className="w-3 h-3 inline mr-1 text-pink-400" />
                  47 leads contacted
                </motion.div>
              </div>
              <div className="absolute top-1/3 left-8 hidden md:block">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="bg-zinc-900/90 border border-purple-500/30 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm"
                >
                  <Globe className="w-3 h-3 inline mr-1 text-purple-400" />
                  3 APIs connected
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
          Your command center. Built in 48 hours. Not a mockup. Actually works.
        </motion.p>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((f, i) => (
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

/* ─────────────── Replace Your SaaS Stack (NEW) ─────────────── */

function SaaSReplacement() {
  const { ref, inView } = useSection();

  const saasTools = [
    { name: "ClickUp", price: "$15/mo" },
    { name: "HubSpot", price: "$45/mo" },
    { name: "Salesforce", price: "$75/mo" },
    { name: "Slack", price: "$12/mo" },
    { name: "Monday", price: "$10/mo" },
    { name: "Analytics", price: "$30/mo" },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-6"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Stop Paying for Software You Barely Use
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Replace Your <span className="gradient-text">Entire SaaS Stack</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-zinc-400 text-lg max-w-3xl mx-auto text-center mb-16 leading-relaxed"
        >
          You&apos;re paying $500/month for 5 tools and using 10% of each.
          Configured by nobody. Used by nobody properly.
          There&apos;s a better way.
        </motion.p>

        {/* Side-by-side comparison */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: SaaS stack (dimmed, crossed out) */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5 md:p-8 overflow-hidden"
          >
            {/* Big X overlay */}
            <motion.div
              initial={{ scale: 0, rotate: -10, opacity: 0 }}
              animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0, rotate: -10, opacity: 0 }}
              transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
              <X className="w-48 h-48 text-red-500/40 stroke-[3]" />
            </motion.div>

            <div className="opacity-50">
              <h3 className="text-xl font-bold text-zinc-400 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                The Old Way
              </h3>

              <div className="space-y-3">
                {saasTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.4, ease: "easeOut" }}
                    className="flex items-center justify-between bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50"
                  >
                    <span className="text-zinc-400 line-through">{tool.name}</span>
                    <span className="text-red-400/80 font-mono text-sm">{tool.price}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 font-semibold">Per person, per month</span>
                  <span className="text-red-400 font-bold text-xl line-through">$187/mo</span>
                </div>
                <p className="text-zinc-600 text-xs mt-2 italic">
                  Configured by nobody. Used by nobody properly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Pinky (glowing) */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="relative bg-gradient-to-b from-pink-500/10 to-purple-500/5 border-2 border-pink-500/30 rounded-2xl p-5 md:p-8 animate-glow-pulse overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-pink-400 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-pink-400" />
                The Pinky Way
              </h3>

              {/* Pinky image */}
              <div className="relative rounded-xl overflow-hidden mb-6 border border-pink-500/20 animate-bob">
                <Image
                  src="/images/pinky-vs-saas.png"
                  alt="Pinky standing on crushed software"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              </div>

              <div className="space-y-3">
                {[
                  "One dashboard. Built for YOUR business.",
                  "One rat. Manages everything.",
                  "Connected to YOUR tools and APIs.",
                  "Talk to it from Telegram, Slack, WhatsApp.",
                  "Your team gets rat power too.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-pink-400 shrink-0" />
                    <span className="text-zinc-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-pink-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 font-semibold">After setup</span>
                  <span className="gradient-text font-bold text-xl">$0/mo</span>
                </div>
                <p className="text-zinc-500 text-xs mt-2">
                  Everything you actually need. Nothing you don&apos;t.
                </p>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Punchline */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={5}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-bold">
            <span className="text-zinc-500">Six subscriptions. Ten percent usage. Zero integration.</span>{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">Or one rat that does everything.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Two Types of Brain (NEW) ─────────────── */

function TwoTypesBrain() {
  const { ref, inView } = useSection();

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-6"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Two Ways to Use the Rat
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What kind of <span className="gradient-text">Brain</span> are you?
          </h2>
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-zinc-400 text-lg max-w-3xl mx-auto text-center mb-16 leading-relaxed"
        >
          Some people need a dashboard that runs their business.
          Some people need software that brings their idea to life.
          Either way, the rat&apos;s got you.
        </motion.p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* CEO Brain */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="tilt-card group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/10"
          >
            {/* Image */}
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src="/images/pinky-ceo-dashboard.png"
                alt="Pinky as CEO, feet up, screens working"
                width={600}
                height={350}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-pink-500/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Crown className="w-3 h-3" />
                  The CEO Brain
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Your Rat + Your Dashboard</h3>
              <p className="text-pink-400 text-sm font-medium mb-4">Run your business from your phone</p>

              <div className="space-y-3 mb-6">
                {[
                  "Custom dashboard built for YOUR business",
                  "Not a generic ClickUp clone you spend 6 months configuring",
                  "Connected to YOUR tools and APIs",
                  "Talk to your rat from Telegram, Slack, or WhatsApp",
                  "Add your team \u2014 they get rat power too",
                  "Replaces HubSpot + Salesforce + ClickUp + 5 other subscriptions",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-zinc-500 text-sm">From <span className="text-white font-bold text-lg">$5,000</span></span>
                <a
                  href="#pricing"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2"
                >
                  Get Your Dashboard
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Builder Brain */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="tilt-card group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10"
          >
            {/* Image */}
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src="/images/brain-idea-lightbulb.png"
                alt="Human has the idea, the rat builds it"
                width={600}
                height={350}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-purple-500/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Hammer className="w-3 h-3" />
                  The Builder Brain
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Build My Thing</h3>
              <p className="text-purple-400 text-sm font-medium mb-4">You have the idea. The rat builds it.</p>

              <div className="space-y-3 mb-6">
                {[
                  "Full software development \u2014 apps, platforms, MVPs",
                  "You tried Bolt, Lovable, Cursor \u2014 it never scaled",
                  "The rat builds real software: databases, APIs, full-stack",
                  "Not a code generator \u2014 a builder that finishes the job",
                  "Same tech stack (Supabase + Vercel + Next.js) that actually scales",
                  "Deployed, monitored, and maintained",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-zinc-500 text-sm">From <span className="text-white font-bold text-lg">$10,000</span></span>
                <a
                  href="#pricing"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                >
                  Build Your Thing
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── What Would YOUR Pinky Do? ─────────────── */

function WhatWouldPinkyDo() {
  const { ref, inView } = useSection();

  const businessTypes = [
    {
      icon: HomeIcon,
      title: "Real Estate Agent",
      image: "/images/pinky-realestate.png",
      bullets: [
        "Customer service bot",
        "Calendar integration",
        "Lead gen follow-ups",
        "Property descriptions",
        "Prospect emails",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce / Dropshipper",
      image: "/images/pinky-ecommerce.png",
      bullets: [
        "Supplier automation",
        "Inventory tracking",
        "Product descriptions & SEO",
        "Social content creation",
        "Custom dashboard",
      ],
    },
    {
      icon: Rocket,
      title: "Startup Founder",
      image: "/images/pinky-startup.png",
      bullets: [
        "Napkin to deployed MVP",
        "Database + frontend + APIs",
        "Auth & user management",
        "Pitch deck generation",
      ],
    },
    {
      icon: Video,
      title: "Content Creator",
      image: "/images/pinky-influencer.png",
      bullets: [
        "Video scripts & thumbnails",
        "SEO optimization",
        "Email newsletters",
        "Social scheduling",
      ],
    },
    {
      icon: Scale,
      title: "Legal / Finance",
      image: "/images/pinky-lawyer.png",
      bullets: [
        "Contract drafting",
        "Compliance review",
        "Client intake automation",
        "Document analysis",
      ],
    },
    {
      icon: Briefcase,
      title: "Agency Owner",
      image: "/images/pinky-multitask.png",
      bullets: [
        "Client reporting",
        "Project management",
        "Content pipeline",
        "Proposal generation",
      ],
    },
  ];

  // Duplicate for infinite scroll
  const scrollItems = [...businessTypes, ...businessTypes];

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Built For Your Business
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What would <span className="gradient-text">YOUR</span> Pinky do?
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every business is different. Every Pinky is different.
            Here&apos;s what yours could look like.
          </p>
        </motion.div>

        {/* Mobile: auto-scrolling carousel */}
        <div className="md:hidden overflow-hidden -mx-4 px-4">
          <div className="flex gap-4 animate-auto-scroll" style={{ width: `${scrollItems.length * 304}px` }}>
            {scrollItems.map((bt, i) => (
              <div
                key={`${bt.title}-${i}`}
                className="flex-shrink-0 w-[280px] group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden"
              >
                <div className="relative h-[180px] overflow-hidden bg-zinc-900">
                  <Image
                    src={bt.image}
                    alt={bt.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center">
                      <bt.icon className="w-3.5 h-3.5 text-pink-400" />
                    </div>
                    <h3 className="font-bold text-sm">{bt.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {bt.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Check className="w-3 h-3 text-pink-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((bt, i) => (
            <motion.div
              key={bt.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 1}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/10 hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden bg-zinc-900">
                <Image
                  src={bt.image}
                  alt={bt.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <bt.icon className="w-4 h-4 text-pink-400" />
                  </div>
                  <h3 className="font-bold text-lg">{bt.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {bt.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Ecosystem Section ─────────────── */

function EcosystemSection() {
  const { ref, inView } = useSection();

  const pillars = [
    {
      icon: BookOpen,
      title: "Shared Knowledge",
      desc: "Every rat we deploy gets access to our growing library of skills and best practices. SEO generators, email templates, marketing frameworks \u2014 your rat knows things you haven\u2019t even thought of yet.",
    },
    {
      icon: Plug,
      title: "Connected to Everything",
      desc: "Supabase, Vercel, Stripe, Google Calendar, Slack, Telegram, CRMs, email providers \u2014 your rat knows how to connect them all. You just say what you want.",
    },
    {
      icon: Shield,
      title: "Managed by Us",
      desc: "We handle databases, deployments, security, and maintenance. You have a dedicated admin system watching over your platform 24/7. You run the business. We run the infrastructure.",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-6"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Under the Hood
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            You don&apos;t need to know how it works.{" "}
            <span className="gradient-text">Just that it works.</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-zinc-400 text-lg max-w-3xl mx-auto text-center mb-16 leading-relaxed"
        >
          Your rat comes pre-loaded with knowledge you didn&apos;t even know you needed.
          SEO foundations. API integrations. Database architecture. Design systems.
          It&apos;s not starting from scratch &mdash; it&apos;s starting from everything
          we&apos;ve already built.
        </motion.p>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 2}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 md:p-8 card-glow transition-all duration-300 hover:border-pink-500/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-500/15 flex items-center justify-center mb-5 group-hover:from-pink-500/25 group-hover:to-purple-500/25 transition-all">
                <p.icon className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={6}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold">
            <span className="text-zinc-500">You&apos;re the Brain. You have the ideas.</span>{" "}
            <span className="gradient-text">We give you the rats to execute them.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Talk From Anywhere ─────────────── */

function TalkFromAnywhere() {
  const { ref, inView } = useSection();

  const points = [
    {
      icon: Mic,
      title: "Voice Note From Your Car",
      desc: "Driving? Send a voice note to Telegram. Your rat hears you, understands you, and gets to work before you park.",
    },
    {
      icon: Smartphone,
      title: "Text From the Couch",
      desc: "On the couch? Text on WhatsApp. At the gym? Quick message on Slack. The rat meets you wherever you are.",
    },
    {
      icon: Headphones,
      title: "Always Working",
      desc: "In a meeting? The rat\u2019s still working. On vacation? Still working. 3am? You guessed it. The hamster wheel never stops.",
    },
    {
      icon: UsersRound,
      title: "Rat Power for Everyone",
      desc: "Want your employees to have rat power too? We integrate them. Everyone gets a rat. Each one specialized. No limit.",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Header */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mb-6"
            >
              <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
                Not Tied to Your Keyboard
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Talk from <span className="gradient-text">anywhere.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              className="text-zinc-400 text-lg mb-8 leading-relaxed"
            >
              The rat&apos;s running on the hamster wheel while you run your business.
              You don&apos;t need to be at a computer. You don&apos;t even need to type.
            </motion.p>

            {/* Grid */}
            <div className="space-y-4">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fade}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 2}
                  className="group flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 card-glow transition-all duration-300 hover:border-pink-500/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors">
                    <p.icon className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{p.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Phone car image */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl shadow-pink-500/10 animate-bob">
              <Image
                src="/images/pinky-phone-car.png"
                alt="Rat in phone while human drives"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-4 bg-pink-500/5 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={7}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
            Want more rats?{" "}
            <span className="text-zinc-300 font-semibold">We add more rats.</span>{" "}
            Each one specialized. No hiring. No training.{" "}
            <span className="gradient-text font-bold">No limit.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Not Just a Chatbot ─────────────── */

function NotJustAChatbot() {
  const { ref, inView } = useSection();

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/[0.02] to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Let&apos;s Be Clear
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            This isn&apos;t ChatGPT{" "}
            <span className="gradient-text">with a fancy wrapper.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12">
          {/* ChatGPT side */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-zinc-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-500">A Chatbot</h3>
            </div>
            <div className="space-y-3">
              {[
                "Writes text",
                "You copy paste",
                "Nothing happens",
                "You Google the error",
                "You give up",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span className="text-zinc-500 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pinky side */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="bg-gradient-to-b from-pink-500/10 to-purple-500/5 border-2 border-pink-500/30 rounded-2xl p-5 md:p-8 card-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-pink-400">Your Pinky</h3>
            </div>
            <div className="space-y-3">
              {[
                "Writes the code",
                "Deploys it live",
                "Connects the APIs",
                "Sends the emails",
                "Builds the dashboard",
                "Manages the tasks",
                "Actually does the work",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-zinc-300 text-sm font-medium">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold">
            <span className="text-zinc-500">ChatGPT gives you answers.</span>{" "}
            <span className="gradient-text">Pinky gives you results.</span>
          </p>
        </motion.div>
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
      icon: Lightbulb,
      title: "Tell us your crazy idea",
      desc: "Voice note, text message, napkin sketch \u2014 we don\u2019t care how it comes in. If you can explain it to a friend at a bar, you can explain it to us.",
    },
    {
      num: "02",
      icon: Zap,
      title: "We build your AI agent",
      desc: "Connected to everything you need. Not a chatbot \u2014 a full operational system. Database, frontend, APIs, integrations. All wired up.",
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Talk to it from anywhere",
      desc: "Telegram, Slack, WhatsApp. In your car. On the toilet. At 2am. The rat is ALWAYS there. Just tell it what you need.",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Scale when you're ready",
      desc: "More agents, more integrations, more power. Your team gets rats too. No hiring, no training, no limit.",
    },
  ];

  return (
    <section id="how" ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
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
            From Idea to Running Business
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            How It <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30" />

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
                className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30" />
                <div className="absolute inset-2 rounded-full bg-zinc-950 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl md:text-2xl font-bold gradient-text">{s.num}</span>
                    <s.icon className="w-5 h-5 text-pink-400 mx-auto mt-1" />
                  </div>
                </div>
              </motion.div>

              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition quote */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={6}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl font-bold text-zinc-500 italic">
            &quot;Same thing we do every night...{" "}
            <span className="gradient-text not-italic">turn your idea into a real business.</span>&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── The Rat Pack (NEW) ─────────────── */

function RatPack() {
  const { ref, inView } = useSection();

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-6"
        >
          <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-3">
            Scale Beyond One
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Rat Pack</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-zinc-400 text-xl max-w-2xl mx-auto text-center mb-12 leading-relaxed"
        >
          Need more rats? We&apos;ve got rats.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left: Team rats image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-2xl shadow-pink-500/10 animate-bob">
              <Image
                src="/images/pinky-team-rats.png"
                alt="Squad of rats marching together"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-4 bg-pink-500/5 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Right: Rat assignments */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
          >
            <div className="space-y-6">
              {[
                {
                  icon: Briefcase,
                  label: "Rat #1",
                  role: "Handles your business",
                  desc: "Dashboard, tasks, team coordination, client management",
                },
                {
                  icon: TrendingUp,
                  label: "Rat #2",
                  role: "Handles your marketing",
                  desc: "Content, SEO, emails, social media, lead generation",
                },
                {
                  icon: Code,
                  label: "Rat #3",
                  role: "Handles your development",
                  desc: "Apps, APIs, databases, deployments, maintenance",
                },
              ].map((rat, i) => (
                <motion.div
                  key={rat.label}
                  variants={fade}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 4}
                  className="group flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 card-glow transition-all duration-300 hover:border-pink-500/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-500/15 flex items-center justify-center shrink-0 group-hover:from-pink-500/25 group-hover:to-purple-500/25 transition-all">
                    <rat.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">{rat.label}</span>
                      <h3 className="text-base font-bold">{rat.role}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm">{rat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={7}
              className="text-lg font-semibold mt-8"
            >
              Each rat is specialized. Each rat is connected.{" "}
              <span className="gradient-text">Together, they&apos;re unstoppable.</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Hamster wheel section */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={8}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center bg-zinc-900/30 border border-zinc-800 rounded-2xl p-5 md:p-8 lg:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                And they <span className="text-pink-400">never.</span>{" "}
                <span className="text-purple-400">Stop.</span>{" "}
                <span className="gradient-text">Working.</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                While you sleep, eat, drive, vacation, or binge-watch terrible TV &mdash;
                the rats are on the wheel. Generating content. Sending emails.
                Processing leads. Building features. The wheel never stops spinning.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-pink-500/20 animate-bob">
              <Image
                src="/images/pinky-hamster-wheel.png"
                alt="Rat on hamster wheel powering everything"
                width={500}
                height={350}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Testimonial ─────────────── */

function Testimonial() {
  const { ref, inView } = useSection();

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4">
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

          <blockquote className="text-xl md:text-3xl font-bold leading-tight mb-8 px-8">
            I had 12 employees doing what one AI agent does now.
            Not because I&apos;m cheap &mdash; because the AI is genuinely better.
            It doesn&apos;t call in sick, it doesn&apos;t need training, and it
            definitely doesn&apos;t steal office supplies.{" "}
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
      subtitle: "The CEO Package",
      price: "$5,000",
      desc: "For the business owner who needs a dashboard, a rat, and zero more SaaS subscriptions.",
      features: [
        "Custom AI agent (your Pinky)",
        "Custom dashboard built for YOUR business",
        "Connected tools (email, calendar, CRM)",
        "Supabase backend + Vercel deployment",
        "Telegram / Slack / WhatsApp access",
        "30 days of support",
      ],
      cta: "Get Your Dashboard",
      popular: false,
    },
    {
      name: "Pro",
      subtitle: "The Builder Package",
      price: "$10,000",
      desc: "For the ambitious ones who tried Bolt and Cursor \u2014 and need something that actually ships.",
      features: [
        "Everything in Starter",
        "Custom software build (full-stack)",
        "API integrations & custom workflows",
        "Team onboarding & training",
        "Email & comms automation",
        "Knowledge base setup",
        "60 days of support",
        "Priority response time",
      ],
      cta: "Build Your Thing",
      popular: true,
    },
    {
      name: "Enterprise",
      subtitle: "The Empire Package",
      price: "$20K+",
      desc: "Multi-agent domination. Multiple rats. Custom features. White-label. The full operation.",
      features: [
        "Everything in Pro",
        "Multiple specialized rats",
        "Custom feature development",
        "White-label option",
        "Dedicated support engineer",
        "SLA guarantees",
        "Ongoing development & maintenance",
        "First dibs on world domination",
      ],
      cta: "Build Your Empire",
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4">
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
              className={`relative group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
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

              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <p className="text-pink-400 text-sm font-medium mb-3">{t.subtitle}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text">{t.price}</span>
                <span className="text-zinc-500 text-sm ml-2">one-time</span>
              </div>
              <p className="text-zinc-400 text-sm mb-6">{t.desc}</p>

              <ul className="space-y-3 mb-6">
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
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={5}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Every project is different. These are starting points.
            Book a call and we&apos;ll figure out what you actually need.
          </p>
          <p className="text-zinc-600 text-sm italic">
            All prices include setup, deployment, and the specified support period.
          </p>
        </motion.div>
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
        className="w-full flex items-center justify-between p-4 md:p-5 min-h-[48px] text-left hover:bg-zinc-900/50 transition-colors"
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
      a: "Pinky uses Claude by Anthropic \u2014 the most capable AI model available. This isn\u2019t some GPT wrapper with a pretty UI. Your AI agent reasons, plans, executes tasks, deploys code, connects APIs, and manages your entire business. It doesn\u2019t just give you answers \u2014 it gives you results.",
    },
    {
      q: "Can it really build apps and connect everything?",
      a: "Yes. Full-stack applications, Supabase databases, Vercel deployments, API integrations, CRM connections, email automation \u2014 the whole stack. Your Pinky doesn\u2019t write code for you to copy-paste. It builds, deploys, and runs the thing.",
    },
    {
      q: "What about Bolt/Lovable/Cursor?",
      a: "Great for prototypes. Terrible for production. They generate code \u2014 they don\u2019t build systems. Your rat builds systems that actually scale. We use Supabase, Vercel, Next.js \u2014 real infrastructure, not a code sandbox.",
    },
    {
      q: "Can I talk to my rat from my phone?",
      a: "Telegram, Slack, WhatsApp \u2014 wherever you are. Driving? Voice note. On the couch? Text. The rat\u2019s always listening. Well, that sounds creepy. But you get it.",
    },
    {
      q: "What if I don\u2019t know what I want?",
      a: "Most people don\u2019t. That\u2019s literally our job. Tell us your problems, we\u2019ll figure out what the rat needs to do. You\u2019re the Brain \u2014 you have the vision. We handle the execution.",
    },
    {
      q: "I\u2019m not technical. Can I still use this?",
      a: "That\u2019s literally the whole point. You talk to Pinky like you\u2019d talk to a colleague. \u201CHey, I need a dashboard that shows my sales data.\u201D Done. No code. No jargon. Just results.",
    },
    {
      q: "What if it breaks?",
      a: "We\u2019ve got you covered with dedicated support, monitoring, and a team that actually responds to messages. Unlike your last IT support. Plus, Pinky can often fix issues itself before you even notice them.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from handshake to your AI agent being live and operational. We move fast because, well, our AI does most of the setup work. Meta, right?",
    },
    {
      q: "What integrations do you support?",
      a: "Email (Gmail/Outlook), Slack, Telegram, WhatsApp, calendars, Supabase, Vercel, GitHub, CRMs, payment processors, and basically anything with an API. If it exists, Pinky can probably talk to it.",
    },
    {
      q: "Is my data safe?",
      a: "Absolutely. Enterprise-grade encryption, SOC 2 compliant infrastructure, and your AI runs on isolated instances. We take security more seriously than we take world domination. Almost.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4">
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
    <section id="contact" ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4">
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
          You&apos;ve got the idea.{" "}
          <span className="gradient-text">Let&apos;s build the thing.</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
          48 hours from now, your AI agent is live. Your crazy idea is running.
          And you&apos;ll wonder why you didn&apos;t do this six months ago.
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
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2">
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
          {" "}&mdash; tell us your crazy idea. We love crazy ideas.
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
          Powered by Anthropic Claude, Supabase, Vercel, and pure audacity.
        </p>

        <p className="text-sm text-zinc-600 italic">
          Want more rats? We&apos;ve got rats.
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
      <WhatPinkyDoes />
      <SaaSReplacement />
      <TwoTypesBrain />
      <WhatWouldPinkyDo />
      <EcosystemSection />
      <TalkFromAnywhere />
      <NotJustAChatbot />
      <HowItWorks />
      <RatPack />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CTAFooter />
      <Footer />
    </main>
  );
}
