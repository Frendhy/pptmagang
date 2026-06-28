import { SlideData, OrgNode, CustomerAR, DatabaseTable } from './types';

export const SLIDES_METADATA: SlideData[] = [
  {
    id: 'cover',
    title: 'Rancang Bangun Back-End Website Account Receivable',
    subTitle: 'Untuk Mendukung Pengelolaan Piutang Pada PT Dunia Kimia Jaya',
    moduleName: 'COVER PRESENTASI',
    speakerNotes: [
      'Selamat pagi dewan penguji dan dosen pembimbing.',
      'Perkenalkan saya Frendhy Zhuang, mahasiswa Program Studi Informatika UMN 2023.',
      'Hari ini saya akan mempresentasikan laporan magang saya yang berjudul "Rancang Bangun Back-End Website Account Receivable Untuk Mendukung Pengelolaan Piutang Pada PT Dunia Kimia Jaya".',
      'Magang ini berjalan selama 6 bulan penuh di divisi IT, berkolaborasi dengan divisi Accounting.'
    ]
  },
  {
    id: 'background',
    title: 'Latar Belakang Masalah',
    subTitle: 'Transformasi Digital Pengelolaan Piutang Usaha',
    moduleName: 'MODULE 1 • LATAR BELAKANG',
    speakerNotes: [
      'Mari kita mulai dengan Latar Belakang Masalah di PT Dunia Kimia Jaya.',
      'Sebelumnya, pengelolaan data accounts receivable (piutang) dilakukan secara manual menggunakan banyak file spreadsheet excel.',
      'Metode ini menimbulkan beberapa kendala krusial, antara lain: 1) Terjadinya redundansi data yang masif, 2) Proses pencarian informasi dan invoice yang sangat lambat karena terpisah-pisah, 3) Tidak adanya integrasi database yang terstruktur, 4) Pemantauan jatuh tempo tagihan yang tidak real-time, serta 5) Efisiensi laporan keuangan yang rendah.',
      'Oleh karena itu, diperlukan sebuah sistem backend terpusat untuk memproses data piutang secara akurat, aman, dan efisien.'
    ]
  },
  {
    id: 'objectives',
    title: 'Maksud, Tujuan & Kerangka Kerja',
    subTitle: 'Target Pengembangan & Implementasi Sistem',
    moduleName: 'MODULE 2 • KERANGKA KERJA',
    speakerNotes: [
      'Terdapat beberapa maksud dan tujuan utama dari program magang ini.',
      'Maksud utama adalah mengaplikasikan keilmuan Informatika ke dunia kerja nyata, khususnya di bidang backend engineering.',
      'Sedangkan tujuan sistem yang dibangun adalah:',
      '1. Meningkatkan efisiensi waktu dengan otomatisasi kalkulasi metrik piutang.',
      '2. Merancang database yang ternormalisasi (MySQL) guna menghilangkan redundansi.',
      '3. Mengimplementasikan Role-Based Access Control (RBAC) dengan 3 level akses: Admin, Manager, dan Collector untuk menjamin keamanan finansial.',
      '4. Menyediakan sistem pengingat (AR Reminder) otomatis melalui gateway email dan WhatsApp link.'
    ]
  },
  {
    id: 'company',
    title: 'Profil & Struktur PT Dunia Kimia Jaya',
    subTitle: 'Gambaran Umum Mitra Industri',
    moduleName: 'MODULE 3 • PROFIL MITRA',
    speakerNotes: [
      'PT Dunia Kimia Jaya merupakan anak perusahaan dari PT Lautan Luas Tbk yang bergerak di bidang manufaktur bahan kimia khusus.',
      'Perusahaan ini berdiri sejak 1977 dan memiliki komitmen tinggi terhadap kualitas mutu serta keselamatan kerja dengan standar sertifikasi ISO.',
      'Secara struktur organisasi, pimpinan tertinggi adalah Director.',
      'Di bawahnya terdapat beberapa pimpinan divisi, termasuk MIS (Management Information System) Manager (Ibu Angelicha) yang membawahi tim IT, serta Financial Controller Manager yang bertanggung jawab atas arus keuangan piutang.',
      'Kolaborasi sistem AR Dashboard ini menjembatani infrastruktur IT MIS dengan aktivitas penagihan divisi Accounting.'
    ]
  },
  {
    id: 'architecture',
    title: 'Arsitektur Sistem & Skema Database',
    subTitle: 'Normalisasi Data & Perancangan Schema ERD',
    moduleName: 'MODULE 4 • ARSITEKTUR TEKNIS',
    speakerNotes: [
      'Pada bagian implementasi teknis, saya merancang backend menggunakan framework Laravel.',
      'Arsitektur database dirancang terstruktur menggunakan skema relasional MySQL, menggantikan pencatatan manual di Excel.',
      'Sistem yang saya bangun dinamakan dkj_ar_dashboard.',
      'ERD terdiri dari 8 entitas utama: Users, Plants, Collectors, Customers, Invoices, Sales, Trade, dan AR_Records.',
      'Setiap tabel saling terhubung melalui relasi foreign key yang ketat demi menjaga integritas data (data integrity).',
      'Kita memproses agregasi data secara terpusat di server (server-side reduction) untuk meningkatkan kinerja rendering frontend.'
    ]
  },
  {
    id: 'dashboard-demo',
    title: 'Halaman AR Dashboard & AR Aging',
    subTitle: 'Interactive Live Simulation of Backend Logic',
    moduleName: 'MODULE 5 • DEMO FITUR',
    speakerNotes: [
      'Ini adalah modul utama dari website: AR Dashboard Overview dan AR Aging Analysis.',
      'Sistem mengagregasi data piutang secara asinkronus (AJAX) dan memproses kalkulasi keuangan di sisi server.',
      'Ada 4 kartu metrik keuangan (KPI cards): 1) Total AR Outstanding, 2) Collected (Dana berhasil ditarik), 3) Collection Rate (Persentase pencapaian target), dan 4) Overdue Customers.',
      'AR Aging mengklasifikasikan piutang secara otomatis di tingkat database berdasarkan umur tagihan menjadi 5 kategori: Current, 1-30 hari, 30-60 hari, 60-90 hari, dan lebih dari 90 hari.',
      'Presenter dapat mendemonstrasikan perubahan filter pabrik (Plant) atau kolektor secara langsung di slide ini.'
    ]
  },
  {
    id: 'reminder-demo',
    title: 'Sistem Pengingat Piutang Otomatis',
    subTitle: 'AR Reminder Gateway Gateway Sandbox',
    moduleName: 'MODULE 6 • REMINDER GATEWAY',
    speakerNotes: [
      'Berikut adalah fitur AR Reminder, yang sangat membantu kerja kolektor di lapangan.',
      'Sistem secara cerdas menghitung tanggal jatuh tempo pada server dan memberikan label urgensi otomatis (Overdue, Critical, Urgent, Soon).',
      'Kolektor dapat mengirim pengingat dengan 2 metode:',
      '1. Email Reminder: Memanfaatkan SMTP server dengan template HTML dinamis.',
      '2. WhatsApp Reminder: Menyusun teks terformat otomatis menggunakan pengkodean string URL.',
      'Fitur ini mendukung pengiriman tunggal maupun massal (bulk processing). Mari kita coba mengirim notifikasi simulasi di sandbox ini.'
    ]
  },
  {
    id: 'issues',
    title: 'Kendala Teknis & Solusi',
    subTitle: 'Analisis Tantangan & Strategi Penyelesaian',
    moduleName: 'MODULE 7 • EVALUASI TEKNIS',
    speakerNotes: [
      'Selama proses pengerjaan, saya menghadapi beberapa kendala.',
      'Kendala pertama adalah keterlambatan dalam memperoleh dokumen pendukung kebutuhan data dari divisi Accounting.',
      'Solusinya, saya melakukan perbaikan bug, testing kode, serta optimasi query pada database yang sudah ada agar produktivitas tetap terjaga.',
      'Kendala kedua adalah seringnya terjadi perubahan persyaratan (requirement changes) dari pihak Accounting setelah demo fitur.',
      'Solusinya, saya meningkatkan intensitas komunikasi harian dan meminta daftar revisi terstruktur secara tertulis sebelum mulai mengubah kode program. Hal ini menghindari perubahan redundan.'
    ]
  },
  {
    id: 'conclusion',
    title: 'Simpulan & Saran Pengembangan',
    subTitle: 'Akhir Laporan & Rekomendasi Masa Depan',
    moduleName: 'MODULE 8 • SIMPULAN',
    speakerNotes: [
      'Sebagai simpulan, sistem backend AR Dashboard berbasis Laravel & MySQL telah berhasil dirancang dan diimplementasikan dari awal (from scratch).',
      'Sistem terbukti mampu mendigitalisasi pencatatan piutang manual, mempermudah pelacakan status pembayaran pelanggan secara real-time, meningkatkan efisiensi waktu, serta menjaga keamanan data melalui otorisasi peran (RBAC).',
      'Untuk saran pengembangan masa depan:',
      '1. Menambahkan scheduled reminder otomatis terjadwal menggunakan Laravel Scheduler.',
      '2. Membuat log riwayat pengiriman reminder (terkirim, gagal, dibaca).',
      '3. Fitur mass upload data AR via Excel/CSV.',
      '4. Ekspor grafik analitik ke dalam format PDF siap cetak.'
    ]
  },
  {
    id: 'thanks',
    title: 'Terima Kasih',
    subTitle: 'Sesi Tanya Jawab (Q&A Session)',
    moduleName: 'PENUTUP',
    speakerNotes: [
      'Sekian presentasi laporan magang saya di PT Dunia Kimia Jaya.',
      'Terima kasih kepada dosen pembimbing Ibu Dr. Nunik Afriliana dan supervisor magang Ibu Angelicha.',
      'Saya siap membuka sesi tanya jawab untuk menerima kritik, saran, serta pertanyaan dari dewan penguji.'
    ]
  }
];

export const COMPANY_STRUCTURE: OrgNode = {
  id: 'dir',
  title: 'Director',
  name: 'Board of Directors',
  department: 'Executive Management',
  role: 'Menetapkan kebijakan strategis korporat serta mengawasi seluruh aktivitas operasional bisnis perusahaan.',
  description: 'Top Executive',
  children: [
    {
      id: 'mis',
      title: 'MIS Manager',
      name: 'Angelicha Aminah Zairuni Ussu',
      department: 'MIS Department',
      role: 'Mengelola infrastruktur sistem informasi, teknologi jaringan, keamanan siber, serta membimbing tim IT dalam digitalisasi bisnis.',
      description: 'Supervisor Magang Frendhy'
    },
    {
      id: 'fc',
      title: 'Financial Controller Manager',
      name: 'Finance Division Head',
      department: 'Finance & Accounting',
      role: 'Mengelola aspek keuangan perusahaan, perencanaan anggaran, arus kas, audit internal, serta bertanggung jawab penuh atas piutang (Accounts Receivable).',
      description: 'User Utama Sistem'
    },
    {
      id: 'scm',
      title: 'Supply Chain Manager',
      name: 'Logistics Division Head',
      department: 'Supply Chain Management',
      role: 'Mengelola rantai pasok material, pengadaan bahan baku manufaktur kimia, inventaris gudang, serta kelancaran distribusi produk ke pelanggan.',
      description: 'Operations Liaison'
    },
    {
      id: 'qhse',
      title: 'QHSE & MR Manager',
      name: 'Quality & Safety Head',
      department: 'Quality Control, Health & Safety',
      role: 'Memastikan standar kualitas produk kimia terjaga, serta menerapkan aturan kesehatan, keselamatan kerja (K3), dan kelestarian lingkungan hidup.',
      description: 'Compliance Head'
    }
  ]
};

export const DATABASE_SCHEMA: DatabaseTable[] = [
  {
    name: 'users',
    description: 'Menyimpan kredensial pengguna internal website dkj_ar_dashboard.',
    columns: [
      { name: 'id', type: 'bigint (PK)' },
      { name: 'name', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'password', type: 'string' },
      { name: 'role', type: 'enum (Admin, Manager, Collector)' },
      { name: 'created_at', type: 'timestamp' }
    ]
  },
  {
    name: 'plants',
    description: 'Menyimpan kode dan deskripsi unit pabrik PT Dunia Kimia Jaya.',
    columns: [
      { name: 'id', type: 'bigint (PK)' },
      { name: 'code', type: 'string (e.g. 1511)' },
      { name: 'name', type: 'string (e.g. Plant Cikarang)' },
      { name: 'created_at', type: 'timestamp' }
    ]
  },
  {
    name: 'collectors',
    description: 'Menyimpan data staf penagih (Collector) piutang.',
    columns: [
      { name: 'id', type: 'bigint (PK)' },
      { name: 'user_id', type: 'bigint (FK)', ref: 'users.id' },
      { name: 'name', type: 'string' },
      { name: 'created_at', type: 'timestamp' }
    ]
  },
  {
    name: 'customers',
    description: 'Menyimpan profil lengkap pembeli/customer bahan kimia.',
    columns: [
      { name: 'id', type: 'bigint (PK)' },
      { name: 'collector_id', type: 'bigint (FK)', ref: 'collectors.id' },
      { name: 'plant_id', type: 'bigint (FK)', ref: 'plants.id' },
      { name: 'customer_id', type: 'string (Code)' },
      { name: 'customer_name', type: 'string' },
      { name: 'plc_name', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'whatsapp_number', type: 'string' },
      { name: 'created_at', type: 'timestamp' }
    ]
  },
  {
    name: 'invoices',
    description: 'Menyimpan faktur tagihan transaksi penjualan komersial.',
    columns: [
      { name: 'id', type: 'bigint (PK)' },
      { name: 'customer_id', type: 'bigint (FK)', ref: 'customers.id' },
      { name: 'due_date', type: 'date' },
      { name: 'baseline_date', type: 'date' },
      { name: 'currency_type', type: 'string (IDR/USD)' },
      { name: 'amount_paid', type: 'decimal' }
    ]
  },
  {
    name: 'ar_records',
    description: 'Menghitung breakdown umur piutang per periode penagihan.',
    columns: [
      { name: 'id', type: 'bigint (PK)' },
      { name: 'invoice_id', type: 'bigint (FK)', ref: 'invoices.id' },
      { name: 'amount_current', type: 'decimal' },
      { name: 'amount_1_30_days', type: 'decimal' },
      { name: 'amount_30_60_days', type: 'decimal' },
      { name: 'amount_60_90_days', type: 'decimal' },
      { name: 'amount_over_90_days', type: 'decimal' },
      { name: 'total_ar', type: 'decimal' },
      { name: 'ar_target', type: 'decimal' },
      { name: 'ar_actual', type: 'decimal' }
    ]
  },
  {
    name: 'collection_logs',
    description: 'Menyimpan kronologis aktivitas penagihan piutang.',
    columns: [
      { name: 'id', type: 'bigint (PK)' },
      { name: 'ar_record_id', type: 'bigint (FK)', ref: 'ar_records.id' },
      { name: 'user_id', type: 'bigint (FK)', ref: 'users.id' },
      { name: 'amount_collected', type: 'decimal' },
      { name: 'notes', type: 'text' },
      { name: 'collected_at', type: 'timestamp' }
    ]
  }
];

export const MOCK_CUSTOMERS_AR: CustomerAR[] = [
  {
    id: 'c1',
    customerName: 'PUPUK LAPAN HARSA',
    customerCode: 'CUST-00921',
    collectorName: 'Miya',
    plantCode: 'Plant 1512',
    totalAR: 16200000000,
    current: 10200000000,
    over30: 4500000000,
    over60: 1500000000,
    over90: 0,
    target: 10200000000,
    actual: 10100000000,
    status: 'Achieved',
    riskLevel: 'Medium',
    email: 'keuangan@lapanharsa.co.id',
    phone: '6281234560001',
    invoicesCount: 60
  },
  {
    id: 'c2',
    customerName: 'EAGLE INDO PHARMA',
    customerCode: 'CUST-00412',
    collectorName: 'Mega',
    plantCode: 'Plant 1511',
    totalAR: 4000000000,
    current: 2500000000,
    over30: 1500000000,
    over60: 0,
    over90: 0,
    target: 2700000000,
    actual: 2680000000,
    status: 'Achieved',
    riskLevel: 'Low',
    email: 'ar@eagleindo.co.id',
    phone: '6281234560002',
    invoicesCount: 84
  },
  {
    id: 'c3',
    customerName: 'GUANLONG PACKINGS INDONESIA',
    customerCode: 'CUST-00819',
    collectorName: 'Mega',
    plantCode: 'Plant 1511',
    totalAR: 2700000000,
    current: 0,
    over30: 1200000000,
    over60: 1000000000,
    over90: 500000000,
    target: 1800000000,
    actual: 1780000000,
    status: 'Achieved',
    riskLevel: 'High',
    email: 'finance@guanlong.co.id',
    phone: '6281234560003',
    invoicesCount: 12
  },
  {
    id: 'c4',
    customerName: 'ASIETEX SINAR INDOPRATAMA',
    customerCode: 'CUST-00201',
    collectorName: 'Viona',
    plantCode: 'Plant 1511',
    totalAR: 1040000000,
    current: 400000000,
    over30: 324000000,
    over60: 316000000,
    over90: 0,
    target: 1100000000,
    actual: 1080000000,
    status: 'Achieved',
    riskLevel: 'Medium',
    email: 'billing@asietex.co.id',
    phone: '6281234560004',
    invoicesCount: 15
  },
  {
    id: 'c5',
    customerName: 'INDOFOOD CBP SUKSES MAKMUR',
    customerCode: 'CUST-00551',
    collectorName: 'Mega',
    plantCode: 'Plant 1511',
    totalAR: 1000000000,
    current: 1000000000,
    over30: 0,
    over60: 0,
    over90: 0,
    target: 1220000000,
    actual: 1210000000,
    status: 'Achieved',
    riskLevel: 'Low',
    email: 'icbp.finance@indofood.co.id',
    phone: '6281234560005',
    invoicesCount: 22
  },
  {
    id: 'c6',
    customerName: 'EASTERN TEXTILE',
    customerCode: 'CUST-00388',
    collectorName: 'Viona',
    plantCode: 'Plant 1511',
    totalAR: 1100000000,
    current: 1100000000,
    over30: 0,
    over60: 0,
    over90: 0,
    target: 780000000,
    actual: 770000000,
    status: 'Achieved',
    riskLevel: 'Low',
    email: 'ap@easterntex.com',
    phone: '6281234560006',
    invoicesCount: 9
  },
  {
    id: 'c7',
    customerName: 'INDOPORT CBP SUKSES MAKMUR',
    customerCode: 'CUST-00109',
    collectorName: 'Mega',
    plantCode: 'Plant 1511',
    totalAR: 1010000000,
    current: 1010000000,
    over30: 0,
    over60: 0,
    over90: 0,
    target: 690000000,
    actual: 680000000,
    status: 'Achieved',
    riskLevel: 'Low',
    email: 'indoport.fin@indoport.co.id',
    phone: '6281234560007',
    invoicesCount: 14
  },
  {
    id: 'c8',
    customerName: 'MUSIM MAS CHEMICALS',
    customerCode: 'CUST-00701',
    collectorName: 'Risa',
    plantCode: 'Plant 1515',
    totalAR: 1000000000,
    current: 1000000000,
    over30: 0,
    over60: 0,
    over90: 0,
    target: 680000000,
    actual: 670000000,
    status: 'Achieved',
    riskLevel: 'Low',
    email: 'finance.mmc@musimmas.com',
    phone: '6281234560008',
    invoicesCount: 40
  },
  {
    id: 'c9',
    customerName: 'ASEITEX SINAR INDOPRATAMA',
    customerCode: 'CUST-00210',
    collectorName: 'Viona',
    plantCode: 'Plant 1511',
    totalAR: 1040000000,
    current: 716000000,
    over30: 324000000,
    over60: 0,
    over90: 0,
    target: 1100000000,
    actual: 1080000000,
    status: 'Achieved',
    riskLevel: 'Medium',
    email: 'aseitex.fin@asietex.co.id',
    phone: '6281234560009',
    invoicesCount: 15
  },
  {
    id: 'c10',
    customerName: 'BUANA KARYA INDAH',
    customerCode: 'CUST-00104',
    collectorName: 'Miya',
    plantCode: 'Plant 1512',
    totalAR: 5200000000,
    current: 1200000000,
    over30: 2500000000,
    over60: 1500000000,
    over90: 0,
    target: 4000000000,
    actual: 1500000000,
    status: 'Partial',
    riskLevel: 'High',
    email: 'finance@buanakarya.com',
    phone: '6281234560010',
    invoicesCount: 28
  }
];
