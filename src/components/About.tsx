"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">About Fortune Enterprise</p>
          <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A trusted Bangladeshi corporate group building long-term value through agriculture and livestock.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">The Fortune Enterprise is focused on real asset-backed operations, professional management, and ethical business practices. The Fortune Agro Farm serves as the flagship platform for dairy, beef, goat, poultry, and related farm operations with a clear emphasis on transparency and investor confidence.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Integrity",
              "Innovation",
              "Agriculture",
              "Livestock",
              "Halal Investment",
              "Community Development",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-accent px-4 py-3 text-sm font-medium text-slate-700">{item}</div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary to-slate-900 p-6 text-white shadow-2xl">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80" alt="Professional livestock and farm operations" className="h-72 w-full rounded-[1.5rem] object-cover" />
            <div className="glass-dark mt-6 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary/20 p-3 text-secondary">✓</div>
                <div>
                  <p className="text-sm text-slate-300">Focused on real assets</p>
                  <p className="text-xl font-semibold">Premium Agri Operations</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
