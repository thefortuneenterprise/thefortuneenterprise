"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=80"
          alt="Modern dairy and livestock farm in Bangladesh"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.25),transparent_35%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.6em] text-secondary">The Fortune Enterprise</p>
          <h1 className="font-heading text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">The Fortune Agro Farm</h1>
          <p className="mt-6 text-xl text-slate-200 sm:text-2xl">Agriculture • Livestock • Halal Investment</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A premium agribusiness platform focused on real assets, ethical investment, and long-term value creation in Bangladesh.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#investment" className="rounded-full bg-gold-gradient px-6 py-3 font-semibold text-primary transition hover:scale-105">Explore Investment Projects</a>
            <a href="#contact" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur">Schedule a Farm Visit</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
