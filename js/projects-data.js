/**
 * Portfolio Project Data Dictionary
 * Wahyu Pambudi, S.Kom.
 * Single Source of Truth for projects.html & index.html
 */
const projectDatabase = {
    eduplan: {
        title: "EduPlan — Platform Otomasi Administrasi Guru",
        domain: "eduplan.web.id",
        category: "Web App & SaaS",
        role: "Lead Full-Stack Developer",
        year: "2024",
        status: "Production / Live",
        tech: ["PHP", "Tailwind CSS", "MySQL", "OpenAI API Integration", "REST API"],
        description: "EduPlan dirancang secara khusus untuk meringankan beban administratif para pendidik di Indonesia. Platform ini memfasilitasi pembuatan modul ajar, Alur Tujuan Pembelajaran (ATP), dan perangkat asesmen otomatis dengan bantuan model bahasa cerdas.",
        features: [
            "Generator Modul Ajar terstandar Kurikulum Merdeka",
            "Export file administrasi dalam format siap cetak (DOCX / PDF)",
            "Manajemen Bank Soal dan Rubrik Asesmen Diagnostik",
            "Dashboard kolaborasi guru antar mata pelajaran"
        ],
        liveUrl: "https://eduplan.web.id"
    },
    simpkl: {
        title: "SIMPKL — Sistem Informasi Manajemen PKL Siswa SMK",
        domain: "simpkl.eduplan.web.id",
        category: "Sistem Informasi Sekolah",
        role: "Full-Stack System Architect",
        year: "2024",
        status: "Production / Live",
        tech: ["PHP", "Node.js", "MySQL", "Leaflet Geo-Location", "REST API"],
        description: "Sistem terpadu untuk digitalisasi alur Praktik Kerja Lapangan (PKL) siswa SMK. Menghubungkan 3 entitas penting: Siswa, Guru Pembimbing, dan Mentor Perusahaan (DUDI) secara transparan.",
        features: [
            "Presensi kehadiran siswa harian dengan validasi titik koordinat GPS",
            "Pengisian logbook jurnal aktivitas harian & unggah dokumentasi foto",
            "Monitoring jarak jauh oleh guru pembimbing",
            "Input rekap penilaian sertifikat akhir magang otomatis"
        ],
        liveUrl: "https://simpkl.eduplan.web.id"
    },
    sibeje: {
        title: "SIBEJE — Sistem Inventaris Sarpras Lab Komputer",
        domain: "Internal Lab Deployment",
        category: "Internal Web App",
        role: "Backend & Frontend Developer",
        year: "2024",
        status: "Completed",
        tech: ["Node.js (Express.js)", "Sequelize ORM", "React.js", "JWT", "QR Code Engine"],
        description: "Aplikasi manajemen dan pelacakan sarana-prasarana laboratorium komputer. Mempermudah teknisi lab mendata spesifikasi hardware, riwayat perbaikan (maintenance log), dan peminjaman inventaris.",
        features: [
            "Autentikasi role-based (Admin Lab, Teknisi, Siswa)",
            "Generator label barcode & QR-Code unik untuk setiap perangkat lab",
            "Scanning QR Code instan melalui smartphone untuk mengecek status alat",
            "Cetak rekap PDF inventaris periodik untuk pelaporan manajemen sekolah"
        ],
        liveUrl: null
    },
    aiwriter: {
        title: "AwonapaKarya AI Writer Plugin",
        domain: "WordPress Extension",
        category: "Tools & AI Plugins",
        role: "WordPress Plugin Developer",
        year: "2024",
        status: "Production",
        tech: ["PHP 8+", "WordPress Plugin API", "REST API", "Anthropic / OpenAI API"],
        description: "Custom plugin WordPress untuk mempercepat workflow pembuatan artikel konten pilar dan artikel edukatif. Mampu menghasilkan artikel bernilai SEO tinggi dengan struktur rapi dalam hitungan detik.",
        features: [
            "Penulisan artikel terstruktur (H2, H3, FAQ list, Meta Description)",
            "Auto-categorization dan penentuan tag yang relevan otomatis",
            "Integrasi pengaturan jadwal publish (Scheduled Draft/Post)",
            "Pencegahan duplikasi konten dan format Markdown ke Guttenberg Block"
        ],
        liveUrl: null
    },
    ecommerce: {
        title: "Platform E-Commerce & Retail Klien UMKM",
        domain: "tokogrosirdefan.com & Partner Stores",
        category: "E-Commerce",
        role: "WordPress & WooCommerce Specialist",
        year: "2023 - 2024",
        status: "Production / Live",
        tech: ["WordPress", "WooCommerce", "RajaOngkir API", "Payment Gateway", "Speed Optimization"],
        description: "Pengembangan puluhan website toko online klien (seperti Toko Grosir Defan, 391printing, perdana gadget) dengan fokus pada konversi checkout tinggi serta kecepatan akses.",
        features: [
            "Kalkulasi ongkos kirim real-time JNE, J&T, SiCepat, Pos Indonesia",
            "Integrasi pembayaran otomatis QRIS, Virtual Account, & WhatsApp Checkout",
            "Desain responsif mobile-first untuk kenyamanan belanja dari ponsel",
            "Optimasi Core Web Vitals untuk skor loading yang ringan"
        ],
        liveUrl: null
    },
    travelindo: {
        title: "Travelindo & Accessibility Web Prototype",
        domain: "Web Booking System",
        category: "Web Application",
        role: "Web Developer",
        year: "2023",
        status: "Completed",
        tech: ["PHP", "MySQL", "Bootstrap", "React.js", "Accessibility Standards (WCAG)"],
        description: "Platform pemesanan tiket perjalanan wisata dengan kemudahan eksplorasi paket perjalanan, riwayat transaksi user, serta implementasi standar aksesibilitas web bagi pengguna difabel.",
        features: [
            "Katalog paket wisata lengkap dengan rincian destinasi dan harga",
            "Sistem booking kursi dan konfirmasi transfer",
            "Panel admin manajemen armada dan jadwal keberangkatan",
            "Desain kontras tinggi & navigasi keyboard friendly"
        ],
        liveUrl: null
    },
    pklmonitor: {
        title: "PKL Monitor Dashboard (cPanel Ready)",
        domain: "cPanel Ready App",
        category: "Internal Web App",
        role: "Full-Stack Developer",
        year: "2024",
        status: "Completed",
        tech: ["Python", "Flask", "Tailwind CSS", "MySQL", "cPanel Deployment"],
        description: "Dashboard monitoring kegiatan PKL siswa berbasis Python Flask yang dirancang fleksibel untuk dapat di-host langsung pada shared hosting cPanel menggunakan Passenger WSGI.",
        features: [
            "Konfigurasi deployment otomatis Passenger WSGI untuk cPanel",
            "Visualisasi grafik kehadiran siswa real-time",
            "Export data log aktivitas siswa dalam format Excel/CSV",
            "Manajemen akun siswa dan guru pembimbing"
        ],
        liveUrl: null
    },
    awonapa: {
        title: "Awonapa.com — IT & Programming Blog Media",
        domain: "awonapa.com",
        category: "Media & Content",
        role: "Founder & Technical Writer",
        year: "2020 - Sekarang",
        status: "Production / Live",
        tech: ["Blogger Engine", "Custom HTML/CSS", "SEO Optimization", "Google AdSense"],
        description: "Portal media pembelajaran seputar dunia teknologi informasi, tutorial Linux server, web development, dan jaringan komputer yang diakses ribuan pembaca setiap bulannya.",
        features: [
            "Optimasi Core Web Vitals skor di atas 90+",
            "Ratusan artikel edukasi IT dan tutorial pemrograman praktis",
            "Desain mobile-first yang bersih dan ramah pembaca"
        ],
        liveUrl: "https://awonapa.com"
    }
};
