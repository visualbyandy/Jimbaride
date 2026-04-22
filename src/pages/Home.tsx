import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ShieldCheck, Clock, MapPin, CreditCard, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GALLERY_IMAGES = [
  "https://i.pinimg.com/736x/ba/0f/3f/ba0f3fa8b75caaa430f251c17fe1c0e5.jpg",
  "https://i.pinimg.com/736x/d5/03/3f/d5033f264d6ed8c6fc7dec1d7cf749ef.jpg",
  "https://i.pinimg.com/736x/c0/64/f2/c064f22655041a2de4cd5ae8cce62830.jpg",
  "https://i.pinimg.com/736x/58/89/87/588987dfa5b185fc93945d450a921450.jpg",
  "https://i.pinimg.com/1200x/9a/c9/8c/9ac98c91ba1d99b36ab2cdaf285a0b4e.jpg",
  "https://i.pinimg.com/736x/e2/c5/39/e2c5396782c1f24596c6c0eb3afb6d2c.jpg",
  "https://i.pinimg.com/1200x/5a/0c/ba/5a0cba6383562e37886381b4afd775a0.jpg",
  "https://i.pinimg.com/736x/7a/c7/52/7ac75207f4a05ce2fd6b95dafc5d46a8.jpg",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/6281234567890?text=Halo Jimbaride, saya ingin menyewa motor.`, '_blank');
  };

  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-jimba-deep/40 via-jimba-deep/70 to-jimba-deep z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop" 
            alt="Jimbaran Bali Coast" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 mt-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-[0.3em] mb-10">
              <span className="w-2 h-2 rounded-full bg-jimba-foam animate-pulse" />
              Sewa Motor Jimbaran No. 1
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
              Ride the <br />
              <span className="text-jimba-accent not-italic">Limit.</span>
            </h1>
            <p className="text-lg text-jimba-foam/70 mb-10 max-w-lg leading-relaxed font-light">
              Jelajahi tebing Jimbaran dan pantai emas Bali dengan armada premium kami. Motor baru, servis rutin, antar-jemput gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={handleWhatsApp}
                className="btn-premium bg-jimba-foam text-jimba-deep flex items-center justify-center gap-2 group"
              >
                MULAI SEWA <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/fleet"
                className="btn-premium border-white/20 text-jimba-foam flex items-center justify-center transition-all bg-white/5 hover:bg-white/10"
              >
                LIHAT ARMADA
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* Fade Carousel Section */}
      <div className="pt-20 pb-0 bg-jimba-deep">
        <div className="max-w-lg mx-auto px-6">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={GALLERY_IMAGES[currentImageIndex]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-jimba-deep/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Progress Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {GALLERY_IMAGES.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-8 bg-jimba-accent' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="service" className="pt-20 pb-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl italic mb-6 uppercase tracking-tighter">Premium Service.</h2>
            <div className="w-24 h-1 bg-jimba-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: 'Full Insurance', desc: 'Berkendara tenang dengan cakupan asuransi dasar kami.' },
              { icon: <Clock />, title: '24/7 Delivery', desc: 'Antar-jemput ke hotel, villa, atau Bandara Ngurah Rai.' },
              { icon: <MapPin />, title: 'Area Jimbaran', desc: "Spesialis area Jimbaran, Uluwatu, dan sekitarnya." },
              { icon: <CreditCard />, title: 'Harga Jujur', desc: 'Tanpa biaya tersembunyi. Harga nett termasuk 2 helm.' }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="service-card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-jimba-deep/5 flex items-center justify-center mb-8 group-hover:bg-jimba-deep group-hover:text-jimba-foam transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-black mb-4 italic uppercase tracking-tight">{service.title}</h3>
                <p className="text-sm text-jimba-deep/60 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-jimba-foam z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-jimba-deep">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-black mb-12 leading-none tracking-tighter italic uppercase">
              Siap Gas <br />Di Jimbaran?
            </h2>
            <p className="max-w-2xl mx-auto text-jimba-deep/60 mb-16 text-xl leading-relaxed font-medium">
              Booking instan dalam 2 menit via WhatsApp. Gratis antar-jemput ke seluruh area Jimbaran, Uluwatu, dan Nusa Dua.
            </p>
            <div className="flex flex-col gap-6 items-center">
              <button 
                onClick={handleWhatsApp}
                className="px-16 py-6 bg-jimba-deep text-jimba-foam rounded-full text-2xl font-black flex items-center gap-4 mx-auto hover:bg-jimba-foam hover:text-jimba-deep transition-all hover:scale-105 shadow-2xl shadow-jimba-deep/40 group uppercase tracking-widest"
              >
                CHAT WHATSAPP <MessageCircle className="group-hover:rotate-12 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.open('https://maps.app.goo.gl/cE51Y5LY64a2Vq6v6', '_blank')}
                className="px-16 py-6 border-4 border-jimba-deep text-jimba-deep rounded-full text-2xl font-black flex items-center gap-4 mx-auto hover:bg-jimba-deep hover:text-jimba-foam transition-all hover:scale-105 group uppercase tracking-widest"
              >
                LOCATION <MapPin className="group-hover:animate-bounce transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
