import React from "react";

const items = [
  { year: "2026", title: "Construction", text: "Building world-class infrastructure and operational facilities." },
  { year: "2027", title: "Livestock & Food Production", text: "Expanding dairy, poultry, and food processing capacity." },
  { year: "2028", title: "Employment & Investment", text: "Creating opportunities for workforce development and investor participation." },
];

export default function Timeline() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-accent p-8 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Mega Project 2026-2028</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">A bold roadmap for sustainable growth.</h2>
        <div className="mt-10 space-y-6">
          {items.map((it, idx) => (
            <div key={it.title} className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-primary">{it.year}</div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-slate-600">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
