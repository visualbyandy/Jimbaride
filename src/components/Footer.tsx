import { Bike, Instagram, Facebook, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-24 border-t border-white/5 bg-jimba-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <Bike className="text-jimba-foam w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-2xl font-brand leading-none">JIMBARIDE</span>
                <span className="text-[8px] font-light tracking-[0.4em] text-white/40 ml-0.5 mt-1">SINCE 2017</span>
              </div>
            </div>
            <p className="text-jimba-foam/40 max-w-sm leading-relaxed mb-10 text-lg">
              Partner sewa motor terpercaya di Jimbaran. Kami mengedepankan kualitas unit dan kenyamanan pelanggan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-black italic text-2xl mb-10 uppercase tracking-tight">Navigasi</h4>
            <ul className="space-y-5 text-sm font-bold text-jimba-foam/40">
              <li><Link to="/" className="hover:text-jimba-foam transition-colors uppercase tracking-widest">Home</Link></li>
              <li><Link to="/fleet" className="hover:text-jimba-foam transition-colors uppercase tracking-widest">Fleet Collection</Link></li>
              <li><Link to="/terms" className="hover:text-jimba-foam transition-colors uppercase tracking-widest">Terms & Conditions</Link></li>
              <li><a href="#service" className="hover:text-jimba-foam transition-colors uppercase tracking-widest">Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black italic text-2xl mb-10 uppercase tracking-tight">Kontak</h4>
            <ul className="space-y-5 text-sm font-bold text-jimba-foam/40">
              <li className="flex items-start gap-4 uppercase tracking-widest text-[11px]"><MapPin size={18} className="shrink-0" /> Jimbaran, Kuta Selatan, Bali</li>
              <li className="flex items-center gap-4 tracking-widest text-[11px]"><MessageCircle size={18} /> +62 812 3456 7890</li>
              <li className="flex items-center gap-4 tracking-widest text-[11px]"><Clock size={18} /> SETIAP HARI 08:00 - 20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-[0.4em] opacity-30">
          <p>© 2026 JIMBARIDE RENTAL BALI. SEMUA HAK DILINDUNGI.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">PRIVACY</span>
            <Link to="/terms" className="hover:text-white cursor-pointer transition-colors">TERMS</Link>
            <span className="hover:text-white cursor-pointer transition-colors">COOKIES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
