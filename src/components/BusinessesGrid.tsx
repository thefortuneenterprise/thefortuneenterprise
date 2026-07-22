"use client";

import Link from "next/link";
import { BUSINESSES } from "@/lib/data";
import { motion } from "framer-motion";

export default function BusinessesGrid() {
  return (
    <section id="businesses" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Our Businesses</p>
          <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A premium portfolio of modern enterprises.</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {BUSINESSES.map((b, i) => (
          <motion.div key={b.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.45 }} whileHover={{ y: -6, scale: 1.02 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-2xl bg-gold-gradient p-3 text-primary"><div className="w-5 h-5" /></div>
            <h3 className="font-heading text-lg font-semibold text-primary">{b.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{b.summary}</p>
            <div className="mt-4">
              <Link href={`/businesses/${b.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Learn more →</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
