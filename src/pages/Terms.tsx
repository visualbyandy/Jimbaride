import { motion } from 'motion/react';
import { ShieldCheck, FileText, CreditCard, ClipboardCheck, AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-32 pb-40">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-jimba-accent mb-4 block font-bold">Policy & Guidelines</span>
          <h1 className="text-3xl md:text-5xl leading-none italic uppercase mb-6">Terms & <br />Conditions.</h1>
          <p className="text-jimba-foam/60 leading-relaxed max-w-2xl text-sm">
            Mohon baca dengan seksama syarat dan ketentuan penyewaan di Jimbaride untuk memastikan kenyamanan dan keamanan Anda selama berkendara di Bali.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Requirement Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-jimba-accent">
              <ClipboardCheck size={28} />
              <h2 className="text-2xl font-bold uppercase tracking-tight">Persyaratan Identitas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-jimba-accent/30 transition-colors">
                <CreditCard className="text-jimba-accent mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">Lokal / Domestik</h3>
                <ul className="space-y-3 text-jimba-foam/60 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-jimba-accent mt-1.5 shrink-0" />
                    <span>E-KTP Asli (Wajib ditinggal selama masa sewa)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-jimba-accent mt-1.5 shrink-0" />
                    <span>Sim C yang masih aktif</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-jimba-accent mt-1.5 shrink-0" />
                    <span>Bukti Reservasi Hotel / Tempat Menginap</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-jimba-accent/30 transition-colors">
                <FileText className="text-jimba-accent mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">Wisatawan Asing</h3>
                <ul className="space-y-3 text-jimba-foam/60 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-jimba-accent mt-1.5 shrink-0" />
                    <span>Original Passport / Boarding Pass</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-jimba-accent mt-1.5 shrink-0" />
                    <span>International Driving Permit (SIM Internasional)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-jimba-accent mt-1.5 shrink-0" />
                    <span>Foto Identitas & Tiket Pesawat Pulang</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rules Section */}
          <section className="p-10 rounded-[2rem] bg-jimba-accent text-jimba-deep">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck size={32} />
              <h2 className="text-2xl font-black uppercase italic">Ketentuan Umum</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 font-medium">
              <div className="space-y-4">
                <p>1. Durasi sewa dihitung 24 jam per hari.</p>
                <p>2. Keterlambatan pengembalian dikenakan denda per jam.</p>
                <p>3. Penggunaan motor hanya untuk wilayah pulau Bali.</p>
              </div>
              <div className="space-y-4">
                <p>4. Kerusakan unit menjadi tanggung jawab penyewa.</p>
                <p>5. Wajib menggunakan helm yang telah disediakan.</p>
                <p>6. Dilarang memindah tangankan unit sewa.</p>
              </div>
            </div>
          </section>

          {/* Warning Section */}
          <section className="flex gap-6 p-8 rounded-3xl border border-red-500/20 bg-red-500/5 items-start">
            <AlertCircle className="text-red-500 shrink-0" size={24} />
            <div className="space-y-2">
              <h4 className="font-bold text-red-500 uppercase tracking-wider text-sm">Peringatan Penting</h4>
              <p className="text-jimba-foam/50 text-sm leading-relaxed">
                Segala bentuk pelanggaran lalu lintas dan konsekuensi hukum yang terjadi selama masa penyewaan adalah tanggung jawab penuh penyewa. Jimbaride berhak menarik unit jika terjadi penyalahgunaan.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
