"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Car,
  ChevronRight,
  Fish,
  Flower2,
  Gem,
  Globe2,
  HandCoins,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPin,
  Milk,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Store,
  TrainFront,
  Truck,
  Users,
} from "lucide-react";

const businesses = [
  { title: "Knit & Denim Fashion", icon: ShirtIcon },
  { title: "Medicine Corner", icon: PillIcon },
  { title: "Agro Farm", icon: Leaf },
  { title: "Tour & Travels", icon: TrainFront },
  { title: "Super Shop", icon: Store },
  { title: "Transport Service", icon: Truck },
  { title: "Gold & Diamond House", icon: Gem },
  { title: "Export House", icon: Globe2 },
  { title: "Automobile", icon: Car },
  { title: "Restaurant & Cafe", icon: Building2 },
];

const whyChooseUs = [
  "Integrity",
  "Shariah-focused Business",
  "Quality",
  "Innovation",
  "Professional Management",
  "Long-term Vision",
  "Customer Satisfaction",
];

const farmHighlights = [
  { value: "500+", label: "Cattle" },
  { value: "2000+", label: "Poultry" },
  { value: "15+", label: "Veterinary Teams" },
  { value: "100%", label: "Organic Focus" },
];

function ShirtIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Building2 {...props} />;
}

function PillIcon(props: React.SVGProps<SVGSVGElement>) {
  return <ShieldCheck {...props} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="font-heading text-lg font-semibold text-primary">THE FORTUNE</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Enterprise</p>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {[
              "Home",
              "About",
              "Businesses",
              "Agro Farm",
              "Projects",
              "Gallery",
              "Investment",
              "News",
              "Career",
              "Contact",
            ].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "")}`} className="transition hover:text-primary">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary shadow-lg shadow-yellow-400/20"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      <section id="home" className="relative isolate min-h-screen overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.25),transparent_35%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.6em] text-secondary">Bangladesh&apos;s Diversified Business Group</p>
            <h1 className="font-heading text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              THE FORTUNE ENTERPRISE
            </h1>
            <p className="mt-6 text-xl text-slate-200 sm:text-2xl">Honesty is the Greatest Asset</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#businesses" className="rounded-full bg-gold-gradient px-6 py-3 font-semibold text-primary transition hover:scale-105">
                Explore Businesses
              </a>
              <a href="#investment" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur">
                Become an Investor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">About Us</p>
            <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A trusted corporate family rooted in values and growth.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The Fortune Enterprise has grown through integrity, innovation, and disciplined expansion across agriculture, livestock, manufacturing, trade, transportation, and community development.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Integrity",
                "Innovation",
                "Agriculture",
                "Livestock",
                "Manufacturing",
                "Trade",
                "Transportation",
                "Community Development",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-accent px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary to-slate-900 p-6 text-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80" alt="Corporate team" className="h-72 w-full rounded-[1.5rem] object-cover" />
              <div className="glass-dark mt-6 rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary/20 p-3 text-secondary">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Trusted by communities</p>
                    <p className="text-xl font-semibold">40+ Years Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="businesses" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Our Businesses</p>
            <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A premium portfolio of modern enterprises.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            return (
              <motion.div key={business.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.45 }} whileHover={{ y: -6, scale: 1.02 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-2xl bg-gold-gradient p-3 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">{business.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">High-value operations crafted for stewardship and premium service.</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Why Choose Us</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Built on trust, discipline, and sustainable value.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-medium text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="agrofarm" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Agro Farm</p>
            <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A thriving ecosystem of livestock, farming, and care.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {farmHighlights.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-accent p-6 text-center">
              <p className="text-4xl font-semibold text-primary">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: "Dairy", image: "https://images.unsplash.com/photo-1500595046743-cd271d0c7f0e?auto=format&fit=crop&w=900&q=80" },
            { title: "Goat", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80" },
            { title: "Broiler", image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=900&q=80" },
            { title: "Fish", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=900&q=80" },
            { title: "Organic Farming", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80" },
            { title: "Veterinary Care", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80" },
          ].map((item) => (
            <motion.div key={item.title} whileHover={{ scale: 1.03 }} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-primary">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-accent p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Mega Project 2026-2028</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">A bold roadmap for sustainable growth.</h2>
          <div className="mt-10 space-y-6">
            {[
              ["Construction", "Building world-class infrastructure and operational facilities."],
              ["Livestock & Food Production", "Expanding dairy, poultry, and food processing capacity."],
              ["Employment & Investment", "Creating opportunities for workforce development and investor participation."],
            ].map(([title, text], index) => (
              <div key={title} className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-primary">{index + 1}</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investment" className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Investment</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Invest in Bangladesh&apos;s Future.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                The Fortune Enterprise creates compelling opportunities across strategic sectors with long-term value creation and disciplined execution.
              </p>
              <p className="mt-4 text-sm text-slate-400">Investment opportunities are subject to applicable agreements and business performance.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <HandCoins className="text-secondary" size={24} />
                <h3 className="font-heading text-2xl font-semibold">Partner with purpose</h3>
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3"><ShieldCheck size={18} className="text-secondary" /> Transparent partnership models</div>
                <div className="flex items-center gap-3"><Users size={18} className="text-secondary" /> Community-focused growth</div>
                <div className="flex items-center gap-3"><Landmark size={18} className="text-secondary" /> Strong local and regional opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Gallery</p>
          <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A glimpse of our operations and presence.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
          ].map((src, index) => (
            <motion.img key={src} whileHover={{ scale: 1.04 }} src={src} alt="Corporate gallery" className={`h-56 w-full rounded-[1.5rem] object-cover ${index % 2 === 0 ? "md:mt-8" : ""}`} />
          ))}
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">News & Updates</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Recent developments and milestones.</h2>
            <div className="mt-8 grid gap-5">
              {[
                ["New agro expansion initiative underway", "Strengthening procurement and processing capacity across key regions."],
                ["Strategic logistics partnership launched", "Improving distribution for retail and export operations."],
                ["Community investment program announced", "Supporting education and public welfare projects."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            {[
              ["“A true benchmark for purpose-driven leadership in Bangladesh.”", "— Board Member"],
              ["“Professional, reliable, and deeply committed to quality.”", "— Investor Partner"],
            ].map(([quote, author]) => (
              <div key={quote} className="rounded-[1.5rem] border border-secondary/30 bg-accent p-6">
                <p className="text-lg italic text-slate-700">{quote}</p>
                <p className="mt-4 font-semibold text-primary">{author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Contact</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Let&apos;s build something enduring together.</h2>
            <div className="mt-8 space-y-5 text-slate-600">
              <div className="flex items-start gap-3"><MapPin className="mt-1 text-secondary" size={20} /> <span>The Fortune Bilash, House #28/A, Road #10, Bachelor Gate, JU Ambagan, Savar, Dhaka-1344</span></div>
              <div className="flex items-center gap-3"><Phone className="text-secondary" size={20} /> <span>01736-460303</span></div>
              <div className="flex items-center gap-3"><MailIcon /> <span>info@thefortuneenterprise.com</span></div>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <iframe src="https://www.google.com/maps?q=Savar%20Dhaka&output=embed" className="h-64 w-full" loading="lazy" title="Map" />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-accent p-6">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none" placeholder="Name" />
                <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none" placeholder="Email" />
              </div>
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none" placeholder="Company" />
              <textarea className="min-h-36 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none" placeholder="Project details" />
              <button className="rounded-full bg-gold-gradient px-6 py-3 font-semibold text-primary">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-heading text-xl font-semibold">The Fortune Enterprise</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">A diversified group committed to ethical growth, economic contribution, and community progress.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-secondary">About</a></li>
              <li><a href="#businesses" className="hover:text-secondary">Businesses</a></li>
              <li><a href="#investment" className="hover:text-secondary">Investment</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">Businesses</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Agro Farm</li>
              <li>Transport Service</li>
              <li>Export House</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">Socials</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-sm text-slate-400 lg:px-8">
          © 2024 The Fortune Enterprise
        </div>
      </footer>
    </main>
  );
}

function MailIcon() {
  return <ArrowRight className="text-secondary" size={20} />;
}
