export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* ================= HEADER Navbar ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h2 className="text-xl font-semibold tracking-tight text-[#BA2C2C]">
            Mizan Textile
          </h2>

          <nav className="flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-[#BA2C2C] transition">
              Services
            </a>
            <a href="#about" className="hover:text-[#BA2C2C] transition">
              About
            </a>
            <a href="#products" className="hover:text-[#BA2C2C] transition">
              Products
            </a>
            <a href="#references" className="hover:text-[#BA2C2C] transition">
              References
            </a>
            <a href="#contact" className="hover:text-[#BA2C2C] transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // privremena slika – zamenićemo Mizan fotkom kasnije
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#BA2C2C]/20 to-black/60" />

        <div className="relative text-center text-white px-6 max-w-3xl mt-16">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            Premium Underwear Manufacturing
          </h1>

          <p className="text-lg md:text-2xl mt-6 opacity-95 font-light">
            OEM & Private Label — Cotton • Lycra • EU Grade Production
          </p>

          <div className="flex justify-center gap-5 mt-10">
            <a
              href="#contact"
              className="px-10 py-3 bg-[#BA2C2C] hover:bg-[#992224] rounded-md text-lg font-medium shadow-xl transition"
            >
              Request Offer
            </a>
            <a
              href="#products"
              className="px-10 py-3 border border-white/85 hover:bg-white hover:text-[#BA2C2C] rounded-md text-lg transition shadow-xl"
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="max-w-7xl mx-auto px-6 pt-36 pb-28">
        <h2 className="text-4xl font-bold text-center text-[#BA2C2C]">
          Manufacturing Services
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3 text-lg">
          Full-cycle underwear manufacturing — cutting, sewing, branding,
          packaging & export.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mt-32">
          <div className="p-8 border rounded-xl hover:shadow-xl transition text-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              stroke="#BA2C2C"
              fill="none"
              strokeWidth="1.6"
              className="mx-auto mb-5"
            >
              <path d="M4 4h16v2H4zM4 18h16v2H4zM6 6h12v12H6z" />
            </svg>
            <h3 className="text-xl font-semibold">OEM Underwear Production</h3>
            <p className="text-gray-600 text-sm mt-3">
              Briefs, boxers, undershirts, sleepwear.
            </p>
          </div>

          <div className="p-8 border rounded-xl hover:shadow-xl transition text-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              stroke="#BA2C2C"
              fill="none"
              strokeWidth="1.6"
              className="mx-auto mb-5"
            >
              <path d="M4 4h12l4 4v12H4z" />
              <path d="M9 10h6M9 14h6" />
            </svg>
            <h3 className="text-xl font-semibold">Private Label Branding</h3>
            <p className="text-gray-600 text-sm mt-3">
              Labels, packaging, white-label ready.
            </p>
          </div>

          <div className="p-8 border rounded-xl hover:shadow-xl transition text-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              stroke="#BA2C2C"
              fill="none"
              strokeWidth="1.6"
              className="mx-auto mb-5"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M7 12h10M12 7v10" />
            </svg>
            <h3 className="text-xl font-semibold">Fabric & Quality Control</h3>
            <p className="text-gray-600 text-sm mt-3">
              Cotton • Lycra • Modal • verified batches.
            </p>
          </div>

          <div className="p-8 border rounded-xl hover:shadow-xl transition text-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              stroke="#BA2C2C"
              fill="none"
              strokeWidth="1.6"
              className="mx-auto mb-5"
            >
              <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
              <path d="M3 7l9 5 9-5" />
            </svg>
            <h3 className="text-xl font-semibold">Packaging & Export</h3>
            <p className="text-gray-600 text-sm mt-3">
              Retail-ready, barcodes, EU shipping.
            </p>
          </div>
        </div>
      </section>

{/* ================= ABOUT SECTION ================= */}
<section id="about" className="bg-[#f8f8f8] py-32">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* LEFT — COMPANY STORY */}
    <div className="flex flex-col justify-between h-full">
      <div>
        <span className="block w-14 h-[3px] bg-[#BA2C2C] mb-6"></span>

        <h2 className="text-4xl font-bold text-[#BA2C2C] leading-tight mb-6">
          About Mizan Textile
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Mizan Textile supplies EU fashion brands with OEM & Private Label underwear, 
          powered by certified cotton, Lycra and modal fabric sourcing. With multi-site 
          production, verified QC workflows and export-ready finishing, we deliver 
          scalable manufacturing built for European volume standards.
        </p>

        {/* Strong production values */}
        <ul className="space-y-2 text-gray-800 font-medium text-[15px]">
          <li>• 15+ years industry experience</li>
          <li>• OEM & Private Label underwear</li>
          <li>• EU-standard QC & batch verification</li>
          <li>• Scalable output for high-volume brands</li>
        </ul>
      </div>

      <a
        href="#contact"
        className="mt-10 w-fit px-10 py-3 bg-[#BA2C2C] hover:bg-[#992224] 
        text-white font-medium rounded-md shadow-md transition"
      >
        Contact for Production Inquiry
      </a>
    </div>


    {/* RIGHT — FACILITIES + CERTIFICATIONS (BALANCED HEIGHT) */}
    <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-between h-full">

      {/* LOCATIONS */}
      <div>
        <p className="text-[#BA2C2C] font-semibold text-lg mb-6">
          Production Facilities • Serbia
        </p>

        <div className="grid grid-cols-2 gap-y-5 text-[15px] text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-[#BA2C2C] text-lg">📍</span>
            <p><strong>Novi Pazar (HQ)</strong><br/><span className="text-xs opacity-80">Main production hub</span></p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-[#BA2C2C] text-lg">📍</span>
            <p><strong>Sjenica</strong><br/><span className="text-xs opacity-80">Stitching • Finishing</span></p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-[#BA2C2C] text-lg">📍</span>
            <p><strong>Ivanjica</strong><br/><span className="text-xs opacity-80">Knitwear & Underwear Lines</span></p>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-[#BA2C2C] text-lg">📍</span>
            <p><strong>Zrenjanin</strong><br/><span className="text-xs opacity-80">Packaging & Export Dispatch</span></p>
          </div>
        </div>
      </div>


      {/* CERTIFICATIONS BLOCK — hybrid style */}
      <div className="mt-10 border-t pt-8">
        <p className="text-sm font-semibold tracking-wide text-gray-600 mb-5">
          Certifications & Compliance
        </p>

        <div className="grid grid-cols-2 gap-4 text-[14px] text-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-[#BA2C2C] text-lg">🔰</span> OEKO-TEX® Standard 100
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#BA2C2C] text-lg">🔰</span> ISO 9001 Certified
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#BA2C2C] text-lg">🔰</span> BSCI Compliant Manufacturing
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#BA2C2C] text-lg">🔰</span> REACH-Approved Fabrics
          </div>
        </div>
      </div>

    </div>
  </div>
</section>









      {/* ================= PRODUCTS SECTION ================= */}
      <section id="products" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-24">
            <span className="block w-14 h-[3px] bg-[#BA2C2C] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#BA2C2C]">
              Product Portfolio
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
              Core underwear categories manufactured for EU brands — OEM &
              private label.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mb-20">
            {/* Ovdje su placeholderi – sve radi isto kao ranije */}
            {/* 6 kartica */}
            {/* 1 */}
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div
                className="h-64 bg-cover bg-center group-hover:scale-[1.05] transition-transform"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#BA2C2C]">
                  Men’s Cotton Briefs
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  100% cotton, reinforced elastic waist
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div
                className="h-64 bg-cover bg-center group-hover:scale-[1.05] transition-transform"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1595435934244-29c3fe4c68f9?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#BA2C2C]">
                  Men’s Boxer Shorts
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Soft cotton–Lycra blend for comfort stretch
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div
                className="h-64 bg-cover bg-center group-hover:scale-[1.05] transition-transform"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1627591082901-163cd5a93c59?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#BA2C2C]">
                  Women’s Underwear
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Soft-touch waistbands • seamless edges
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div
                className="h-64 bg-cover bg-center group-hover:scale-[1.05] transition-transform"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1626127653168-8b614232e9ae?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#BA2C2C]">
                  Cotton Undershirts
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lightweight breathable knit fabric
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div
                className="h-64 bg-cover bg-center group-hover:scale-[1.05] transition-transform"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#BA2C2C]">
                  Modal Sleepwear
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Ultra-soft drape, durable long-wear
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div
                className="h-64 bg-cover bg-center group-hover:scale-[1.05] transition-transform"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1624124680565-08d4f6c747c5?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#BA2C2C]">
                  Sports Performance Line
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Sweat-wicking stretch microfibers
                </p>
              </div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="/catalogue.pdf"
              className="px-10 py-3 rounded-md bg-[#BA2C2C] text-white font-medium hover:bg-[#8f1f21] transition shadow-md"
            >
              Download Catalogue
            </a>

            <a
              href="https://mizan.shop"
              className="px-10 py-3 rounded-md border border-[#BA2C2C] text-[#BA2C2C] font-medium hover:bg-[#BA2C2C] hover:text-white transition shadow-md"
            >
              Visit mizan.shop
            </a>
          </div>
        </div>
      </section>

      {/* ================= REFERENCES / TRUSTED BY ================= */}
      <section id="references" className="py-36 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-gray-500 tracking-[0.18em] uppercase">
            Trusted by European apparel brands
          </p>
          <span className="block w-10 h-[2px] bg-[#BA2C2C] mx-auto mt-4 mb-16" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
            <div className="flex items-center justify-center h-12 rounded-md border border-gray-200 bg-white text-xs font-semibold text-gray-500">
              Brand One
            </div>
            <div className="flex items-center justify-center h-12 rounded-md border border-gray-200 bg-white text-xs font-semibold text-gray-500">
              Brand Two
            </div>
            <div className="flex items-center justify-center h-12 rounded-md border border-gray-200 bg-white text-xs font-semibold text-gray-500">
              Brand Three
            </div>
            <div className="flex items-center justify-center h-12 rounded-md border border-gray-200 bg-white text-xs font-semibold text-gray-500">
              Brand Four
            </div>
            <div className="flex items-center justify-center h-12 rounded-md border border-gray-200 bg-white text-xs font-semibold text-gray-500">
              Brand Five
            </div>
            <div className="flex items-center justify-center h-12 rounded-md border border-gray-200 bg-white text-xs font-semibold text-gray-500">
              Brand Six
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
<section id="contact" className="py-28 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-6">

    {/* LEFT — FORM */}
    <div>
      <h2 className="text-4xl font-bold text-[#BA2C2C] mb-4">
        Contact & Production Inquiry
      </h2>

      <p className="text-gray-600 mb-10 max-w-lg">
        For OEM / Private Label requests, pricing, capacity or fabrics —
        send us a message & expect response within 24–48h.
      </p>

      <form className="space-y-5">
        <input type="text" placeholder="Full Name"
          className="w-full p-3 border rounded-md focus:ring-2 ring-[#BA2C2C]" />
        <input type="email" placeholder="Email"
          className="w-full p-3 border rounded-md focus:ring-2 ring-[#BA2C2C]" />
        <input type="text" placeholder="Company (optional)"
          className="w-full p-3 border rounded-md focus:ring-2 ring-[#BA2C2C]" />
        <textarea rows={6} placeholder="Production details, order size, fabrics..."
          className="w-full p-3 border rounded-md focus:ring-2 ring-[#BA2C2C]" />

        <button
          className="px-12 py-3 bg-[#BA2C2C] text-white font-medium rounded-md 
                     hover:bg-[#8f1f21] transition shadow-lg">
          Send Inquiry
        </button>
      </form>
    </div>


    {/* RIGHT — CONTACT INFO + MAP balanced */}
    <div className="flex flex-col justify-between">

      {/* Contact */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Business Contact</h3>
        <p className="text-gray-700 leading-7">
          <strong>Email:</strong> info@mizantextile.com <br/>
          <strong>Phone:</strong> +381 XX XXX XXX <br/>
          <strong>Production:</strong> orders@mizantextile.com
        </p>
      </div>

      {/* MAP — taller to match left column height */}
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=20.507%2C43.140%2C20.580%2C43.170&layer=mapnik&marker=43.155%2C20.545"
        className="w-full h-[420px] rounded-xl shadow-md border"
      />
    </div>

  </div>
</section>
{/* ================= FOOTER ================= */}
<footer className="w-full bg-[#f8f8f8] border-t border-gray-200 mt-24">
  <div className="max-w-6xl mx-auto py-16 px-6 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Brand/About */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Mizan Textile</h3>
      <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
        OEM & Private Label underwear manufacturing for European apparel brands.  
        Certified fabrics • EU-grade QC • High-volume scalable production in Serbia.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="text-sm font-semibold text-gray-800 mb-4 tracking-wide uppercase">Navigation</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#services" className="hover:text-[#d64545] transition">Services</a></li>
        <li><a href="#products" className="hover:text-[#d64545] transition">Products</a></li>
        <li><a href="#references" className="hover:text-[#d64545] transition">References</a></li>
        <li><a href="#about" className="hover:text-[#d64545] transition">About</a></li>
        <li><a href="#contact" className="hover:text-[#d64545] transition">Contact</a></li>
      </ul>
    </div>

    {/* Legal & CTA */}
    <div>
      <h4 className="text-sm font-semibold text-gray-800 mb-4 tracking-wide uppercase">Legal</h4>
      <ul className="space-y-2 text-sm text-gray-600 mb-6">
        <li><a href="/privacy-policy" className="hover:text-[#d64545] transition">Privacy Policy</a></li>
        <li><a href="/legal" className="hover:text-[#d64545] transition">Legal Notice / Imprint</a></li>
      </ul>

      <a 
        href="#contact" 
        className="inline-block bg-[#d64545] text-white px-5 py-2.5 text-sm rounded shadow-sm hover:opacity-90 transition"
      >
        Production Inquiry →
      </a>
    </div>
  </div>

  <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Mizan Textile. All rights reserved.
  </div>
</footer>




    </main>
  );


}




