import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  DuniaKimiaJayaLogo, 
  UmnLogo 
} from './Logos';
import { 
  COMPANY_STRUCTURE, 
  DATABASE_SCHEMA, 
  MOCK_CUSTOMERS_AR 
} from '../data';
import { 
  CustomerAR, 
  ActivityLog, 
  DatabaseTable 
} from '../types';
import { 
  Shield, 
  User, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  AlertCircle, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  Database, 
  Search, 
  ArrowUpDown, 
  Mail, 
  Send, 
  Play, 
  Maximize2, 
  RefreshCw,
  ExternalLink,
  Smartphone,
  Check,
  Building,
  Terminal,
  HelpCircle,
  FileSpreadsheet,
  Cpu
} from 'lucide-react';

interface SlideProps {
  onSlideJump?: (slideId: string) => void;
  activeTheme?: 'blue' | 'eclipse' | 'cyber';
}

// FORMAT CURRENCY
const formatIDR = (num: number) => {
  if (num >= 1000000000) {
    return `Rp ${(num / 1000000000).toFixed(2)}B`;
  }
  if (num >= 1000000) {
    return `Rp ${(num / 1000000).toFixed(2)}M`;
  }
  return `Rp ${num.toLocaleString('id-ID')}`;
};

// ==========================================
// 0. COVER SLIDE
// ==========================================
export const SlideCover: React.FC<SlideProps> = ({ onSlideJump }) => {
  return (
    <div className="relative h-full w-full flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-10 overflow-y-auto">
      {/* Background decoration representing chemicals/data networks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-cyan/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl animate-pulse-slow"></div>
        <svg className="w-full h-full text-slate-800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-cover" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cover)" />
        </svg>
      </div>

      {/* Left side: Large Academic Title */}
      <div className="w-full md:w-[55%] flex flex-col justify-center h-full z-10 select-text">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <DuniaKimiaJayaLogo className="w-20 h-16" showText={true} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            RANCANG BANGUN <span className="text-brand-cyan relative">BACK-END<span className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-cyan/40"></span></span> WEBSITE <span className="text-brand-blue font-black">ACCOUNT RECEIVABLE</span> UNTUK MENDUKUNG PENGELOLAAN PIUTANG
          </h1>
          <p className="mt-4 font-display font-medium text-lg text-slate-300">
            PADA PT DUNIA KIMIA JAYA
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card-light/80 border border-brand-cyan/20 font-mono text-xs text-brand-cyan">
            <Cpu className="w-4.5 h-4.5 animate-spin text-brand-cyan" />
            LAPORAN CAREER ACCELERATION PROGRAM
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center gap-4 text-slate-500 font-mono text-xs"
        >
          <span>PROGRAM STUDI INFORMATIKA</span>
          <span>•</span>
          <span>UMN 2026</span>
        </motion.div>
      </div>

      {/* Right side: Student Profile Cards */}
      <div className="w-full md:w-[42%] flex flex-col justify-center gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute -top-4 -right-4 hidden lg:block"
        >
          <UmnLogo className="w-24 h-24" />
        </motion.div>

        {/* 1. Student Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 rounded-xl glass-card border border-slate-800 flex items-center gap-4"
        >
          <div className="p-3 rounded-lg bg-brand-blue/20 text-brand-cyan border border-brand-blue/30">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-brand-cyan tracking-wider block font-semibold">STUDENT</span>
            <span className="font-display font-bold text-lg text-white block">Frendhy Zhuang</span>
            <span className="font-mono text-xs text-slate-400">NIM: 00000092876 • Informatika '23</span>
          </div>
        </motion.div>

        {/* 2. Advisor Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-4 rounded-xl glass-card border border-slate-800 flex items-center gap-4"
        >
          <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-emerald-400 tracking-wider block font-semibold">ADVISOR</span>
            <span className="font-display font-bold text-lg text-white block">Dr. Nunik Afriliana, S.Kom., MMSI</span>
            <span className="font-mono text-xs text-slate-400">Dosen Pembimbing Akademik UMN</span>
          </div>
        </motion.div>

        {/* 3. Company Supervisor Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-4 rounded-xl glass-card border border-slate-800 flex items-center gap-4"
        >
          <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-amber-400 tracking-wider block font-semibold">SUPERVISORS (MITRA)</span>
            <span className="font-display font-bold text-md text-white block">Angelicha Aminah Zairuni Ussu</span>
            <span className="font-mono text-xs text-slate-400 block">Supervisor Magang (MIS Manager)</span>
            <span className="font-display font-semibold text-xs text-slate-300 block mt-1">Herman Maringan Hasiholan</span>
            <span className="font-mono text-[10px] text-slate-500 block">HCGA Manager</span>
          </div>
        </motion.div>

        {/* 4. Internship Period Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-4 rounded-xl bg-brand-card-light/40 border border-slate-800 flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
            <MapPin className="w-4 h-4 text-brand-cyan" />
            <span>Kawasan Industri Deltamas, Bekasi</span>
          </div>
          <div className="flex items-center justify-between border-t border-slate-800/60 pt-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-4 h-4 text-brand-blue" />
              <span>18 Feb – 17 Agt 2026</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-brand-blue/20 text-brand-cyan text-[10px] font-bold">6 BULAN</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ==========================================
// 1. LATAR BELAKANG MASALAH
// ==========================================
export const SlideLatarBelakang: React.FC<SlideProps> = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-6 md:p-10 select-text">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2.5 py-1 rounded-full uppercase">
          MODULE 1 • IDENTIFIKASI TANTANGAN
        </span>
        <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
          Transformasi Pengelolaan Accounts Receivable (Piutang)
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        {/* Left Column: Tantangan (Excel based) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-red-950/10 border border-red-900/30">
            <h3 className="font-display font-bold text-red-400 text-lg flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5" />
              Tantangan Pengelolaan Manual (Spreadsheet)
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sebelum adanya web dashboard, tim Accounting mengelola ribuan data accounts receivable secara terpisah di Microsoft Excel, yang menimbulkan hambatan operasional:
            </p>
          </div>

          <div className="space-y-2.5">
            {[
              { id: "1", title: "Redundansi & Inkonsistensi Data", desc: "Data ganda akibat input manual pada file Excel yang berbeda-beda." },
              { id: "2", title: "Latency Pemantauan Pembayaran", desc: "Kesulitan melacak status invoice secara real-time untuk menentukan jatuh tempo." },
              { id: "3", title: "Efisiensi Laporan yang Rendah", desc: "Divisi Accounting menghabiskan waktu lama untuk mengagregasi data piutang bulanan." }
            ].map(item => (
              <div key={item.id} className="p-3 rounded-lg bg-brand-card/40 border border-slate-800 flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-950/40 text-red-400 border border-red-900/40 font-mono text-xs flex items-center justify-center font-bold">
                  0{item.id}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm leading-tight">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Arrow Indicator */}
        <div className="lg:col-span-2 flex items-center justify-center py-4 lg:py-0">
          <div className="flex lg:flex-col items-center gap-2">
            <div className="w-8 h-1 lg:w-1 lg:h-12 bg-gradient-to-r lg:bg-gradient-to-b from-red-500/50 to-brand-cyan/50"></div>
            <div className="p-2.5 rounded-full bg-brand-card border border-brand-cyan/20 animate-pulse text-brand-cyan">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="w-8 h-1 lg:w-1 lg:h-12 bg-gradient-to-r lg:bg-gradient-to-b from-brand-cyan/50 to-brand-blue/50"></div>
          </div>
        </div>

        {/* Right Column: Solusi Strategis Backend Web Dashboard */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-cyan/20">
            <h3 className="font-display font-bold text-brand-cyan text-lg flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              Solusi: Backend Web Dashboard Terpusat
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Membangun sistem informasi pengelola data accounts receivable yang terintegrasi penuh menggunakan arsitektur handal:
            </p>
          </div>

          <div className="space-y-2.5">
            {[
              { id: "A", title: "Laravel Framework & MySQL Database", desc: "Menjamin ketersediaan endpoint API, manipulasi query yang aman, dan database ternormalisasi." },
              { id: "B", title: "Kalkulasi Otomatis Sisi Server", desc: "Server melakukan proses agregasi instan untuk Total AR Outstanding, Aging, dan Collection Rate." },
              { id: "C", title: "Role-Based Access Control (RBAC)", desc: "Membatasi hak akses pengguna (Admin, Manager, Collector) demi keamanan data finansial." }
            ].map(item => (
              <div key={item.id} className="p-3 rounded-lg bg-brand-card/80 border border-slate-700/50 shadow-glow-blue flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 font-mono text-xs flex items-center justify-center font-bold">
                  {item.id}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm leading-tight">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] font-mono text-slate-500">
        <span>Fakultas Teknik dan Informatika UMN</span>
        <span>PT Dunia Kimia Jaya — MIS Department</span>
      </div>
    </div>
  );
};

// ==========================================
// 2. MAKSUD & TUJUAN
// ==========================================
export const SlideMaksudTujuan: React.FC<SlideProps> = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-6 md:p-10 select-text">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2.5 py-1 rounded-full uppercase">
          MODULE 2 • KERANGKA KERJA & PROSEDUR
        </span>
        <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
          Maksud, Tujuan, & Alur Kerja Magang
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
        {/* Left: Maksud & Tujuan */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-white text-lg border-l-4 border-brand-cyan pl-3">
            Maksud & Tujuan Utama
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { t: "Digitalisasi Sistem", d: "Menggantikan dokumen spreadsheet manual menjadi sistem berbasis web relasional terpusat." },
              { t: "Otomatisasi Laporan", d: "Menyediakan analitik AR Aging, Collection Rate, dan grafik performa kolektor secara real-time." },
              { t: "Keamanan Finansial", d: "Melindungi kerahasiaan data pembeli dan nominal tagihan dengan otentikasi ketat berbasis RBAC." },
              { t: "Meningkatkan Collection Rate", d: "Mempermudah penagih (Collector) mengirim pesan pengingat tagihan otomatis lewat Email/WA." }
            ].map((obj, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-brand-card/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <h4 className="font-display font-bold text-sm text-brand-cyan flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                  {obj.t}
                </h4>
                <p className="text-xs text-slate-400 mt-1">{obj.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Waktu & Prosedur */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-white text-lg border-l-4 border-brand-blue pl-3">
            Durasi & Aturan Operasional
          </h3>
          <div className="p-4 rounded-2xl bg-brand-card border border-slate-800 space-y-4">
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block uppercase">Durasi Magang</span>
                <span className="font-display font-bold text-sm text-white block mt-1">6 BULAN</span>
                <span className="text-[10px] text-slate-400 mt-1 block">18 Feb - 17 Agt 2026</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block uppercase">Sistem Kerja</span>
                <span className="font-display font-bold text-sm text-white block mt-1">HYBRID</span>
                <span className="text-[10px] text-slate-400 mt-1 block">WFO & WFH Cikarang</span>
              </div>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div className="flex gap-2.5 items-start">
                <div className="p-1 rounded bg-brand-blue/20 text-brand-cyan mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Jam Operasional:</strong>
                  <p className="text-slate-400 mt-0.5">Bekerja pukul 09.00 - 17.00 WIB sesuai standar regulasi PT Dunia Kimia Jaya.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1 rounded bg-brand-blue/20 text-brand-cyan mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Daily Standup Meeting:</strong>
                  <p className="text-slate-400 mt-0.5">Melakukan sinkronisasi harian setiap pagi bersama pembimbing lapangan membahas bug-testing dan logic kueri SQL.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1 rounded bg-brand-blue/20 text-brand-cyan mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Agile Methodology:</strong>
                  <p className="text-slate-400 mt-0.5">Melakukan iterasi sprint mingguan, demo prototype ke divisi Accounting, serta mengumpulkan daftar feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] font-mono text-slate-500">
        <span>Frendhy Zhuang — NIM 00000092876</span>
        <span>Laporan Kerja Magang Informatika</span>
      </div>
    </div>
  );
};

// ==========================================
// 3. GAMBARAN UMUM PERUSAHAAN (ORGANIZATION CHART)
// ==========================================
export const SlideCompanyProfile: React.FC<SlideProps> = () => {
  const [selectedNode, setSelectedNode] = useState<typeof COMPANY_STRUCTURE | null>(COMPANY_STRUCTURE.children ? COMPANY_STRUCTURE.children[0] : null);

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 md:p-10 select-text">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2.5 py-1 rounded-full uppercase">
          MODULE 3 • GAMBARAN UMUM PERUSAHAAN
        </span>
        <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
          Struktur Organisasi & Hubungan Kerja Divisi IT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left Column: Overview and Info Card */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">
          <div className="p-4 rounded-2xl bg-brand-card border border-slate-800">
            <h3 className="font-display font-bold text-white text-base mb-2">
              Kedudukan Backend Developer
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Selama magang, kedudukan saya berada di bawah naungan unit <strong>MIS (Management Information System)</strong> yang dipimpin oleh Ibu Angelicha (MIS Manager).
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              Dalam pengembangannya, saya berkoordinasi erat dengan divisi <strong>Accounting</strong> (di bawah Financial Controller Manager) sebagai user utama yang memvalidasi logika penagihan piutang usaha.
            </p>
          </div>

          {/* Active Detail Panel */}
          {selectedNode && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={selectedNode.id}
              className="p-4 rounded-2xl bg-brand-blue/10 border border-brand-cyan/20 space-y-2 relative"
            >
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block font-bold">
                {selectedNode.department}
              </span>
              <h4 className="font-display font-bold text-white text-sm">
                {selectedNode.title} — <span className="text-slate-300 font-normal">{selectedNode.name}</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {selectedNode.role}
              </p>
              <div className="text-[10px] font-mono text-brand-cyan/60">
                {selectedNode.description}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Column: Interactive Org Chart Tree */}
        <div className="lg:col-span-8 p-4 rounded-2xl bg-brand-card/40 border border-slate-800 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[9px] text-slate-500">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Klik jabatan untuk melihat tanggung jawab</span>
          </div>

          <div className="flex flex-col items-center gap-12 w-full max-w-xl">
            {/* Parent Node */}
            <div 
              onClick={() => setSelectedNode(COMPANY_STRUCTURE)}
              className={`px-5 py-3 rounded-xl border cursor-pointer transition-all text-center max-w-xs ${
                selectedNode?.id === COMPANY_STRUCTURE.id 
                ? 'bg-brand-blue text-white border-brand-cyan shadow-glow-blue scale-105' 
                : 'bg-brand-card border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <span className="text-[9px] font-mono tracking-widest block opacity-70 uppercase">
                {COMPANY_STRUCTURE.department}
              </span>
              <h4 className="font-display font-bold text-sm">{COMPANY_STRUCTURE.title}</h4>
              <span className="text-[10px] opacity-80 block font-mono">{COMPANY_STRUCTURE.name}</span>
            </div>

            {/* Connecting Lines Container */}
            <div className="relative w-full flex justify-between gap-2">
              {/* Horizontal Line connector */}
              <div className="absolute top-[-24px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-800"></div>
              
              {/* Vertical connector down from parent */}
              <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-[2px] h-[24px] bg-slate-800"></div>

              {/* Child Nodes */}
              {COMPANY_STRUCTURE.children?.map(node => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <div key={node.id} className="flex flex-col items-center w-1/4 relative">
                    {/* Vertical line up to horizontal line */}
                    <div className="absolute top-[-24px] w-[2px] h-[24px] bg-slate-800"></div>

                    <div 
                      onClick={() => setSelectedNode(node)}
                      className={`w-full p-2.5 rounded-xl border cursor-pointer transition-all text-center select-none ${
                        isSelected 
                        ? 'bg-brand-cyan text-brand-dark border-white shadow-glow-cyan font-semibold scale-105 z-10' 
                        : 'bg-brand-card/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span className="text-[8px] font-mono tracking-wider block opacity-70 uppercase leading-none truncate">
                        {node.department.replace(' Department', '').replace(' Division', '')}
                      </span>
                      <h5 className="font-display font-bold text-[10px] mt-1 leading-tight">{node.title}</h5>
                      <span className="text-[8px] opacity-80 block truncate font-mono mt-0.5">{node.name.split(' ')[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] font-mono text-slate-500">
        <span>PT Dunia Kimia Jaya — Laporan Magang 2026</span>
        <span>Divisi IT & Management Information System</span>
      </div>
    </div>
  );
};

// ==========================================
// 4. DATABASE SCHEMA & ERD (INTERACTIVE SCHEMA)
// ==========================================
export const SlideDatabaseERD: React.FC<SlideProps> = () => {
  const [selectedTable, setSelectedTable] = useState<DatabaseTable | null>(DATABASE_SCHEMA[0]);

  return (
    <div className="h-full w-full flex flex-col justify-between p-6 md:p-10 select-text">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2.5 py-1 rounded-full uppercase">
          MODULE 4 • IMPLEMENTASI DATABASE & ERD
        </span>
        <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
          Perancangan Skema Database Relasional MySQL
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left Column: Old vs New Architecture Table */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-brand-card border border-slate-800">
            <h3 className="font-display font-bold text-slate-200 text-sm mb-2.5 flex items-center gap-1.5">
              <Database className="w-4 h-4 text-brand-cyan" />
              Arsitektur Pengolahan Data Piutang
            </h3>
            
            <div className="space-y-2 text-xs">
              <div className="flex border-b border-slate-800/60 pb-1.5 font-semibold text-slate-400 font-mono text-[10px]">
                <span className="w-1/3">Aspek</span>
                <span className="w-1/3 text-red-400">Sistem Lama (Excel)</span>
                <span className="w-1/3 text-brand-cyan">Sistem Baru (Web)</span>
              </div>
              <div className="flex border-b border-slate-800/40 py-1.5">
                <span className="w-1/3 font-semibold text-slate-300">Penyimpanan</span>
                <span className="w-1/3 text-slate-500">Tersebar, File Lokal</span>
                <span className="w-1/3 text-brand-cyan font-semibold">MySQL Server Terpusat</span>
              </div>
              <div className="flex border-b border-slate-800/40 py-1.5">
                <span className="w-1/3 font-semibold text-slate-300">Kalkulasi</span>
                <span className="w-1/3 text-slate-500">Manual, Formula Excel</span>
                <span className="w-1/3 text-brand-cyan font-semibold">Agregasi Server-Side</span>
              </div>
              <div className="flex border-b border-slate-800/40 py-1.5">
                <span className="w-1/3 font-semibold text-slate-300">Akses</span>
                <span className="w-1/3 text-slate-500">Tanpa Otorisasi</span>
                <span className="w-1/3 text-brand-cyan font-semibold">RBAC (3 Level Akses)</span>
              </div>
              <div className="flex py-1.5">
                <span className="w-1/3 font-semibold text-slate-300">Pencarian</span>
                <span className="w-1/3 text-slate-500">Manual Filter</span>
                <span className="w-1/3 text-brand-cyan font-semibold">Kueri Terindeks Cepat</span>
              </div>
            </div>
          </div>

          {/* Schema Detail Panel */}
          {selectedTable && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={selectedTable.name}
              className="p-3.5 rounded-xl bg-brand-blue/10 border border-brand-cyan/20 space-y-1.5"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-brand-cyan font-bold text-xs uppercase">
                  TABEL: dkj_ar_dashboard.{selectedTable.name}
                </span>
                <span className="text-[10px] bg-brand-blue/30 text-white font-mono px-1.5 py-0.5 rounded font-semibold">
                  {selectedTable.columns.length} Kolom
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                {selectedTable.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Right Column: Schema Visualizer Interactive Map */}
        <div className="lg:col-span-7 p-4 rounded-xl bg-brand-card/40 border border-slate-800 flex flex-wrap gap-3 items-center justify-center relative overflow-y-auto max-h-[360px] lg:max-h-none">
          <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[9px] text-slate-500">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pilih tabel untuk melihat skema kolom</span>
          </div>

          {DATABASE_SCHEMA.map(table => {
            const isSelected = selectedTable?.name === table.name;
            return (
              <div 
                key={table.name}
                onClick={() => setSelectedTable(table)}
                className={`w-[45%] sm:w-[30%] min-w-[130px] p-2.5 rounded-lg border cursor-pointer select-none transition-all ${
                  isSelected 
                  ? 'bg-brand-card border-brand-cyan shadow-glow-cyan' 
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1.5 border-b border-slate-800/80 pb-1 mb-1.5 font-mono text-[10px] font-bold">
                  <Database className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-cyan' : 'text-slate-500'}`} />
                  <span className={isSelected ? 'text-brand-cyan' : 'text-slate-300'}>
                    {table.name}
                  </span>
                </div>
                <div className="space-y-1">
                  {table.columns.slice(0, 3).map(col => (
                    <div key={col.name} className="flex justify-between items-center text-[8.5px] font-mono leading-none">
                      <span className="text-slate-400 flex items-center gap-0.5">
                        {col.key === 'PK' && <span className="text-amber-500 text-[8px]">🔑</span>}
                        {col.key === 'FK' && <span className="text-brand-cyan text-[8px]">🔗</span>}
                        {col.name}
                      </span>
                      <span className="text-slate-500 truncate max-w-[50px]">{col.type.split(' ')[0]}</span>
                    </div>
                  ))}
                  {table.columns.length > 3 && (
                    <div className="text-[8px] text-slate-600 font-mono text-center pt-0.5">
                      + {table.columns.length - 3} kolom lainnya
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Selected Schema Columns detailed table */}
          {selectedTable && (
            <div className="w-full mt-2 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-[9.5px]">
              <div className="grid grid-cols-12 gap-1 font-semibold text-brand-cyan border-b border-slate-800/80 pb-1.5 mb-1 text-center font-bold">
                <span className="col-span-1">Key</span>
                <span className="col-span-4 text-left pl-1">Nama Kolom</span>
                <span className="col-span-3">Tipe Data</span>
                <span className="col-span-4 text-left">Relasi / Deskripsi</span>
              </div>
              <div className="space-y-1 max-h-[100px] overflow-y-auto">
                {selectedTable.columns.map(col => (
                  <div key={col.name} className="grid grid-cols-12 gap-1 py-0.5 border-b border-slate-900/40 text-center">
                    <span className="col-span-1">
                      {col.key === 'PK' ? '🔑' : col.key === 'FK' ? '🔗' : '•'}
                    </span>
                    <span className="col-span-4 text-left pl-1 font-semibold text-slate-300">{col.name}</span>
                    <span className="col-span-3 text-slate-400">{col.type}</span>
                    <span className="col-span-4 text-left text-slate-500 text-[8.5px] truncate">
                      {col.ref ? `relasi ke: ${col.ref}` : '-'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] font-mono text-slate-500">
        <span>Backend Database: MySQL (dkj_ar_dashboard)</span>
        <span>Integritas Kunci Asing & Normalisasi 3NF</span>
      </div>
    </div>
  );
};

// ==========================================
// 5. FITUR UTAMA: INTERACTIVE AR DASHBOARD & AGING
// ==========================================
export const SlideDashboardDemo: React.FC<SlideProps> = () => {
  // Filters
  const [selectedPlant, setSelectedPlant] = useState<string>('All Plants');
  const [selectedCollector, setSelectedCollector] = useState<string>('All Collectors');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'customerName' | 'totalAR' | 'status'>('totalAR');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  // Slide internal interactive click details
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerAR | null>(MOCK_CUSTOMERS_AR[0]);

  // Compute stats dynamically based on actual filter states
  const filteredCustomers = useMemo(() => {
    return MOCK_CUSTOMERS_AR.filter(cust => {
      const matchPlant = selectedPlant === 'All Plants' || cust.plantCode === selectedPlant;
      const matchColl = selectedCollector === 'All Collectors' || cust.collectorName === selectedCollector;
      const matchSearch = searchTerm === '' || 
        cust.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cust.customerCode.toLowerCase().includes(searchTerm.toLowerCase());
      return matchPlant && matchColl && matchSearch;
    }).sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'customerName') comparison = a.customerName.localeCompare(b.customerName);
      else if (sortBy === 'totalAR') comparison = a.totalAR - b.totalAR;
      else if (sortBy === 'status') comparison = a.status.localeCompare(b.status);
      return sortOrder === 'desc' ? -comparison : comparison;
    });
  }, [selectedPlant, selectedCollector, searchTerm, sortBy, sortOrder]);

  const kpis = useMemo(() => {
    const totalOutstanding = filteredCustomers.reduce((acc, c) => acc + c.totalAR, 0);
    const target = filteredCustomers.reduce((acc, c) => acc + c.target, 0);
    const actual = filteredCustomers.reduce((acc, c) => acc + c.actual, 0);
    const collectionRate = target > 0 ? (actual / target) * 100 : 0;
    const overdueCount = filteredCustomers.filter(c => (c.over60 + c.over90) > 0).length;
    
    // Aging breakdown sums
    const currentSum = filteredCustomers.reduce((acc, c) => acc + c.current, 0);
    const over30Sum = filteredCustomers.reduce((acc, c) => acc + c.over30, 0);
    const over60Sum = filteredCustomers.reduce((acc, c) => acc + c.over60, 0);
    const over90Sum = filteredCustomers.reduce((acc, c) => acc + c.over90, 0);

    return {
      totalOutstanding,
      target,
      actual,
      collectionRate,
      overdueCount,
      currentSum,
      over30Sum,
      over60Sum,
      over90Sum
    };
  }, [filteredCustomers]);

  const toggleSort = (field: 'customerName' | 'totalAR' | 'status') => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 md:p-6 select-text overflow-y-auto">
      {/* Slide Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2 py-0.5 rounded-full uppercase">
            MODULE 5 • DEMONSTRASI DASHBOARD
          </span>
          <h2 className="mt-1 font-display font-bold text-xl md:text-2xl text-white tracking-tight">
            AR Dashboard Overview & AR Aging Analysis
          </h2>
        </div>

        {/* Dashboard Filters Toolbar */}
        <div className="flex flex-wrap gap-2 items-center text-[11px]">
          {/* Plant filter */}
          <select 
            value={selectedPlant}
            onChange={(e) => setSelectedPlant(e.target.value)}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono"
          >
            <option value="All Plants">Semua Pabrik (Plants)</option>
            <option value="Plant 1511">Plant 1511 (Cikarang)</option>
            <option value="Plant 1512">Plant 1512 (Cikarang II)</option>
            <option value="Plant 1515">Plant 1515 (Cibitung)</option>
          </select>

          {/* Collector filter */}
          <select 
            value={selectedCollector}
            onChange={(e) => setSelectedCollector(e.target.value)}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono"
          >
            <option value="All Collectors">Semua Kolektor (Collectors)</option>
            <option value="Mega">Mega</option>
            <option value="Miya">Miya</option>
            <option value="Risa">Risa</option>
            <option value="Viona">Viona</option>
          </select>

          {/* Search */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari Customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-6 pr-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-sans w-32 focus:w-44 transition-all"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-2.5">
        {/* KPI 1 */}
        <div className="p-2.5 rounded-xl bg-brand-card border border-slate-800">
          <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">TOTAL AR OUTSTANDING</span>
          <span className="font-display font-bold text-sm md:text-base text-white block mt-0.5">
            {formatIDR(kpis.totalOutstanding)}
          </span>
          <span className="text-[9px] text-brand-cyan font-mono mt-0.5 block font-semibold">
            {filteredCustomers.length} Active Accounts
          </span>
        </div>

        {/* KPI 2 */}
        <div className="p-2.5 rounded-xl bg-brand-card border border-slate-800">
          <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">COLLECTED (RECOVERY)</span>
          <span className="font-display font-bold text-sm md:text-base text-emerald-400 block mt-0.5">
            {formatIDR(kpis.actual)}
          </span>
          <span className="text-[9px] text-slate-500 font-mono mt-0.5 block">
            Target: {formatIDR(kpis.target)}
          </span>
        </div>

        {/* KPI 3 */}
        <div className="p-2.5 rounded-xl bg-brand-card border border-slate-800">
          <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">COLLECTION RATE</span>
          <span className="font-display font-bold text-sm md:text-base text-brand-cyan block mt-0.5">
            {kpis.collectionRate.toFixed(1)}%
          </span>
          <div className="w-full bg-slate-900 h-1 rounded-full mt-1.5 overflow-hidden">
            <div 
              className="bg-brand-cyan h-full rounded-full transition-all duration-500" 
              style={{ width: `${Math.min(kpis.collectionRate, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="p-2.5 rounded-xl bg-brand-card border border-slate-800">
          <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">OVERDUE CLIENTS</span>
          <span className="font-display font-bold text-sm md:text-base text-amber-500 block mt-0.5">
            {kpis.overdueCount} Customers
          </span>
          <span className="text-[9px] text-amber-500/80 font-mono mt-0.5 block font-semibold">
            Age: &gt; 60 days
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch my-auto">
        {/* Left Section: AR Aging Distribution Donut (Interactive Chart) */}
        <div className="lg:col-span-4 p-3 rounded-xl bg-brand-card/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-slate-800/80 pb-1 mb-2">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Aging Breakdown Distribution</span>
            <span className="text-[8px] font-mono text-brand-cyan uppercase">Live Calculations</span>
          </div>

          <div className="flex justify-center items-center h-[120px] relative">
            {/* Custom Interactive SVG Donut */}
            <svg viewBox="0 0 100 100" className="w-28 h-28 transform -rotate-90">
              {/* Slices calculation helper: current=60%, 1-30=20%, 30-60=10%, 60-90=7%, >90=3% */}
              {/* StrokeDashoffset = 2 * PI * R * (1 - ratio) */}
              {/* Slice 1: Current (60%) */}
              <circle 
                cx="50" cy="50" r="40" 
                fill="transparent" 
                stroke="#2563eb" 
                strokeWidth="12" 
                strokeDasharray="251.2" 
                strokeDashoffset="100.48" // 251.2 * 0.4
                className="hover:stroke-[#3b82f6] transition-all cursor-pointer"
              />
              {/* Slice 2: 30 days (20%) */}
              <circle 
                cx="50" cy="50" r="40" 
                fill="transparent" 
                stroke="#38bdf8" 
                strokeWidth="12" 
                strokeDasharray="251.2" 
                strokeDashoffset="200.96" // offsets: 251.2 * 0.8
                transform="rotate(216 50 50)" // rotate after current 216deg
                className="hover:stroke-[#7dd3fc] transition-all cursor-pointer"
              />
              {/* Slice 3: 60 days (10%) */}
              <circle 
                cx="50" cy="50" r="40" 
                fill="transparent" 
                stroke="#fbbf24" 
                strokeWidth="12" 
                strokeDasharray="251.2" 
                strokeDashoffset="226.08" 
                transform="rotate(288 50 50)" 
                className="hover:stroke-[#fcd34d] transition-all cursor-pointer"
              />
              {/* Slice 4: 90 days (10%) */}
              <circle 
                cx="50" cy="50" r="40" 
                fill="transparent" 
                stroke="#ef4444" 
                strokeWidth="12" 
                strokeDasharray="251.2" 
                strokeDashoffset="226.08" 
                transform="rotate(324 50 50)" 
                className="hover:stroke-[#f87171] transition-all cursor-pointer"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-[10px] font-mono text-slate-500 block">TOTAL AR</span>
              <span className="font-display font-bold text-xs text-white">
                Rp {(kpis.totalOutstanding / 1000000000).toFixed(1)}B
              </span>
            </div>
          </div>

          <div className="space-y-1 mt-2">
            {[
              { label: "Current (Jatuh Tempo)", val: kpis.currentSum, color: "bg-brand-blue" },
              { label: "Over 30 Days (Lancar)", val: kpis.over30Sum, color: "bg-brand-cyan" },
              { label: "Over 60 Days (Kritis)", val: kpis.over60Sum, color: "bg-amber-500" },
              { label: "Over 90 Days (Macet)", val: kpis.over90Sum, color: "bg-red-500" }
            ].map((age, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className={`w-2 h-2 rounded-full ${age.color}`}></span>
                  <span>{age.label}</span>
                </div>
                <span className="text-white font-bold">{formatIDR(age.val)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Customer AR Database Table */}
        <div className="lg:col-span-8 p-3 rounded-xl bg-brand-card/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-slate-800/80 pb-1 mb-2">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Customer Aging Details DB</span>
            <span className="text-[8px] font-mono text-brand-cyan uppercase">Showing {filteredCustomers.length} of {MOCK_CUSTOMERS_AR.length} Records</span>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto overflow-y-auto max-h-[170px] border border-slate-800/60 rounded">
            <table className="w-full text-[10px] font-mono">
              <thead className="bg-slate-900/80 text-slate-400 sticky top-0 font-bold">
                <tr className="border-b border-slate-800">
                  <th onClick={() => toggleSort('customerName')} className="p-2 text-left cursor-pointer hover:bg-slate-800 select-none">
                    <div className="flex items-center gap-1">
                      Customer Name <ArrowUpDown className="w-3 h-3 text-brand-cyan" />
                    </div>
                  </th>
                  <th className="p-2 text-left hidden sm:table-cell">Collector</th>
                  <th onClick={() => toggleSort('totalAR')} className="p-2 text-right cursor-pointer hover:bg-slate-800 select-none">
                    <div className="flex items-center gap-1 justify-end">
                      Total AR <ArrowUpDown className="w-3 h-3 text-brand-cyan" />
                    </div>
                  </th>
                  <th className="p-2 text-center hidden md:table-cell">Plant</th>
                  <th onClick={() => toggleSort('status')} className="p-2 text-center cursor-pointer hover:bg-slate-800 select-none">
                    <div className="flex items-center gap-1 justify-center">
                      Status <ArrowUpDown className="w-3 h-3 text-brand-cyan" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {filteredCustomers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-slate-500 font-sans italic">
                      Tidak ada customer yang sesuai dengan filter.
                    </td>
                  </tr>
                ) : (
                  filteredCustomers.map(cust => (
                    <tr 
                      key={cust.id} 
                      onClick={() => setSelectedCustomer(cust)}
                      className={`cursor-pointer hover:bg-slate-800/50 transition-colors ${
                        selectedCustomer?.id === cust.id ? 'bg-brand-blue/10 border-l-2 border-brand-cyan' : ''
                      }`}
                    >
                      <td className="p-2 font-display font-bold text-slate-200">
                        {cust.customerName}
                        <span className="text-[8px] font-mono text-slate-500 block mt-0.5">{cust.customerCode}</span>
                      </td>
                      <td className="p-2 text-slate-400 hidden sm:table-cell">{cust.collectorName}</td>
                      <td className="p-2 text-right text-white font-bold">{formatIDR(cust.totalAR)}</td>
                      <td className="p-2 text-center text-slate-400 hidden md:table-cell font-mono">{cust.plantCode.replace('Plant ', '')}</td>
                      <td className="p-2 text-center">
                        <span className={`px-1.5 py-0.5 rounded text-[8.5px] font-bold ${
                          cust.status === 'Achieved' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {cust.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Active Row Detail Drawer mockup inside page */}
          {selectedCustomer && (
            <div className="mt-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
              <div>
                <span className="text-[8.5px] text-slate-500">DETAIL SELEKSI:</span>
                <div className="font-display font-semibold text-slate-300 mt-0.5">
                  {selectedCustomer.customerName} ({selectedCustomer.customerCode})
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <span className="text-slate-500 text-[8px] block">TARGET</span>
                  <span className="text-white font-bold">{formatIDR(selectedCustomer.target)}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[8px] block">REALISASI</span>
                  <span className="text-emerald-400 font-bold">{formatIDR(selectedCustomer.actual)}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[8px] block">RATE</span>
                  <span className="text-brand-cyan font-bold">
                    {((selectedCustomer.actual / selectedCustomer.target) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[10px] font-mono text-slate-500 mt-2">
        <span>Arsitektur Query Teroptimasi & Server-Side Filtering</span>
        <span>Divisi IT — PT Dunia Kimia Jaya UMN '26</span>
      </div>
    </div>
  );
};

// ==========================================
// 6. FITUR UTAMA: INTERACTIVE REMINDER GATEWAY
// ==========================================
export const SlideReminderGateway: React.FC<SlideProps> = () => {
  const [selectedClients, setSelectedClients] = useState<string[]>(['c1', 'c10']);
  const [customMsg, setCustomMsg] = useState<string>('Peringatan: Tagihan Anda di PT Dunia Kimia Jaya telah melewati jatuh tempo. Harap segera melakukan pelunasan pembayaran.');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [logs, setLogs] = useState<ActivityLog[]>([
    { id: 'l1', timestamp: '09:30:15', type: 'system', message: 'Sistem log AR Gateway aktif.', recipient: 'Server', status: 'SUCCESS' }
  ]);

  const overdueClients = useMemo(() => {
    return MOCK_CUSTOMERS_AR.filter(c => (c.over60 + c.over90) > 0);
  }, []);

  const handleSelectClient = (id: string) => {
    setSelectedClients(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedClients.length === overdueClients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(overdueClients.map(c => c.id));
    }
  };

  const triggerMockGateway = (channel: 'email' | 'whatsapp') => {
    if (selectedClients.length === 0) return;
    setIsSending(true);

    const activeRecipients = overdueClients.filter(c => selectedClients.includes(c.id));

    // Stagger send logs
    let delay = 0;
    activeRecipients.forEach(client => {
      setTimeout(() => {
        const dest = channel === 'email' ? client.email : `+${client.phone}`;
        const newLog: ActivityLog = {
          id: `log-${Date.now()}-${client.id}`,
          timestamp: new Date().toLocaleTimeString('id-ID'),
          type: channel,
          message: `${channel === 'email' ? 'HTML Template Sent' : 'URL Encoded String Sent'}: "${customMsg.slice(0, 40)}..."`,
          recipient: `${client.customerName} (${dest})`,
          status: 'SUCCESS'
        };
        setLogs(prev => [newLog, ...prev]);
        
        if (client.id === activeRecipients[activeRecipients.length - 1].id) {
          setIsSending(false);
        }
      }, delay);
      delay += 800; // stagger simulation
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 md:p-6 select-text overflow-y-auto">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2.5 py-1 rounded-full uppercase">
          MODULE 6 • REMINDER GATEWAY SANDBOX
        </span>
        <h2 className="mt-2 font-display font-bold text-xl md:text-2xl text-white tracking-tight">
          Sistem Pengingat Piutang Otomatis (AR Reminder)
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto items-stretch">
        {/* Left Column: Overdue Clients Selector */}
        <div className="lg:col-span-5 flex flex-col justify-between p-3 rounded-xl bg-brand-card/60 border border-slate-800">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Antrean Klien Overdue</span>
              <button 
                onClick={handleSelectAll}
                className="text-[9px] font-mono text-brand-cyan hover:underline uppercase"
              >
                {selectedClients.length === overdueClients.length ? 'Batal Semua' : 'Pilih Semua'}
              </button>
            </div>

            <div className="space-y-1.5 max-h-[150px] overflow-y-auto pr-1">
              {overdueClients.map(client => {
                const isChecked = selectedClients.includes(client.id);
                return (
                  <div 
                    key={client.id}
                    onClick={() => handleSelectClient(client.id)}
                    className={`p-2 rounded border cursor-pointer flex items-center justify-between select-none transition-all ${
                      isChecked 
                      ? 'bg-brand-blue/10 border-brand-cyan/40' 
                      : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        readOnly
                        className="rounded bg-slate-950 border-slate-800 text-brand-blue focus:ring-brand-blue/30 w-3.5 h-3.5"
                      />
                      <div className="text-[9.5px]">
                        <span className="font-display font-bold text-slate-200 block">{client.customerName}</span>
                        <span className="text-slate-500 font-mono text-[8px]">{client.customerCode} • {client.collectorName}</span>
                      </div>
                    </div>
                    <div className="text-right text-[9.5px] font-mono">
                      <span className="text-red-400 font-bold block">{formatIDR(client.totalAR)}</span>
                      <span className="text-[8px] text-red-500 font-bold bg-red-500/10 px-1 py-0.2 rounded mt-0.5 inline-block">
                        OVERDUE
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action trigger box */}
          <div className="mt-3 space-y-2 border-t border-slate-800 pt-2">
            <textarea 
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-sans h-12 resize-none focus:outline-none focus:ring-1 focus:ring-brand-cyan"
              placeholder="Ketik pesan peringatan penagihan di sini..."
            />
            
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <button 
                onClick={() => triggerMockGateway('email')}
                disabled={isSending || selectedClients.length === 0}
                className="py-1.5 rounded-lg bg-brand-blue text-white font-bold hover:bg-brand-blue/80 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-40"
              >
                {isSending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Mail className="w-3.5 h-3.5" />}
                <span>Send Email</span>
              </button>
              <button 
                onClick={() => triggerMockGateway('whatsapp')}
                disabled={isSending || selectedClients.length === 0}
                className="py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-40"
              >
                {isSending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>Send WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Simulated Visual Terminal Gateway Logs */}
        <div className="lg:col-span-7 p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1 mb-2">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 font-bold">
                <Terminal className="w-4 h-4 text-brand-cyan" />
                <span>Simulated Gateway Server Console (SMTP & WA Link)</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            {/* Terminal logs list */}
            <div className="space-y-1.5 font-mono text-[9px] max-h-[220px] overflow-y-auto pr-1">
              {logs.map((log) => (
                <div key={log.id} className="p-1.5 rounded bg-slate-900/60 border border-slate-800/40 flex items-start justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">[{log.timestamp}]</span>
                      <span className={`font-bold uppercase ${
                        log.type === 'email' ? 'text-brand-cyan' : log.type === 'whatsapp' ? 'text-emerald-400' : 'text-slate-400'
                      }`}>
                        {log.type}
                      </span>
                      <span className="text-slate-300 font-semibold">{log.recipient}</span>
                    </div>
                    <p className="text-slate-400 font-sans mt-0.5 leading-relaxed">{log.message}</p>
                  </div>
                  <span className="px-1 rounded bg-slate-950 text-emerald-400 text-[8px] font-bold border border-emerald-500/20">
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 text-[9px] text-slate-500 font-mono border-t border-slate-800/60 pt-2 flex items-center justify-between">
            <span>Uptime: 100% (No errors)</span>
            <span className="text-brand-cyan">SMTP TLS active • WhatsApp pre-encoded</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[10px] font-mono text-slate-500 mt-2">
        <span>Kalkulasi Jatuh Tempo Server-Side & Pengiriman Pesan Massal</span>
        <span>Laporan Magang Informatika — UMN 2026</span>
      </div>
    </div>
  );
};

// ==========================================
// 7. KENDALA TEKNIS & SOLUSI
// ==========================================
export const SlideKendalaSolusi: React.FC<SlideProps> = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-6 md:p-10 select-text">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2.5 py-1 rounded-full uppercase">
          MODULE 7 • EVALUASI TEKNIS & HAMBATAN
        </span>
        <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
          Analisis Kendala Teknis & Solusi Penyelesaian
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
        {/* Left: Hambatan & Kendala */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-red-400 text-lg flex items-center gap-2 border-l-4 border-red-500 pl-3">
            <AlertCircle className="w-5 h-5" />
            Hambatan & Kendala Teknis
          </h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-950/10 border border-red-900/20 relative">
              <span className="absolute top-2 right-3 font-mono text-[10px] text-red-500/60">KENDALA 01</span>
              <h4 className="font-display font-bold text-white text-sm">Latency Penyediaan Dokumen & Kebutuhan Data</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Proses koordinasi dan klarifikasi kualifikasi data dari divisi Accounting membutuhkan waktu yang relatif lama. Beberapa data transaksi lama lambat disediakan untuk memvalidasi algoritma piutang di database.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-950/10 border border-red-900/20 relative">
              <span className="absolute top-2 right-3 font-mono text-[10px] text-red-500/60">KENDALA 02</span>
              <h4 className="font-display font-bold text-white text-sm">Perubahan Persyaratan (Requirement Changes)</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Sering terjadi modifikasi minor terhadap visual dan perhitungan nominal persentase (Collection Rate) sesaat setelah fitur selesai didevelop. Hal ini mengakibatkan perlunya pengerjaan ulang pada logic backend kueri.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Solusi Strategis */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-emerald-400 text-lg flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
            <CheckCircle2 className="w-5 h-5" />
            Resolusi & Solusi Strategis
          </h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-900/20 relative">
              <span className="absolute top-2 right-3 font-mono text-[10px] text-emerald-500/60">RESOLUSI 01</span>
              <h4 className="font-display font-bold text-white text-sm">Pemanfaatan Waktu Tunggu yang Proaktif</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Saat menunggu feedback dokumen, waktu yang tersedia dimanfaatkan dengan mengerjakan modul backend lain, melakukan refactoring kode program, merancang sistem keamanan router, serta melakukan pengujian fungsionalitas fitur guna mencegah bug.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-900/20 relative">
              <span className="absolute top-2 right-3 font-mono text-[10px] text-emerald-500/60">RESOLUSI 02</span>
              <h4 className="font-display font-bold text-white text-sm">Komunikasi Harian & Log Revisi Komprehensif</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Meningkatkan intensitas koordinasi dengan dewan penasihat/user divisi Accounting. Selain itu, meminta daftar revisi program secara rinci, terstruktur, dan tertulis terlebih dahulu sebelum revisi diimplementasikan ke database.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] font-mono text-slate-500">
        <span>Evaluasi Akhir Pelaksanaan Kerja Magang UMN</span>
        <span>PT Dunia Kimia Jaya — MIS Department</span>
      </div>
    </div>
  );
};

// ==========================================
// 8. SIMPULAN & SARAN
// ==========================================
export const SlideSimpulanSaran: React.FC<SlideProps> = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between p-6 md:p-10 select-text">
      <div>
        <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-blue/20 px-2.5 py-1 rounded-full uppercase">
          MODULE 8 • AKHIR LAPORAN & SARAN
        </span>
        <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
          Simpulan & Rekomendasi Masa Depan
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left: Simpulan block */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <h3 className="font-display font-bold text-white text-base border-l-4 border-brand-cyan pl-3">
            Simpulan Akhir Proyek
          </h3>

          <div className="p-4 rounded-2xl bg-brand-card border border-slate-800 text-xs text-slate-400 space-y-3 leading-relaxed">
            <div className="flex gap-3">
              <span className="p-1 rounded bg-brand-cyan/10 text-brand-cyan font-mono text-xs font-bold leading-none h-fit">01</span>
              <p>
                <strong>Sukses Migrasi Digital:</strong> Berhasil merancang sistem backend AR Dashboard menggunakan framework <strong>Laravel & MySQL</strong> dari awal (*from scratch*) yang menggantikan proses pencatatan manual berbasis excel.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="p-1 rounded bg-brand-cyan/10 text-brand-cyan font-mono text-xs font-bold leading-none h-fit">02</span>
              <p>
                <strong>Fungsionalitas Komprehensif:</strong> Fitur krusial berhasil dideploy dengan lancar, meliputi pemantauan <strong>AR Aging</strong> otomatis, <strong>Collection Performance</strong> tracking, <strong>SO Overlimit</strong>, dan <strong>AR Reminder gateway</strong> (Email & WhatsApp).
              </p>
            </div>

            <div className="flex gap-3">
              <span className="p-1 rounded bg-brand-cyan/10 text-brand-cyan font-mono text-xs font-bold leading-none h-fit">03</span>
              <p>
                <strong>Efisiensi Operasional:</strong> Pengujian membuktikan sistem baru mampu meningkatkan efisiensi waktu, validasi data keuangan terstruktur, pencegahan redundansi data, serta menjaga privasi akses data keuangan melalui <strong>RBAC</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Saran cards */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <h3 className="font-display font-bold text-white text-base border-l-4 border-brand-blue pl-3">
            Rekomendasi Masa Depan (Saran)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { num: "01", t: "Scheduled Reminder", d: "Menyediakan scheduler otomatis menggunakan Laravel Scheduler untuk mengirim notifikasi secara berkala tanpa intervensi manual kolektor." },
              { num: "02", t: "Reminders History Status", d: "Menambahkan modul penanda riwayat pengiriman notifikasi penagihan (sent, failed, read) agar status komunikasi terpantau jelas." },
              { num: "03", t: "Mass Import CSV/Excel", d: "Mendukung upload massal data pembeli / AR langsung dari file CSV eksternal untuk efisiensi input massal." },
              { num: "04", t: "PDF Graph Exporter", d: "Menambahkan fitur cetak/ekspor visualisasi grafik performa kolektor bulanan ke file PDF untuk dibagikan ke jajaran manajemen." }
            ].map(saran => (
              <div key={saran.num} className="p-3 rounded-xl bg-brand-card/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-brand-cyan font-mono font-bold uppercase">{saran.t}</span>
                    <span className="text-[10px] text-slate-600 font-mono">SARAN {saran.num}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-relaxed">{saran.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] font-mono text-slate-500">
        <span>Frendhy Zhuang — Universitas Multimedia Nusantara</span>
        <span>Simpulan Sidang Magang Informatika 2026</span>
      </div>
    </div>
  );
};

// ==========================================
// 9. THANK YOU SLIDE (Q&A SESSION)
// ==========================================
export const SlideThankYou: React.FC<SlideProps> = ({ onSlideJump }) => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center p-6 text-center select-text">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-cyan/20 blur-3xl animate-pulse-slow"></div>
        <svg className="w-full h-full text-slate-800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-thanks" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-thanks)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        <DuniaKimiaJayaLogo className="w-24 h-20 mb-6" showText={false} />

        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-cyan/20 font-mono text-xs text-brand-cyan font-bold tracking-widest uppercase">
          Q&A SESSION • TANYA JAWAB
        </div>

        <h1 className="mt-6 font-display font-extrabold text-5xl sm:text-6xl tracking-tight text-white leading-none uppercase drop-shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          THANK YOU
        </h1>

        <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full my-6"></div>

        <p className="max-w-md text-sm text-slate-400 font-sans leading-relaxed">
          Terima kasih atas bimbingan Ibu Dr. Nunik Afriliana, Ibu Angelicha, Bapak Herman, serta dewan penguji yang saya hormati.
        </p>

        {/* Home trigger */}
        <div className="mt-8 flex gap-3">
          <button 
            onClick={() => onSlideJump && onSlideJump('cover')}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs font-bold tracking-wide transition-all border border-slate-800"
          >
            Kembali ke Cover
          </button>
          <button 
            onClick={() => onSlideJump && onSlideJump('dashboard-demo')}
            className="px-5 py-2 rounded-xl bg-brand-blue text-white hover:bg-brand-blue/80 font-mono text-xs font-bold tracking-wide transition-all shadow-glow-blue flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Mulai Live Demo</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
