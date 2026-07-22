"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-md bg-accent p-2">
            <Image src="/logo.png" alt="The Fortune Enterprise" width={48} height={48} className="object-contain" />
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-primary">THE FORTUNE</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Enterprise</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Agro Farm", "agrofarm"],
            ["Investment", "investment"],
            ["Products", "products"],
            ["Gallery", "gallery"],
            ["FAQ", "faq"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={label} href={`#${id}`} className="transition hover:text-primary">
              {label}
            </a>
          ))}
        </div>

        <Link href="#contact" className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary shadow-lg shadow-yellow-400/20">
          Request Consultation
        </Link>
      </nav>
    </header>
  );
}
