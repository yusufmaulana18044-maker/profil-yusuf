// ============================================
// DATA ENGINE PORTOFOLIO YUSUF MAULANA
// Data terstruktur untuk Proyek, Sertifikat, Kegiatan, & Artikel
// ============================================

const PORTFOLIO_DATA = {
  profile: {
    name: "Yusuf Maulana Wakhidul Qohar",
    shortName: "Yusuf Maulana",
    role: "Siswa SMK & Junior Web Developer",
    location: "Ponorogo, Jawa Timur, Indonesia",
    email: "yusufmwakhidul@gmail.com",
    phone: "+62 852-3118-0206",
    waUrl: "https://wa.me/6285231180206",
    github: "https://github.com/yusufmaulana18044-maker",
    instagram: "https://www.instagram.com/ysfmaulnawakhidqhar_?stkn=bjN3emljOXRxNHB4&utm_source=qr",
    status: "Siswa SMK Jurusan TI • Alumni PKL RSUD Dr. Harjono Ponorogo",
    tagline: "Siswa SMK yang fokus pada pemrograman web (PHP & MySQL), berpengalaman PKL membangun sistem informasi kepegawaian (SICAKEP) di RSUD Dr. Harjono Ponorogo."
  },

  projects: {
    'sicakep': {
      id: 'sicakep',
      category: 'aplikasi',
      tag: 'Proyek PKL RSUD Dr. Harjono Ponorogo',
      title: 'SICAKEP — Sistem Informasi Catat Kepegawaian (RSUD Dr. Harjono Ponorogo)',
      shortDesc: 'Aplikasi berbasis web untuk pencatatan, pemantauan, dan administrasi data staf & pegawai rumah sakit di RSUD Dr. Harjono S. Ponorogo saat masa Praktik Kerja Lapangan (PKL).',
      featured: true,
      image: 'images/proyek-sicakep.png',
      year: '2025 - 2026',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Responsive Web', 'Sistem Kepegawaian'],
      body: `
        <div class="modal-featured-img-box">
          <img src="images/proyek-sicakep.png" alt="Sistem Informasi Catat Kepegawaian SICAKEP RSUD Dr Harjono Ponorogo" class="modal-featured-img">
        </div>
        <div class="modal-preview-box">
          <p><strong>Latar Belakang Proyek:</strong> Aplikasi nyata yang saya bangun dan kembangkan selama menjalani Praktik Kerja Lapangan (PKL) di <strong>RSUD Dr. Harjono S. Kabupaten Ponorogo</strong>. Sistem ini dirancang untuk mempermudah proses pencatatan, verifikasi data pegawai, dan pengelolaan administrasi kepegawaian rumah sakit secara terpusat.</p>
        </div>
        <h4>Fitur Utama Sistem:</h4>
        <ul class="modal-feature-list">
          <li><strong>Autentikasi & Portal Masuk Akun:</strong> Form login aman bagi staf dan admin rumah sakit untuk mengakses data pegawai sesuai hak akses.</li>
          <li><strong>Pencatatan Kepegawaian:</strong> Fasilitas pencatatan berkas, absensi/aktivitas kerja, serta data profil pegawai RSUD Dr. Harjono.</li>
          <li><strong>Antarmuka Responsif & Rapi:</strong> Tampilan visual yang bersih dengan latar instansi RSUD Dr. Harjono Ponorogo yang nyaman digunakan staf di PC kerja maupun tablet.</li>
          <li><strong>Manajemen Basis Data:</strong> Integrasi database terstruktur untuk menjamin keakuratan dan keteraturan data pegawai rumah sakit.</li>
        </ul>
        <h4>Instansi & Lingkup Kerja:</h4>
        <p><strong>Tempat PKL:</strong> RSUD Dr. Harjono S. Ponorogo, Jawa Timur<br>
        <strong>Peran:</strong> Junior Web Developer / Pengembang Aplikasi Kepegawaian</p>
      `
    },
    'batik': {
      id: 'batik',
      category: 'web-dinamis',
      tag: 'Tugas Kejuruan (PHP & MySQL)',
      title: 'Batik Sekar Reyog — Website Usaha Batik Ponorogo',
      shortDesc: 'Website e-katalog dinamis untuk mempromosikan kain batik khas Reyog Ponorogo, dilengkapi koneksi database MySQL dan pemesanan WhatsApp otomatis.',
      featured: true,
      year: '2026',
      tech: ['PHP Native', 'MySQL (phpMyAdmin)', 'HTML5', 'CSS3', 'XAMPP'],
      demoUrl: 'katalog-batik.html',
      body: `
        <div class="modal-preview-box">
          <p><strong>Latar Belakang Proyek:</strong> Proyek tugas kejuruan sekaligus aksi nyata membantu digitalisasi usaha batik lokal di Kauman, Ponorogo. Membantu pemilik usaha memajang koleksi motif batik khas Ponorogo secara online agar mudah diakses pembeli.</p>
        </div>
        <h4>Fitur Utama Sistem:</h4>
        <ul class="modal-feature-list">
          <li><strong>Manajemen Katalog Dinamis:</strong> Data nama produk, motif (Reyog, Merak, Barongan), harga, dan stok tersimpan di tabel database MySQL <code>produk_batik</code>.</li>
          <li><strong>Halaman Detail Produk:</strong> Mengambil data spesifik berdasarkan parameter ID untuk menampilkan rincian bahan dan ukuran kain.</li>
          <li><strong>Pemesanan Cepat via WhatsApp:</strong> Tombol pesan otomatis menyusun teks order lengkap dengan nama produk dan harga ke kontak pemilik usaha.</li>
          <li><strong>Tampilan Ramah HP:</strong> Tata letak responsif menggunakan CSS modern agar nyaman dibuka dari smartphone.</li>
        </ul>
        <h4>File Basis Data (MySQL):</h4>
        <p>Database: <code>db_batik_sekar</code> terdiri dari tabel <code>produk_batik</code>, <code>kategori</code>, dan <code>inquiry_pesanan</code>.</p>
        <div class="modal-actions" style="gap: 10px; flex-wrap: wrap;">
          <a href="katalog-batik.html" class="btn btn-primary">Buka Live Demo Katalog →</a>
          <a href="database/db_batik_sekar.sql" download class="btn btn-outline">📥 Unduh File SQL (db_batik_sekar.sql)</a>
          <a href="sql-playground.html" class="btn btn-ghost">⚡ Coba Kueri SQL di Browser</a>
        </div>
      `
    },
    'profil': {
      id: 'profil',
      category: 'web-statis',
      tag: 'Website Portofolio',
      title: 'Website Profil & Portofolio Personal Interaktif',
      shortDesc: 'Portofolio digital pribadi untuk merangkum hasil belajar kejuruan, proyek web, dan dokumentasi sertifikat kompetensi.',
      featured: true,
      year: '2026',
      tech: ['HTML5 Semantic', 'Vanilla CSS3', 'JavaScript ES6', 'LocalStorage API'],
      demoUrl: 'index.html',
      body: `
        <div class="modal-preview-box">
          <p><strong>Tentang Website:</strong> Website ini saya bangun sendiri menggunakan HTML, CSS, dan JavaScript murni tanpa ketergantungan framework berat. Dibuat agar ringan, cepat dibuka, dan mudah dipahami oleh guru maupun calon rekan kerja.</p>
        </div>
        <h4>Fitur-Fitur Website:</h4>
        <ul class="modal-feature-list">
          <li><strong>Mode Gelap & Terang:</strong> Pilihan tampilan Dark/Light yang tersimpan otomatis di memori browser (<code>localStorage</code>).</li>
          <li><strong>Popup Detail Interaktif:</strong> Modal penjelasan lengkap untuk setiap proyek, sertifikat, dan artikel.</li>
          <li><strong>Halaman CV Siap Cetak:</strong> Tersedia halaman resume <code>cv.html</code> dengan format bersih yang ramah cetak PDF/kertas.</li>
          <li><strong>Terhubung ke File SQL:</strong> Pengunjung dapat langsung mengunduh dan menguji file skema database proyek.</li>
        </ul>
      `
    },
    'crud': {
      id: 'crud',
      category: 'aplikasi',
      tag: 'Aplikasi CRUD (PHP & MySQL)',
      title: 'Sistem Informasi Toko Buku & Manajemen Data Siswa',
      shortDesc: 'Aplikasi berbasis web untuk pencatatan inventaris buku dan data siswa dengan operasi Create, Read, Update, Delete (CRUD) di phpMyAdmin.',
      featured: false,
      year: '2025',
      tech: ['PHP Native', 'MySQL (phpMyAdmin)', 'HTML5 Table', 'XAMPP'],
      body: `
        <div class="modal-preview-box">
          <p><strong>Tujuan Pembuatan:</strong> Mempraktikkan konsep dasar pengolahan data (CRUD) menggunakan koneksi <code>mysqli_connect</code>, penanganan form input, dan query SQL relasional di server lokal XAMPP.</p>
        </div>
        <h4>Kemampuan Aplikasi:</h4>
        <ul class="modal-feature-list">
          <li><strong>Tambah & Edit Data:</strong> Formulir input judul buku, pengarang, penerbit, harga, dan jumlah stok.</li>
          <li><strong>Pencarian Data:</strong> Filter cepat untuk menemukan judul buku atau data siswa tertentu.</li>
          <li><strong>Penghapusan Terkonfirmasi:</strong> Konfirmasi peringatan JavaScript sebelum data dihapus dari database.</li>
        </ul>
        <div class="modal-actions" style="gap: 10px; flex-wrap: wrap;">
          <a href="database/tokobuku.sql" download class="btn btn-outline">📥 Unduh File SQL (tokobuku.sql)</a>
        </div>
      `
    },
    'modul-kka': {
      id: 'modul-kka',
      category: 'modul',
      tag: 'Bahan Belajar SMK',
      title: 'Modul Belajar Logika Pemrograman & Algoritma Dasar',
      shortDesc: 'Rangkuman materi belajar mandiri mengenai algoritma dasar, alur logika flowchart, percabangan IF-ELSE, dan perulangan.',
      featured: false,
      year: '2025',
      tech: ['HTML5', 'CSS3', 'Flowchart', 'Logika Pemrograman'],
      body: `
        <div class="modal-preview-box">
          <p><strong>Deskripsi:</strong> Disusun sebagai catatan dan panduan belajar bersama rekan sekelas untuk memantapkan pemahaman logika pemrograman sebelum masuk ke bahasa pemrograman web.</p>
        </div>
        <h4>Topik Utama:</h4>
        <ul class="modal-feature-list">
          <li>Memecah masalah pemrograman ke dalam langkah-langkah teratur (algoritma pseudocode).</li>
          <li>Membuat diagram alur logika (Flowchart) percabangan kondisi dan looping.</li>
          <li>Latihan logika pengolahan data tabular sederhana.</li>
        </ul>
      `
    },
    'sql-sim': {
      id: 'sql-sim',
      category: 'modul',
      tag: 'Media Pembelajaran Database',
      title: 'Simulator Kueri SQL & Database di Browser',
      shortDesc: 'Aplikasi simulator interaktif untuk mempraktikkan kueri SQL (SELECT, WHERE, ORDER BY) secara langsung di browser tanpa ribet instalasi.',
      featured: true,
      year: '2026',
      tech: ['JavaScript Engine', 'HTML5 Table', 'CSS Responsif'],
      demoUrl: 'sql-playground.html',
      body: `
        <div class="modal-preview-box">
          <p><strong>Tentang Simulator:</strong> Media belajar yang saya kembangkan untuk membantu rekan siswa memahami bagaimana perintah kueri SQL bekerja secara visual pada baris-baris data.</p>
        </div>
        <h4>Fitur Simulator:</h4>
        <ul class="modal-feature-list">
          <li><strong>Eksekusi Kueri Langsung:</strong> Ketik perintah SQL atau klik tombol preset untuk langsung melihat hasil tabel yang terfilter.</li>
          <li><strong>Preset Kueri Umum:</strong> Contoh praktis kueri <code>WHERE kategori = 'Tulis'</code>, urutkan harga, hingga filter stok menipis.</li>
          <li><strong>Skema Nyata:</strong> Menggunakan struktur tabel <code>produk_batik</code> yang selaras dengan proyek katalog batik asli.</li>
        </ul>
        <div class="modal-actions">
          <a href="sql-playground.html" class="btn btn-primary">Buka Simulator SQL di Browser →</a>
        </div>
      `
    },
    'ai-tool': {
      id: 'ai-tool',
      category: 'aplikasi',
      tag: 'Alat Bantu Belajar',
      title: 'Template Prompt Asisten Belajar Coding',
      shortDesc: 'Template formulir terstruktur untuk membantu merumuskan pertanyaan error coding dengan jelas saat berkonsultasi ke AI.',
      featured: false,
      year: '2025',
      tech: ['JavaScript DOM', 'Clipboard API', 'HTML5'],
      body: `
        <div class="modal-preview-box">
          <p><strong>Tujuan Pembuatan:</strong> Kadang saat belajar coding, kita bingung cara menanyakan error ke ChatGPT atau Gemini. Tool ini membantu menyusun pesan yang rapi (bahasa kode, pesan error, cuplikan kode) agar AI bisa memberikan solusi yang tepat sasaran.</p>
        </div>
        <h4>Manfaat:</h4>
        <ul class="modal-feature-list">
          <li>Membiasakan menyertakan log error yang lengkap saat bertanya teknis.</li>
          <li>Mempercepat proses debugging saat mengerjakan tugas sekolah.</li>
          <li>Menghemat waktu salin-tempel prompt ke AI.</li>
        </ul>
      `
    }
  },

  certificates: {
    'skkni': {
      id: 'skkni',
      title: 'Uji Kompetensi Keahlian (UKK): Junior Web Developer',
      issuer: 'LSP / Standar Acuan SKKNI BNSP',
      year: '2026',
      badge: 'UKK Kejuruan',
      tag: 'Kompetensi Kejuruan SMK',
      status: 'DIREKOMENDASIKAN KOMPETEN (K)',
      body: `
        <div class="modal-preview-box">
          <p><strong>Skema Uji:</strong> Junior Web Developer (Standar Kompetensi Kerja Nasional Indonesia)</p>
          <p><strong>Status Hasil:</strong> <span class="text-accent" style="font-weight:700;">KOMPETEN (K)</span></p>
          <p><strong>Tempat Asesmen:</strong> Laboratorium Komputer SMK di Ponorogo</p>
        </div>
        <h4>Materi Ujian Praktik yang Dinyatakan Kompeten:</h4>
        <ul class="modal-feature-list">
          <li><strong>Struktur Data & Logika:</strong> Menerapkan variabel, array, dan fungsi logika pemrograman.</li>
          <li><strong>Antarmuka Web (UI):</strong> Merancang halaman web menggunakan HTML5 dan CSS3 yang responsif.</li>
          <li><strong>Pemrograman Sisi Server:</strong> Menulis kode PHP untuk memproses form dan menghubungkan ke database.</li>
          <li><strong>Pengelolaan Database:</strong> Merancang tabel MySQL, primary key, dan kueri SQL dasar.</li>
          <li><strong>Pengujian Program:</strong> Melakukan validasi input data dan penanganan pesan error.</li>
        </ul>
      `
    },
    'php-mysql': {
      id: 'php-mysql',
      title: 'Pelatihan Pemrograman Web Dinamis (PHP & MySQL)',
      issuer: 'Pelatihan Kejuruan Informatika SMK',
      year: '2025',
      badge: 'Pelatihan Kejuruan',
      tag: 'Web & Database',
      status: 'Selesai dengan Nilai Sangat Baik',
      body: `
        <div class="modal-preview-box">
          <p><strong>Fokus Pelatihan:</strong> Pembuatan Website Dinamis dengan PHP Native dan Database Relasional MySQL.</p>
          <p><strong>Penyelenggara:</strong> Program Penguatan Keterampilan Jurusan Informatika</p>
        </div>
        <h4>Cakupan Materi Belajar:</h4>
        <ul class="modal-feature-list">
          <li>Koneksi database menggunakan fungsi <code>mysqli_connect()</code> dan pengecekan error.</li>
          <li>Pembuatan fitur login sederhana dan manajemen sesi (<code>$_SESSION</code>).</li>
          <li>Operasi CRUD (Tambah, Tampil, Ubah, Hapus) pada database phpMyAdmin.</li>
        </ul>
      `
    },
    'umkm-award': {
      id: 'umkm-award',
      title: 'Sertifikat Praktik Kerja Lapangan (PKL) / Magang IT',
      issuer: 'Program PKL Kejuruan SMK • Ponorogo',
      year: '2025 - 2026',
      badge: 'Sertifikat PKL',
      tag: 'Praktik Industri',
      status: 'Predikat Sangat Memuaskan',
      body: `
        <div class="modal-preview-box">
          <p><strong>Program:</strong> Praktik Kerja Lapangan (PKL) Siswa SMK</p>
          <p><strong>Fokus Kegiatan:</strong> Penerapan Keterampilan IT, Pengelolaan Data, dan Digitalisasi Usaha Lokal</p>
        </div>
        <h4>Pengalaman yang Didapat:</h4>
        <ul class="modal-feature-list">
          <li>Belajar alur kerja nyata dalam tim dan berkomunikasi dengan pengguna / pemilik usaha.</li>
          <li>Mendokumentasikan data produk UMKM lokal (Batik Sekar Reyog) ke dalam bentuk katalog online.</li>
          <li>Melatih kedisiplinan, tanggung jawab kerja, dan pemecahan kendala teknis secara mandiri.</li>
        </ul>
      `
    },
    'ai-workshop': {
      id: 'ai-workshop',
      title: 'Workshop: Pemanfaatan AI untuk Pendamping Belajar Coding',
      issuer: 'Komunitas Belajar Teknologi Pelajar',
      year: '2025',
      badge: 'Workshop Belajar',
      tag: 'Teknologi AI',
      status: 'Peserta Aktif Terverifikasi',
      body: `
        <div class="modal-preview-box">
          <p><strong>Topik:</strong> Cara Bijak Memanfaatkan Tools AI (ChatGPT, Claude) Sebagai Teman Belajar Pemrograman</p>
        </div>
        <h4>Poin Pembelajaran:</h4>
        <ul class="modal-feature-list">
          <li>Menyusun pertanyaan error teknis yang runtut agar mendapat jawaban yang akurat.</li>
          <li>Menggunakan AI sebagai alat bantu memahami logika kode, bukan sekadar salin-tempel tanpa paham.</li>
          <li>Etika kejujuran akademik dan pentingnya memverifikasi setiap baris kode yang dihasilkan.</li>
        </ul>
      `
    }
  },

  activities: {
    'ukk': {
      id: 'ukk',
      title: 'Ujian Praktik Kejuruan (UKK) Web Development',
      location: 'Laboratorium Komputer SMK • Ponorogo',
      date: 'Februari 2026',
      tag: 'Ujian Praktik Sekolah',
      body: `
        <div class="modal-preview-box">
          <p><strong>Kegiatan:</strong> Uji Kompetensi Keahlian (UKK) Praktik Pemrograman</p>
          <p><strong>Lokasi:</strong> Lab Komputer Kejuruan Informatika, Ponorogo</p>
        </div>
        <p>Pengalaman penting saat menyelesaikan tugas pembuatan website secara langsung dalam batas waktu ujian. Menguji kesiapan mental dalam merancang skema database MySQL, menulis script PHP, dan menata antarmuka CSS di depan guru dan asesor penguji.</p>
        <h4>Rangkaian Ujian:</h4>
        <ul class="modal-feature-list">
          <li>Sesi 1: Perancangan struktur tabel database di phpMyAdmin.</li>
          <li>Sesi 2: Koding halaman web, formulir input data, dan koneksi backend PHP.</li>
          <li>Sesi 3: Presentasi hasil sistem dan demonstrasi fitur di hadapan penguji.</li>
        </ul>
      `
    },
    'pkl-act': {
      id: 'pkl-act',
      title: 'Praktik Kerja Lapangan (PKL) & Observasi UMKM',
      location: 'Sentra Usaha Batik • Kauman, Ponorogo',
      date: 'Januari 2026',
      tag: 'Kegiatan PKL',
      body: `
        <div class="modal-preview-box">
          <p><strong>Tujuan:</strong> Pengumpulan data produk dan observasi kebutuhan digitalisasi usaha batik lokal.</p>
        </div>
        <p>Terjun langsung ke sentra batik untuk wawancara dengan pemilik usaha, mencatat daftar motif batik Reyog, memotret sampel kain, dan merancang bagaimana data produk tersebut disimpan rapi ke dalam tabel database katalog.</p>
      `
    },
    'study-group': {
      id: 'study-group',
      title: 'Belajar Bareng & Bedah Error Coding Mingguan',
      location: 'Lab Komputer & Perpustakaan Sekolah',
      date: '2025 - 2026',
      tag: 'Belajar Bersama',
      body: `
        <div class="modal-preview-box">
          <p><strong>Aktivitas:</strong> Diskusi dan Belajar Mandiri Bersama Teman Sekelas</p>
        </div>
        <p>Kegiatan rutin belajar coding bersama rekan sekelas, saling membantu mencari penyebab error query SQL, berbagi referensi cara membuat tampilan web rapi dengan CSS, dan berdiskusi seputar tugas-tugas kejuruan.</p>
      `
    }
  },

  articles: {
    'php-tutorial': {
      id: 'php-tutorial',
      title: 'Cara Sederhana Menghubungkan PHP ke Database MySQL (koneksi.php)',
      tag: 'Catatan Belajar Web',
      readTime: '4 menit baca',
      date: 'Februari 2026',
      author: 'Yusuf Maulana Wakhidul Qohar',
      excerpt: 'Langkah praktis bagi siswa yang baru belajar cara membuat file koneksi database menggunakan mysqli_connect di XAMPP.',
      body: `
        <h4>1. Menyiapkan Database di phpMyAdmin</h4>
        <p>Sebelum menghubungkan kode PHP, pastikan service <strong>Apache</strong> dan <strong>MySQL</strong> di aplikasi XAMPP sudah berwarna hijau (Start). Buat database baru di <code>localhost/phpmyadmin</code>, misalnya dengan nama <code>db_batik_sekar</code>.</p>

        <h4>2. Menulis File koneksi.php</h4>
        <p>Berikut potongan script sederhana yang biasa saya gunakan pada tugas sekolah:</p>
        <pre><code class="language-php">&lt;?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_batik_sekar";

$koneksi = mysqli_connect($host, $user, $pass, $db);

if (!$koneksi) {
    die("Gagal terhubung ke database: " . mysqli_connect_error());
}
// echo "Koneksi database berhasil!";
?&gt;</code></pre>

        <h4>3. Menggunakan di File Lain</h4>
        <p>Cukup tambahkan <code>include 'koneksi.php';</code> di baris paling atas file katalog atau transaksi Anda. Sangat ringkas dan mudah dipahami.</p>
      `
    },
    'sql-tutorial': {
      id: 'sql-tutorial',
      title: 'Memahami Kueri Dasar SQL (SELECT, WHERE, ORDER BY) untuk Pemula',
      tag: 'Dasar Basis Data',
      readTime: '3 menit baca',
      date: 'Januari 2026',
      author: 'Yusuf Maulana Wakhidul Qohar',
      excerpt: 'Panduan singkat memahami logika penyaringan data tabel di MySQL tanpa perlu pusing.',
      body: `
        <h4>1. Menampilkan Semua Data (SELECT *)</h4>
        <p>Perintah <code>SELECT * FROM produk_batik;</code> digunakan untuk mengambil seluruh kolom dan baris yang ada di dalam tabel.</p>

        <h4>2. Menyaring Data Berdasarkan Syarat (WHERE)</h4>
        <p>Jika hanya ingin menampilkan produk batik dengan harga di bawah 200 ribu, kita gunakan klausa <code>WHERE</code>:</p>
        <pre><code class="language-sql">SELECT * FROM produk_batik WHERE harga &lt;= 200000;</code></pre>

        <h4>3. Mengurutkan Data (ORDER BY)</h4>
        <p>Untuk mengurutkan produk dari harga termahal ke termurah, gunakan <code>ORDER BY harga DESC</code>.</p>
      `
    },
    'ai-tutorial': {
      id: 'ai-tutorial',
      title: 'Tips Bijak Memanfaatkan AI untuk Membantu Belajar Coding',
      tag: 'Tips Belajar',
      readTime: '3 menit baca',
      date: 'Desember 2025',
      author: 'Yusuf Maulana Wakhidul Qohar',
      excerpt: 'Bagaimana memanfaatkan ChatGPT atau Gemini sebagai teman belajar tanpa kehilangan pemahaman logika sendiri.',
      body: `
        <h4>1. Jadikan AI Sebagai Teman Diskusi, Bukan Sekadar Salin-Tempel</h4>
        <p>Saat menemukan error syntax di PHP, tanyakan ke AI: <em>"Kenapa error ini bisa terjadi dan bagaimana alur logika yang benarnya?"</em> Dengan begitu, kita tetap memahami inti masalahnya.</p>

        <h4>2. Selalu Ketik Ulang dan Uji Sendiri</h4>
        <p>Jangan langsung menyalin kode mentah-mentah ke proyek tugas. Ketik ulang baris per baris di editor kode Anda agar tangan dan logika terbiasa dengan sintaks tersebut.</p>
      `
    }
  }
};
