export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold">The Fortune Enterprise</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">The Fortune Agro Farm focused on ethical livestock and agriculture growth, transparent investment, and dependable operations.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#investment" className="hover:text-secondary">Investment Programs</a></li>
            <li><a href="#products" className="hover:text-secondary">Products</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Savar, Dhaka</li>
            <li>01736-460303</li>
            <li>info@thefortuneenterprise.com.bd</li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">Socials</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Facebook</li>
            <li>WhatsApp</li>
            <li>Google Maps</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-sm text-slate-400 lg:px-8">© 2024 The Fortune Enterprise</div>
    </footer>
  );
}
