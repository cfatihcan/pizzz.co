import React from 'react';
import { Pizza, Coffee, CakeSlice, MapPin } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-white">

      {/* HEADER / NAVBAR */}
      <header className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col items-start">
            {/* Logo Text - Gerçek projede img etiketi ile logonuzu ekleyebilirsiniz */}
            <h1 className="text-4xl font-black italic tracking-tighter text-white">
              Pi<span className="text-orange-500">ZZZ</span>
            </h1>
            <span className="text-[10px] tracking-widest text-orange-400 font-bold uppercase">New York Slice Pizza</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#menu" className="hover:text-orange-500 transition-colors">Menü</a>
            <a href="#hakkimizda" className="hover:text-orange-500 transition-colors">Hakkımızda</a>
            <a href="#iletisim" className="hover:text-orange-500 transition-colors">İletişim</a>
          </nav>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)]">
            Sipariş Ver
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
        {/* Arka plan bulanıklık dairesi */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* Sol Logo - Sadece masaüstünde, hover efektli ve simetrik */}
<img
          src="/logo.jpeg"
          alt="Pizza Logo Sol"
          className="absolute top-1/2 left-8 md:left-12 lg:left-16 -translate-y-1/2 hidden md:block w-48 h-auto z-20 transform hover:scale-110 hover:opacity-90 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
        />

        {/* Sağ Logo - Sadece masaüstünde, hover efektli, simetrik ve daha büyük */}
        <img
          src="/logo.jpeg"
          alt="Pizza Logo Sağ"
          className="absolute top-1/2 right-8 md:right-12 lg:right-16 -translate-y-1/2 hidden md:block w-48 h-auto z-20 transform hover:scale-110 hover:opacity-90 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
        />

        {/* Ana İçerik */}
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight z-10 relative">
          YENİ NESİL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            PİZZA DENEYİMİ
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl z-10 relative font-light">
          Odun ateşinde pişen, ince hamurlu gerçek New York dilim pizzası.
          Sıcak, taze ve seni bekliyor!
        </p>

        {/* Neon Tabela Efekti - Dükkandaki neon yazıdan ilhamla */}
        <div className="border border-orange-500/30 bg-orange-950/20 px-8 py-4 rounded-2xl z-10 relative shadow-[0_0_30px_rgba(249,115,22,0.15)]">
          <p className="text-orange-400 font-mono text-lg md:text-xl font-semibold tracking-widest uppercase" style={{ textShadow: '0 0 10px rgba(249,115,22,0.8)' }}>
            Good Pizza • Good Mood • Good Times
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6">
              <Pizza className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Pizza Dilim</h3>
              <p className="text-gray-400">Devasa New York dilimleri, birinci sınıf malzemeler ve eriyen harika peynir.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Coffee className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Kahve & İçecek</h3>
              <p className="text-gray-400">Pizzadan sonra espresso, latte veya taze demlenmiş bir Türk kahvesi.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <CakeSlice className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Tatlı Kapanış</h3>
              <p className="text-gray-400">San Sebastian, Tiramisu ve Cheesecake ile lezzeti zirvede bırakın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section id="menu" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Lezzet Bizim İşimiz</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Pizzalar */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-orange-400 flex items-center border-b border-gray-800 pb-4">
                <Pizza className="w-6 h-6 mr-3" /> PİZZALAR
              </h3>
              <ul className="space-y-6">
                {[
                  { name: 'Margherita', price: '230 ₺', desc: 'Domates sos, taze mozzarella, fesleğen' },
                  { name: 'Sucuklu', price: '260 ₺', desc: 'Domates sos, mozzarella, özel kasap sucuk' },
                  { name: 'Karışık', price: '260 ₺', desc: 'Sucuk, sosis, mantar, mısır, zeytin' },
                  { name: 'Vejetaryen', price: '240 ₺', desc: 'Mevsim sebzeleri, mantar, zeytin' },
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-lg font-bold text-white tracking-wide">{item.name}</span>
                      <span className="text-orange-400 font-bold">{item.price}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tatlılar ve Kahveler */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-orange-400 flex items-center border-b border-gray-800 pb-4">
                <CakeSlice className="w-6 h-6 mr-3" /> TATLILAR & KAHVE
              </h3>
              <ul className="space-y-6">
                {[
                  { name: 'San Sebastian', price: '130 ₺', desc: 'Akışkan iç dokusuyla' },
                  { name: 'Tiramisu', price: '120 ₺', desc: 'İtalyan usulü, mascarpone peynirli' },
                  { name: 'Americano', price: '45 ₺', desc: 'Taze çekilmiş espresso çekirdekleriyle' },
                  { name: 'Latte / Cappuccino', price: '50 ₺', desc: 'İpeksi süt köpüğü ile' },
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-lg font-bold text-white tracking-wide">{item.name}</span>
                      <span className="text-orange-400 font-bold">{item.price}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div>
            <h1 className="text-3xl font-black italic tracking-tighter text-white mb-2">
              Pi<span className="text-orange-500">ZZZ</span>
            </h1>
            <p className="text-gray-500 text-sm">New York tarzı dilim pizza ve nitelikli kahve deneyimi.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Bize Ulaşın</h4>
            <p className="text-gray-400 flex items-center mb-2"><MapPin className="w-4 h-4 mr-2 text-orange-500" /> Dükkan Adresiniz, Şehir</p>
            {/* <p className="text-gray-400 flex items-center"><Instagram className="w-4 h-4 mr-2 text-orange-500"/> @pizzz_cafe</p> */}
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Çalışma Saatleri</h4>
            <p className="text-gray-400">Pzt - Paz: 11:00 - 23:00</p>
          </div>
        </div>
        {/* Dekoratif dev pizza ikonu */}
        <Pizza className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.02] -rotate-12 pointer-events-none" />
      </footer>
    </div>
  );
}