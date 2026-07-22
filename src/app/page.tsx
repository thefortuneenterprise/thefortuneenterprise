import Hero from "@/components/Hero";
import About from "@/components/About";
import AgroFarm from "@/components/AgroFarm";
import Gallery from "@/components/Gallery";

const upcomingVentures = [
  "The Fortune Knit & Denim Fashion",
  "The Fortune Medicine Corner",
  "The Fortune Tour & Travels",
  "The Fortune Super Shop",
  "The Fortune Transport Service",
  "The Fortune Gold & Diamond House",
  "The Fortune Export House",
  "The Fortune Automobile",
  "The Fortune Restaurant & Cafe",
];

const products = [
  { title: "Fresh Milk", description: "Daily fresh cow milk collected hygienically and available in Dhaka on pre-order basis.", accent: "Fresh Milk" },
  { title: "Premium Beef", description: "Farm-raised cattle with fresh halal processing and Dhaka home delivery.", accent: "Pre-order" },
  { title: "Premium Goat", description: "Healthy farm goat with fresh halal processing available on pre-order.", accent: "Halal" },
  { title: "Poultry", description: "Deshi chicken, duck, and eggs with upcoming availability in selected markets.", accent: "Coming Soon" },
];

const whyChooseUs = [
  "Real Asset Backed",
  "Shariah-Compliant Mudarabah",
  "Farm Visit Available",
  "Monthly Report",
  "Photo & Video Update",
  "Transparent Operations",
  "Experienced Management",
];

const faqs = [
  { question: "Is profit guaranteed?", answer: "No. Profit depends on actual business performance and the agreed Mudarabah structure." },
  { question: "Can I visit the farm?", answer: "Yes. Prior appointment is required for visits and investor meetings." },
  { question: "Can I invest from abroad?", answer: "Yes. Documentation and verification are required for international investors." },
  { question: "How are profits shared?", answer: "Profits are distributed according to the agreed Mudarabah ratio and the actual business results." },
];

const marketOpportunity = [
  { sector: "Dairy", demand: "Very High", potential: "Stable daily cash flow" },
  { sector: "Beef Cattle", demand: "Very High", potential: "Strong Eid-ul-Adha and meat demand" },
  { sector: "Goat", demand: "High", potential: "Premium meat market" },
  { sector: "Deshi Chicken", demand: "High", potential: "Fast production cycle" },
  { sector: "Duck", demand: "Medium-High", potential: "Strong rural and seasonal demand" },
  { sector: "Pigeon", demand: "Niche", potential: "Specialized breeding market" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AgroFarm />

      <section id="investment" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Investment Programs</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Shariah-compliant Mudarabah investment opportunities focused on real farm operations.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Project 1</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-primary">Dairy Investment (Mudarabah)</h3>
            <div className="mt-6 space-y-4 text-slate-600">
              <div><span className="font-semibold text-primary">Minimum Investment:</span> ৳100,000</div>
              <div><span className="font-semibold text-primary">Duration:</span> 12 Months</div>
              <div><span className="font-semibold text-primary">Profit Distribution:</span> Monthly</div>
              <div><span className="font-semibold text-primary">Expected Monthly ROI:</span> 3.0%–3.5%</div>
              <div><span className="font-semibold text-primary">Monthly Profit Range:</span> ৳3,000–3,500</div>
              <div><span className="font-semibold text-primary">Estimated 12-Month Gain:</span> 36%–42% (projection)</div>
            </div>
            <p className="mt-6 rounded-2xl border border-secondary/20 bg-accent p-4 text-sm text-slate-700">Structured around dairy cattle operations with monthly profit shares based on actual milk production and market sales.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Project 2</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-primary">Black Bengal Goat Investment</h3>
            <div className="mt-6 space-y-4 text-slate-600">
              <div><span className="font-semibold text-primary">Minimum Investment:</span> ৳25,000</div>
              <div><span className="font-semibold text-primary">Duration:</span> 6 Months</div>
              <div><span className="font-semibold text-primary">Expected Monthly Profit Share:</span> ৳800–2,000</div>
              <div><span className="font-semibold text-primary">Approximate Monthly ROI:</span> 3.2%–8.0%</div>
              <div><span className="font-semibold text-primary">Potential 6-Month Return:</span> 19%–48% (estimate)</div>
            </div>
            <p className="mt-6 rounded-2xl border border-secondary/20 bg-accent p-4 text-sm text-slate-700">Premium Black Bengal goat operations are managed under Mudarabah with transparent reporting and contract-level protection. Stamped agreements are available at the investor’s request and cost.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Project 3</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-primary">Beef Fattening Investment</h3>
            <div className="mt-6 space-y-4 text-slate-600">
              <div><span className="font-semibold text-primary">Minimum Investment:</span> ৳100,000</div>
              <div><span className="font-semibold text-primary">Duration:</span> 4 Months</div>
              <div><span className="font-semibold text-primary">Profit Payment:</span> Project end or contract terms</div>
              <div><span className="font-semibold text-primary">Expected Monthly Profit:</span> 2.5%–3.5%</div>
              <div><span className="font-semibold text-primary">Monthly Profit Range:</span> ৳2,500–3,500</div>
              <div><span className="font-semibold text-primary">Estimated 4-Month Gain:</span> 10%–14% (projection)</div>
            </div>
            <p className="mt-6 rounded-2xl border border-secondary/20 bg-accent p-4 text-sm text-slate-700">Beef fattening is driven by seasonal demand, planned feed management, and market-based sale pricing to maximize halal meat value.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-primary p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Project 4</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold">Goat Rearing Investment</h3>
            <div className="mt-6 space-y-4 text-slate-200">
              <div><span className="font-semibold text-white">Minimum Investment:</span> ৳50,000</div>
              <div><span className="font-semibold text-white">Duration:</span> 6 Months</div>
              <div><span className="font-semibold text-white">Profit Payment:</span> Project end or contract terms</div>
              <div><span className="font-semibold text-white">Expected Monthly ROI:</span> 3.0%–4.0%</div>
              <div><span className="font-semibold text-white">Estimated 6-Month Gain:</span> 18%–24% (projection)</div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300">Premium goat rearing uses planned nutrition and seasonal market timing to position halal meat for reliable demand.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Project 5</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-primary">Ox Cow Investment</h3>
            <div className="mt-6 space-y-4 text-slate-600">
              <div><span className="font-semibold text-primary">Minimum Investment:</span> ৳100,000</div>
              <div><span className="font-semibold text-primary">Duration:</span> 12 Months</div>
              <div><span className="font-semibold text-primary">Profit Distribution:</span> Monthly</div>
              <div><span className="font-semibold text-primary">Expected Monthly ROI:</span> 3.0%–3.5%</div>
              <div><span className="font-semibold text-primary">Monthly Profit Range:</span> ৳3,000–3,500</div>
              <div><span className="font-semibold text-primary">Estimated 12-Month Gain:</span> 36%–42% (projection)</div>
            </div>
            <p className="mt-6 rounded-2xl border border-secondary/20 bg-accent p-4 text-sm text-slate-700">Ox cow operations are structured for stable monthly profit distribution through planned feeding, health care, and halal market access.</p>
          </div>
        </div>
        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-accent p-6 text-sm text-slate-700">
          <strong>Legal Note:</strong> Projected returns are estimates only and not guaranteed. Profit depends on actual business results, market conditions, and the terms of the applicable Mudarabah agreement.
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Products</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Premium farm products backed by quality control and responsible sourcing.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{item.accent}</p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Farm Gallery</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">A premium visual view of farm operations and livestock care.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1500595046743-cd271d0c7f0e?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
          ].map((src, idx) => (
            <img key={src} src={src} alt={`Farm view ${idx + 1}`} className={`h-56 w-full rounded-[1.5rem] object-cover ${idx % 2 === 0 ? "md:mt-8" : ""}`} />
          ))}
        </div>
      </section>

      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Why Choose Us</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Built around discipline, real asset value, and transparent operations.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-medium text-slate-100">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Market Opportunity</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Bangladesh’s rising demand for milk, meat, and livestock products supports long-term sector potential.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {marketOpportunity.map((item) => (
            <div key={item.sector} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-primary">{item.sector}</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Demand: {item.demand}</p>
              <p className="mt-2 text-slate-600">{item.potential}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">FAQs</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Professional answers for investors, partners, and visitors.</h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-primary">{item.question}</h3>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Upcoming Ventures</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Other enterprise verticals will be introduced as the group expands.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {upcomingVentures.map((name) => (
            <div key={name} className="rounded-[1.5rem] border border-slate-200 bg-accent p-6 text-sm font-medium text-slate-700">{name}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Contact</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">Let’s discuss farm visits, investments, and partnership opportunities.</h2>
            <div className="mt-8 space-y-5 text-slate-600">
              <div>The Fortune Bilash, House #28/A, Road #10, Bachelor Gate, JU Ambagan, Savar, Dhaka-1344</div>
              <div>Phone: 01736-460303 | 01316-601443</div>
              <div>WhatsApp: 01736-460303</div>
              <div>Email: info@thefortuneenterprise.com.bd</div>
              <div>Business Hours: Monday–Saturday, 9:00 AM – 6:00 PM</div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/prospectus.pdf" className="rounded-full bg-gold-gradient px-6 py-3 font-semibold text-primary">Download Investment Prospectus</a>
              <a href="https://wa.me/8801736460303" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-primary">WhatsApp Inquiry</a>
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
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none" placeholder="Phone" />
              <textarea className="min-h-36 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none" placeholder="Investment or farm visit inquiry" />
              <button className="rounded-full bg-gold-gradient px-6 py-3 font-semibold text-primary">Request Consultation</button>
            </form>
          </div>
        </div>
      </section>

      <a href="https://wa.me/8801736460303" className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg">WhatsApp</a>
    </>
  );
}
