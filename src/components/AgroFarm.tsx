"use client";

import { motion } from "framer-motion";

const farmCategories = [
  { title: "Dairy", icon: "🐄" },
  { title: "Beef", icon: "🐂" },
  { title: "Goat", icon: "🐐" },
  { title: "Poultry", icon: "🐓" },
  { title: "Duck", icon: "🦆" },
  { title: "Pigeon", icon: "🕊" },
  { title: "Eggs", icon: "🥚" },
  { title: "Feed Production", icon: "🌾" },
];

export default function AgroFarm() {
  return (
    <section id="agrofarm" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">The Fortune Agro Farm</p>
          <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A premium livestock and agro platform designed for real value and long-term trust.</h2>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {farmCategories.map((item) => (
          <motion.div key={item.title} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.5rem] border border-slate-200 bg-accent p-6 text-center shadow-sm">
            <div className="text-4xl">{item.icon}</div>
            <h3 className="mt-4 font-heading text-xl font-semibold text-primary">{item.title}</h3>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Farm Vision</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-primary">Integrated farm operations with controlled quality, dependable supply, and transparent reporting.</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">The farm model focuses on dairy, beef, goat, poultry, and feed systems that support consistent output and long-term investor confidence.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80" alt="Premium livestock farm operations" className="h-72 w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </section>
  );
}
