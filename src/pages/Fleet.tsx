import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const FLEET = [
  {
    id: 'scoopy',
    name: 'Honda Scoopy Prestige',
    type: 'Classic Modern',
    price: 'Rp 80.000',
    images: [
      'https://i.pinimg.com/736x/cb/b6/c1/cbb6c1ddd6c59ec18284278d2020ab06.jpg',
      'https://i.pinimg.com/736x/68/7a/a7/687aa7ce30ba0824dc61dd208e7e1749.jpg'
    ],
    features: ['Retro Design', 'Lightweight', 'Anti-theft System'],
    rating: 4.8
  },
  {
    id: 'nmax',
    name: 'Yamaha NMAX 155',
    type: 'Premium Comfort',
    price: 'Rp 150.000',
    images: [
      'https://i.pinimg.com/736x/3e/f2/fd/3ef2fdfcf638c864b42dc7aecef35353.jpg',
      'https://i.pinimg.com/736x/3e/f2/fd/3ef2fdfcf638c864b42dc7aecef35353.jpg'
    ],
    features: ['ABS Braking', 'LED Headlights', 'Large Storage'],
    rating: 4.9
  },
  {
    id: 'xsr',
    name: 'Yamaha XSR 155',
    type: 'Heritage Sport',
    price: 'Rp 180.000',
    images: [
      'https://i.pinimg.com/736x/8e/40/af/8e40afea044420cf86e80699fb58ecad.jpg',
      'https://i.pinimg.com/736x/08/2f/aa/082faade17b0abdb7f3344d7df0d6790.jpg'
    ],
    features: ['Vintage Look', 'Powerful 155cc', 'Comfort Seat'],
    rating: 4.9
  },
  {
    id: 'vario',
    name: 'Honda Vario 160',
    type: 'Performance',
    price: 'Rp 110.000',
    images: [
      'https://i.pinimg.com/736x/89/ee/d6/89eed67f597fbe6f7c97966d28b3586e.jpg',
      'https://i.pinimg.com/736x/90/20/5e/90205e9b8ad5ffdcd90dd1f31931e426.jpg'
    ],
    features: ['Smart Key', 'Fast Intake', 'Sporty Handling'],
    rating: 4.7
  }
];

function BikeImageCarousel({ images, bikeName }: { images: string[], bikeName: string }) {
  const [index, setIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden group/carousel">
      <AnimatePresence mode="wait">
        <motion.img 
          key={index}
          src={images[index]} 
          alt={bikeName}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-30">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-jimba-accent hover:text-jimba-deep transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-jimba-accent hover:text-jimba-deep transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-jimba-foam' : 'w-1 bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
}

export default function Fleet() {
  const handleWhatsApp = (bikeName: string) => {
    const message = `Halo Jimbaride, saya ingin sewa motor ${bikeName}. Apakah masih tersedia?`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-jimba-accent mb-4 block font-bold">The Collection</span>
            <h1 className="text-3xl md:text-5xl leading-none italic uppercase">Fleet <br />Collection.</h1>
          </div>
          <div className="max-w-xs space-y-4">
            <p className="text-jimba-foam/40 text-sm leading-relaxed">
              Armada terbaru (2023-2024), perawatan rutin dealer resmi, dan selalu bersih saat sampai di tangan Anda.
            </p>
            <div className="h-px w-full bg-white/10" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {FLEET.map((bike, i) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-luxury group"
            >
              <div className="relative">
                <BikeImageCarousel images={bike.images} bikeName={bike.name} />
                <div className="absolute top-6 left-6 flex gap-2 z-20">
                  <span className="px-4 py-1.5 rounded-lg bg-jimba-foam/95 backdrop-blur-md text-[10px] font-black tracking-[0.2em] uppercase text-jimba-deep shadow-xl">
                    {bike.type}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-black mb-2 uppercase tracking-tighter">{bike.name}</h3>
                    <div className="flex items-center gap-1.5 text-jimba-deep">
                      <Star size={16} fill="currentColor" />
                      <span className="text-base font-black">{bike.rating}</span>
                      <span className="text-xs font-bold opacity-30 ml-1">RATING</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-display font-black text-jimba-deep">{bike.price}</span>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-30 mt-1">Harian</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {bike.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-jimba-deep/60">
                      <CheckCircle2 size={14} className="text-jimba-deep shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleWhatsApp(bike.name)}
                  className="w-full py-5 rounded-2xl bg-jimba-deep text-jimba-foam flex items-center justify-center gap-3 hover:bg-jimba-foam hover:text-jimba-deep transition-all duration-500 font-black tracking-widest text-sm uppercase shadow-xl shadow-jimba-deep/20"
                >
                  PESAN SEKARANG <MessageCircle size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
