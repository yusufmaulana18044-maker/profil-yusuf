# Portofolio Resmi & Profil Profesional — Yusuf Maulana Wakhidul Qohar

[![Standar SKKNI](https://img.shields.io/badge/Standar-SKKNI%20Junior%20Web%20Dev-blue.svg)](https://bnsp.go.id)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20PHP%20%7C%20MySQL%20%7C%20AI-cyan.svg)](#keahlian)
[![Status](https://img.shields.io/badge/Status-Terbuka%20untuk%20Kerja%20%26%20Proyek-emerald.svg)](#kontak)
[![Domisili](https://img.shields.io/badge/Domisili-Ponorogo%2C%20Jawa%20Timur-orange.svg)](#tentang)

Repositori ini memuat kode sumber lengkap website portofolio profesional dan dokumentasi karya **Yusuf Maulana Wakhidul Qohar**, seorang *Junior Web Developer* bersertifikasi standar SKKNI (LSP/BNSP) dari Ponorogo, Jawa Timur.

Platform ini dibangun dengan 13 bagian fitur komprehensif, arsitektur modular multi-berkas (*multi-file architecture*), serta halaman demonstrasi interaktif tanpa ketergantungan *framework* yang berat.

---

## 📑 Daftar Isi 13 Bagian Portofolio

Sesuai dengan panduan struktur profil standar industri, website ini mencakup:

1. **Header / Navbar:** Logo/avatar berstatus aktif, nama lengkap, navigasi tautan 13 bagian, pengalih tema (*Dark/Light Mode*), dan tombol aksi cepat.
2. **Hero / Beranda:** Nama lengkap, profesi dinamis (*typing animation*), tagline, foto profesional, tombol kontak WhatsApp langsung, dan ringkasan angka pencapaian (*stats counter*).
3. **Tentang Saya:** Biodata ringkas (domisili Ponorogo, ketersediaan kerja, bahasa), bidang keahlian utama, dan prinsip/visi pribadi yang humanis.
4. **Profil Profesional:** Tiga pilar karir: Jabatan (*Junior Web Developer*), Instansi (*Pendidikan Kejuruan SMK & LSP/SKKNI*), dan Bidang yang Ditekuni (*Full-Stack Dasar, AI & KKA*).
5. **Pendidikan:** Riwayat pendidikan kronologis dari terbaru ke terlama (LSP SKKNI 2026, SMK TI 2023–2026, SMPN 1 Jetis Ponorogo 2020–2023).
6. **Pengalaman:** 4 pilar rekam jejak berfilter interaktif: Belajar & Praktik, Bekerja/Magang UMKM Riil, Proyek Web Mandiri, dan Organisasi Komunitas.
7. **Keahlian:** Matriks skill (Coding, AI Prompting, KKA/Analisis Data, dan Tools) lengkap dengan persentase dan indikator tingkat kemampuan (*Mahir / Menengah / Dasar*).
8. **Karya / Portofolio:** Galeri proyek (Website Batik Sekar Reyog, Web Portofolio, Sistem CRUD, Modul KKA, Simulator SQL, AI Prompt Assistant) dengan modal detail dan link live demo.
9. **Sertifikat / Prestasi:** Sertifikasi resmi BNSP/SKKNI, Pelatihan Vokasi Web Dinamis, Penghargaan Digitalisasi UMKM, dan Sertifikat Workshop AI.
10. **Kegiatan:** Dokumentasi visual UKK Live Coding di Lab Komputer, Riset Lapangan UMKM Kauman, Workshop AI, dan Komunitas Belajar Sejawat.
11. **Artikel / Blog:** Tutorial praktis (PHP & MySQL, AI untuk Junior Dev, Tips Clean Code HTML5/CSS3, Studi Kasus Digitalisasi Batik) dengan modal pembaca dan cuplikan kode yang dapat disalin.
12. **Kontak:** Salin email 1-klik, generator pesan WhatsApp otomatis, alamat domisili Ponorogo, formulir kontak interaktif, dan media sosial resmi.
13. **Footer:** Identitas resmi, hak cipta SKKNI, navigasi cepat 13 seksi, dan tombol kembali ke atas (*Back to Top*).

---

## 🗂️ Struktur Berkas & Direktori Proyek

```plaintext
profil-yusuf/
├── index.html              # Halaman beranda utama (13 bagian lengkap)
├── cv.html                 # Halaman CV resmi siap cetak (A4 ATS-friendly)
├── katalog-batik.html      # Sub-halaman live demo interaktif Batik Sekar Reyog
├── sql-playground.html     # Sub-halaman simulator kueri database SQL di browser
├── css/
│   ├── style.css           # Desain sistem inti, tema ganda, dan layout responsif
│   ├── components.css      # Komponen UI: modal, playground, badge, dan kartu
│   └── print.css           # Styling cetak A4 dan ekspor dokumen PDF
├── js/
│   ├── data.js             # Modul data terpusat (portofolio, sertifikat, artikel)
│   ├── utils.js            # Utilitas pembantu (toast, clipboard copy, WA builder)
│   └── script.js           # Engine interaktif utama (filter, modal, scroll spy)
├── images/
│   ├── profile-original.jpeg
│   └── profile-square.jpg  # Foto profil profesional
├── site.webmanifest        # Konfigurasi PWA Web Application
├── robots.txt              # Konfigurasi perayapan mesin pencari
├── sitemap.xml             # Peta situs untuk SEO Google
└── README.md               # Dokumentasi lengkap proyek
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Proyek ini menggunakan teknologi standar web murni (*HTML5, Vanilla CSS3, JavaScript ES6*) sehingga dapat dijalankan tanpa perlu proses *build* (*zero-build dependency*):

### Opsi 1: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder `profil-yusuf` di **Visual Studio Code**.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey) jika belum terpasang.
3. Klik kanan pada berkas `index.html` lalu pilih **"Open with Live Server"**.
4. Website akan terbuka otomatis di peramban pada alamat `http://127.0.0.1:5500/index.html`.

### Opsi 2: Menggunakan XAMPP / Laragon
1. Salin atau pindahkan folder `profil-yusuf` ke dalam direktori `htdocs` (untuk XAMPP) atau `www` (untuk Laragon).
2. Jalankan modul Apache pada *Control Panel*.
3. Buka peramban dan akses alamat: `http://localhost/profil-yusuf/`.

---

## 🛠️ Ringkasan Teknologi yang Digunakan

- **Front-End:** HTML5 Semantik, CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism, Micro-Animations), JavaScript ES6+.
- **Back-End & Basis Data:** PHP Native, MySQL Server, phpMyAdmin, XAMPP Environment.
- **AI Integration:** Prompt Engineering terarah (ChatGPT, Claude, Google Gemini) untuk akselerasi pemecahan masalah (*debugging*) dan dokumentasi.
- **Tools & Workflow:** Visual Studio Code, Git & GitHub, LocalStorage API, Clipboard API, Web Audio API.

---

## 📬 Kontak & Kolaborasi

- **Nama Lengkap:** Yusuf Maulana Wakhidul Qohar
- **Domisili:** Ponorogo, Jawa Timur, Indonesia
- **Email:** [yusufmwakhidul@gmail.com](mailto:yusufmwakhidul@gmail.com)
- **WhatsApp:** [+62 852-3118-0206](https://wa.me/6285231180206)
- **GitHub:** [yusufmaulana18044-maker](https://github.com/yusufmaulana18044-maker)
- **Instagram:** [@ysfmaulnawakhidqhar_](https://www.instagram.com/ysfmaulnawakhidqhar_?stkn=bjN3emljOXRxNHB4&utm_source=qr)

---
*© 2026 Yusuf Maulana Wakhidul Qohar. Didesain dengan Standar Kompetensi Kerja Nasional Indonesia (SKKNI) — Skema Junior Web Developer.*
