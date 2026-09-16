// ============================================
// PORTOFOLIO YUSUF MAULANA WAKHIDUL QOHAR
// MASTER INTERACTIVE ENGINE v4.0
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // 1. DYNAMIC FOOTER YEAR
  // ============================================
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ============================================
  // 2. THEME SWITCHER (DARK / LIGHT MODE)
  // ============================================
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('yusuf_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('yusuf_theme', newTheme);
      showToast(`Tema diganti ke mode ${newTheme === 'dark' ? 'Gelap 🌙' : 'Terang ☀️'}`);
    });
  }

  // ============================================
  // 3. SCROLL READING PROGRESS BAR
  // ============================================
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    if (!scrollProgressBar) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    scrollProgressBar.style.width = scrolled + '%';
  });

  // ============================================
  // 4. DYNAMIC TYPING ANIMATION (HERO)
  // ============================================
  const typingTextEl = document.getElementById('typingText');
  const roles = [
    "Siswa SMK & Junior Web Developer",
    "Pengembang Aplikasi SICAKEP (RSUD)",
    "Pemrograman Web (PHP & MySQL)",
    "Fokus Pengelolaan Basis Data"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!typingTextEl) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingTextEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTextEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1800; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }
  typeEffect();

  // ============================================
  // 5. STATS COUNTER ANIMATION (HERO STRIP)
  // ============================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  function runStatsCounter() {
    statNumbers.forEach(stat => {
      const rawTarget = stat.getAttribute('data-target');
      if (!rawTarget) return;
      const target = parseInt(rawTarget, 10);
      if (isNaN(target)) return;
      let count = 0;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / (target || 1)));

      const timer = setInterval(() => {
        count += 1;
        stat.textContent = count;
        if (count >= target) {
          stat.textContent = target;
          clearInterval(timer);
        }
      }, stepTime || 50);
    });
  }

  const statsSection = document.querySelector('.hero-stats-wrap');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          runStatsCounter();
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  } else {
    runStatsCounter();
  }

  // ============================================
  // 6. MOBILE NAVBAR TOGGLE
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============================================
  // 7. SCROLL SPY (ACTIVE NAVIGATION HIGHLIGHT)
  // ============================================
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', scrollSpy);
  window.addEventListener('load', scrollSpy);

  // ============================================
  // 8. EXPERIENCE CATEGORY FILTER
  // ============================================
  const expFilterBtns = document.querySelectorAll('#expFilterTabs .filter-btn');
  const expCards = document.querySelectorAll('#expGrid .exp-card');

  expFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      expFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-exp-filter');

      expCards.forEach(card => {
        const cat = card.getAttribute('data-exp-cat');
        if (filterVal === 'all' || filterVal === cat) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // ============================================
  // 9. SKILL CATEGORY FILTER
  // ============================================
  const skillFilterBtns = document.querySelectorAll('#skillFilterTabs .filter-btn');
  const skillCats = document.querySelectorAll('#skillsWrapper .skill-category');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-skill-filter');

      skillCats.forEach(cat => {
        const catName = cat.getAttribute('data-skill-cat');
        if (filterVal === 'all' || filterVal === catName) {
          cat.style.display = 'block';
        } else {
          cat.style.display = 'none';
        }
      });
    });
  });

  // ============================================
  // 10. PORTFOLIO FILTER
  // ============================================
  const portfolioFilterBtns = document.querySelectorAll('#portfolioFilter .filter-btn');
  const projectItems = document.querySelectorAll('.portfolio-grid .project-card-item');

  portfolioFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      portfolioFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterVal === 'all' || filterVal === category) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 30);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 150);
        }
      });
    });
  });

  // ============================================
  // 11. TOAST NOTIFICATION UTILITY
  // ============================================
  const toastNotice = document.getElementById('toastNotice');
  let toastTimer;

  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4000);
  }

  // ============================================
  // 12. 1-CLICK CLIPBOARD COPY
  // ============================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyWaBtn = document.getElementById('copyWaBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('yusufmwakhidul@gmail.com').then(() => {
        showToast('Email (yusufmwakhidul@gmail.com) berhasil disalin ke clipboard! 📋');
      });
    });
  }

  if (copyWaBtn) {
    copyWaBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+6285231180206').then(() => {
        showToast('Nomor WhatsApp (+62 852-3118-0206) berhasil disalin! 💬');
      });
    });
  }

  // ============================================
  // 13. DUAL-ACTION CONTACT FORM (WHATSAPP & EMAIL)
  // ============================================
  const contactForm = document.getElementById('contactForm');
  const sendViaWaBtn = document.getElementById('sendViaWaBtn');
  const formStatus = document.getElementById('formStatus');

  // WhatsApp Button Click
  if (sendViaWaBtn) {
    sendViaWaBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const category = document.getElementById('serviceCategory').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !message) {
        showToast('Mohon isi nama dan pesan Anda terlebih dahulu!');
        document.getElementById('name').focus();
        return;
      }

      const text = `Halo Yusuf Maulana,%0A%0ASaya *${encodeURIComponent(name)}* (${encodeURIComponent(email || 'Tidak dicantumkan')}) ingin mendiskusikan:%0A*Kategori:* ${encodeURIComponent(category)}%0A%0A*Pesan:*%0A${encodeURIComponent(message)}%0A%0ATerima kasih.`;
      const waUrl = `https://wa.me/6285231180206?text=${text}`;
      window.open(waUrl, '_blank');
      showToast('Membuka WhatsApp untuk mengirim pesan...');
    });
  }

  // Email Submit
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();

      if (formStatus) {
        formStatus.style.color = 'var(--emerald)';
        formStatus.textContent = `Terima kasih, ${name}! Pesan Anda telah kami terima. Yusuf akan segera membalas via email.`;
      }
      showToast(`Pesan dari ${name} berhasil dikirim! ✅`);
      contactForm.reset();

      setTimeout(() => {
        if (formStatus) formStatus.textContent = '';
      }, 6000);
    });
  }

  // ============================================
  // 14. INTERACTIVE MODAL DATA & CONTROLLER
  // ============================================

  // Generic modal close handler
  const allModals = document.querySelectorAll('.modal-overlay');
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      allModals.forEach(m => m.classList.remove('open'));
    });
  });

  allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      allModals.forEach(m => m.classList.remove('open'));
    }
  });

  // A. PORTFOLIO PROJECT MODALS
  const projectData = {
    'sicakep': {
      tag: 'Proyek PKL RSUD Dr. Harjono Ponorogo',
      title: 'SICAKEP — Sistem Informasi Catat Kepegawaian (RSUD Dr. Harjono Ponorogo)',
      body: `
        <div class="modal-featured-img-box">
          <img src="images/proyek-sicakep.png" alt="Sistem Informasi Catat Kepegawaian SICAKEP RSUD Dr Harjono Ponorogo" class="modal-featured-img">
        </div>
        <div class="modal-preview-box">
          <p><strong>Latar Belakang Proyek:</strong> Aplikasi nyata yang saya bangun dan kembangkan selama menjalani masa Praktik Kerja Lapangan (PKL) di <strong>RSUD Dr. Harjono S. Kabupaten Ponorogo</strong>. Sistem ini dirancang untuk mempermudah proses pencatatan, verifikasi data pegawai, dan pengelolaan administrasi kepegawaian rumah sakit secara terpusat.</p>
        </div>
        <h4>Fitur Utama Sistem:</h4>
        <ul class="modal-feature-list">
          <li><strong>Autentikasi & Portal Masuk Akun:</strong> Form login terintegrasi untuk verifikasi akun staf dan admin RSUD Dr. Harjono Ponorogo.</li>
          <li><strong>Pencatatan Kepegawaian:</strong> Fasilitas pencatatan berkas, absensi/aktivitas kerja, serta data profil pegawai rumah sakit.</li>
          <li><strong>Antarmuka Responsif & Rapi:</strong> Desain kartu modern dengan background instansi RSUD Dr. Harjono Ponorogo yang nyaman digunakan di PC maupun perangkat tablet.</li>
          <li><strong>Manajemen Basis Data:</strong> Integrasi database terstruktur untuk menjamin keakuratan dan keteraturan data pegawai rumah sakit.</li>
        </ul>
        <h4>Instansi & Lingkup Kerja:</h4>
        <p><strong>Tempat PKL:</strong> RSUD Dr. Harjono S. Ponorogo, Jawa Timur<br>
        <strong>Peran:</strong> Junior Web Developer / Pengembang Aplikasi Kepegawaian</p>
      `
    },
    'batik': {
      tag: 'Web Dinamis (PHP & MySQL)',
      title: 'Batik Sekar Reyog — Website Usaha Batik Ponorogo',
      body: `
        <div class="modal-preview-box">
          <p><strong>Ringkasan Proyek:</strong> Proyek uji kompetensi sekaligus digitalisasi UMKM riil yang dibangun untuk mempromosikan produk kerajinan batik khas Ponorogo secara online.</p>
        </div>
        <h4>Fitur Utama Aplikasi:</h4>
        <ul class="modal-feature-list">
          <li><strong>Manajemen Katalog Dinamis:</strong> Data produk (nama motif, deskripsi filosofi batik, harga, foto) disimpan dan diambil secara dinamis dari database MySQL.</li>
          <li><strong>Halaman Detail Produk:</strong> Menggunakan query parameter PHP untuk menampilkan detail spesifikasi setiap motif batik.</li>
          <li><strong>Integrasi Pesanan WhatsApp:</strong> Tombol direct order yang otomatis merangkai format pesanan ke nomor admin penjual.</li>
          <li><strong>Desain Responsif:</strong> Memastikan website nyaman dibuka melalui layar smartphone hingga monitor desktop.</li>
        </ul>
        <h4>Teknologi yang Digunakan:</h4>
        <p><code>PHP Native</code>, <code>MySQL Database</code>, <code>HTML5 Semantik</code>, <code>CSS3 Flexbox/Grid</code>, <code>Bootstrap UI</code>.</p>
        <div class="modal-actions">
          <a href="../batik-sekar-reyog/index.php" target="_blank" class="btn btn-primary">Buka Website Usaha →</a>
          <a href="https://wa.me/6285231180206?text=Halo%20Yusuf%2C%20saya%20tertarik%20melihat%20source%20code%20proyek%20Batik%20Sekar%20Reyog." target="_blank" class="btn btn-ghost">Tanya Detail Teknis</a>
        </div>
      `
    },
    'profil': {
      tag: 'Web Statis Modern',
      title: 'Website Profil & Portofolio Personal Interaktif',
      body: `
        <div class="modal-preview-box">
          <p><strong>Ringkasan Proyek:</strong> Website portofolio profesional pribadi Yusuf Maulana yang menyajikan 13 bagian informasi lengkap dengan standar visual modern.</p>
        </div>
        <h4>Fitur Unggulan Website:</h4>
        <ul class="modal-feature-list">
          <li><strong>Sistem Dual Theme:</strong> Dukungan mode gelap (Dark Cyber) dan mode terang (Light Clean) dengan memori localStorage.</li>
          <li><strong>Dynamic Interactive Modals:</strong> Popup detail portofolio, lightbox sertifikat, reader artikel, dan ringkasan CV tanpa ketergantungan library luar.</li>
          <li><strong>Dual-Action Contact:</strong> Integrasi pembuat pesan WhatsApp langsung dan formulir kontak interaktif.</li>
          <li><strong>Aksesibilitas & SEO:</strong> Semantic tags, meta tags lengkap, dan navigasi ramah pembaca layar.</li>
        </ul>
        <h4>Teknologi yang Digunakan:</h4>
        <p><code>HTML5 Semantic</code>, <code>CSS3 Custom Variables</code>, <code>JavaScript ES6 Vanilla</code>, <code>Google Fonts</code>.</p>
      `
    },
    'crud': {
      tag: 'Aplikasi Web (PHP & MySQL)',
      title: 'Toko Buku Digital — Sistem Informasi & Katalog Buku',
      body: `
        <div class="modal-featured-img-box">
          <img src="images/proyek-tokobuku.png" alt="Aplikasi Toko Buku Digital" class="modal-featured-img">
        </div>
        <div class="modal-preview-box">
          <p><strong>Tujuan Pembuatan:</strong> Aplikasi web dinamis yang saya kembangkan untuk mempraktikkan pengelolaan data katalog digital, portal autentikasi akun, dan operasi CRUD (Create, Read, Update, Delete) pada tabel database MySQL di server lokal XAMPP.</p>
        </div>
        <h4>Fitur Utama Sistem:</h4>
        <ul class="modal-feature-list">
          <li><strong>Portal Masuk Akun:</strong> Formulir login yang elegan dan responsif dengan opsi simpan sesi serta validasi keamanan.</li>
          <li><strong>Katalog Buku Digital:</strong> Menampilkan koleksi buku berdasarkan kategori, pengarang, dan penerbit secara dinamis.</li>
          <li><strong>Manajemen Data (CRUD):</strong> Kemudahan menambah judul buku baru, memperbarui stok/harga, serta menghapus data dengan konfirmasi aman.</li>
          <li><strong>File Basis Data MySQL:</strong> Tabel database <code>tokobuku.sql</code> yang terstruktur dan siap digunakan.</li>
        </ul>
        <div class="modal-actions" style="gap: 10px; flex-wrap: wrap;">
          <a href="database/tokobuku.sql" download class="btn btn-primary">📥 Unduh File SQL (tokobuku.sql)</a>
        </div>
      `
    },
    'tokobuku': {
      tag: 'Aplikasi Web (PHP & MySQL)',
      title: 'Toko Buku Digital — Sistem Informasi & Katalog Buku',
      body: `
        <div class="modal-featured-img-box">
          <img src="images/proyek-tokobuku.png" alt="Aplikasi Toko Buku Digital" class="modal-featured-img">
        </div>
        <div class="modal-preview-box">
          <p><strong>Tujuan Pembuatan:</strong> Aplikasi web dinamis yang saya kembangkan untuk mempraktikkan pengelolaan data katalog digital, portal autentikasi akun, dan operasi CRUD (Create, Read, Update, Delete) pada tabel database MySQL di server lokal XAMPP.</p>
        </div>
        <h4>Fitur Utama Sistem:</h4>
        <ul class="modal-feature-list">
          <li><strong>Portal Masuk Akun:</strong> Formulir login yang elegan dan responsif dengan opsi simpan sesi serta validasi keamanan.</li>
          <li><strong>Katalog Buku Digital:</strong> Menampilkan koleksi buku berdasarkan kategori, pengarang, dan penerbit secara dinamis.</li>
          <li><strong>Manajemen Data (CRUD):</strong> Kemudahan menambah judul buku baru, memperbarui stok/harga, serta menghapus data dengan konfirmasi aman.</li>
          <li><strong>File Basis Data MySQL:</strong> Tabel database <code>tokobuku.sql</code> yang terstruktur dan siap digunakan.</li>
        </ul>
        <div class="modal-actions" style="gap: 10px; flex-wrap: wrap;">
          <a href="database/tokobuku.sql" download class="btn btn-primary">📥 Unduh File SQL (tokobuku.sql)</a>
        </div>
      `
    },
    'modul-kka': {
      tag: 'Modul Edukasi Digital',
      title: 'Modul Interaktif KKA & Dasar Pemrograman Komputer',
      body: `
        <div class="modal-preview-box">
          <p><strong>Ringkasan Proyek:</strong> Media bahan ajar digital berbasis web yang disusun untuk mempermudah rekan siswa memahami logika komputasi dan analisis data.</p>
        </div>
        <h4>Materi dalam Modul:</h4>
        <ul class="modal-feature-list">
          <li>Visualisasi alur flowchart & pseudocode percabangan IF-ELSE.</li>
          <li>Panduan penggunaan formula lookup dan rekapitulasi data spreadsheet.</li>
          <li>Latihan mandiri studi kasus logika dasar pemrograman.</li>
        </ul>
      `
    },
    'sql-sim': {
      tag: 'Media Pembelajaran Interaktif',
      title: 'Media Interaktif Visualisasi Query SQL & Database',
      body: `
        <div class="modal-preview-box">
          <p><strong>Ringkasan Proyek:</strong> Simulator berbasis peramban (browser) untuk mendemonstrasikan bagaimana klausa SELECT, WHERE, JOIN, dan ORDER BY memanipulasi baris data tabel.</p>
        </div>
        <h4>Fitur Edukasi:</h4>
        <ul class="modal-feature-list">
          <li>Visual highlighting baris data yang terpilih saat query dieksekusi.</li>
          <li>Penjelasan interaktif jenis relasi tabel (One-to-Many, Many-to-Many).</li>
          <li>Tantangan mini-kuis sintaks SQL berhadiah skor evaluasi.</li>
        </ul>
      `
    },
    'ai-tool': {
      tag: 'Tool Pengembang Berbasis AI',
      title: 'Developer AI Prompt Assistant & Code Formatter',
      body: `
        <div class="modal-preview-box">
          <p><strong>Ringkasan Proyek:</strong> Aplikasi web sederhana untuk memandu developer pemula menyusun formula prompt yang akurat saat meminta bantuan kepada ChatGPT, Claude, atau Gemini.</p>
        </div>
        <h4>Kemampuan Alat:</h4>
        <ul class="modal-feature-list">
          <li>Generator template prompt perbaikan bug (Debugging Prompt).</li>
          <li>Template perancangan skema database dan normalisasi tabel.</li>
          <li>Tombol 1-klik salin prompt yang sudah terformat rapi ke clipboard.</li>
        </ul>
      `
    }
  };

  const projectModal = document.getElementById('projectModal');
  const projModalTag = document.getElementById('projModalTag');
  const projModalTitle = document.getElementById('projModalTitle');
  const projModalBody = document.getElementById('projModalBody');

  document.querySelectorAll('.open-proj-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.PortfolioUtils) PortfolioUtils.playClickSound();
      const projId = btn.getAttribute('data-proj');
      const data = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.projects && window.PORTFOLIO_DATA.projects[projId]) || projectData[projId];
      if (data && projectModal) {
        projModalTag.textContent = data.tag;
        projModalTitle.textContent = data.title;
        projModalBody.innerHTML = data.body;
        projectModal.classList.add('open');
      }
    });
  });

  // B. CERTIFICATE MODALS
  const certData = {
    'skkni': {
      title: 'Sertifikat Kompetensi: Junior Web Developer',
      tag: 'Standar SKKNI / Badan Nasional Sertifikasi Profesi',
      body: `
        <div class="modal-preview-box">
          <p><strong>Status Asesmen:</strong> DIREKOMENDASIKAN KOMPETEN (K)</p>
          <p><strong>Skema Sertifikasi:</strong> Junior Web Developer</p>
          <p><strong>Tahun Terbit:</strong> 2026</p>
        </div>
        <h4>Daftar Unit Kompetensi yang Teruji:</h4>
        <ul class="modal-feature-list">
          <li>Menerapkan Perintah Eksekusi Bahasa Pemrograman Berbasis Teks (PHP & JavaScript).</li>
          <li>Menyusun Algoritma Pemrograman dan Pseudocode Terstruktur.</li>
          <li>Mengimplementasikan User Interface Web Menggunakan Standar HTML5 & CSS3.</li>
          <li>Merancang dan Mengelola Basis Data Relasional (MySQL).</li>
          <li>Melakukan Uji Coba Aplikasi (Software Testing & Debugging) serta Dokumentasi Kode.</li>
        </ul>
        <div class="modal-actions">
          <a href="#kontak" class="btn btn-primary" onclick="allModals.forEach(m => m.classList.remove('open'))">Minta Verifikasi Sertifikat</a>
        </div>
      `
    },
    'php-mysql': {
      title: 'Sertifikat Pelatihan Pemrograman Web Dinamis (PHP & MySQL)',
      tag: 'Pelatihan Vokasi Kejuruan',
      body: `
        <div class="modal-preview-box">
          <p><strong>Lembaga Penyelenggara:</strong> Program Pelatihan Kejuruan Informatika</p>
          <p><strong>Fokus Pelatihan:</strong> Arsitektur Client-Server, Keamanan Form, dan Operasi CRUD Terintegrasi Database.</p>
        </div>
        <h4>Materi Pelatihan:</h4>
        <ul class="modal-feature-list">
          <li>Koneksi MySQLi dan penanganan error handling.</li>
          <li>Manajemen User Session dan sistem Login multi-level.</li>
          <li>Proteksi keamanan SQL Injection dasar dan validasi karakter input.</li>
        </ul>
      `
    },
    'umkm-award': {
      title: 'Penghargaan Proyek Digitalisasi Usaha Batik Sekar Reyog',
      tag: 'Apresiasi Kontribusi Lapangan',
      body: `
        <div class="modal-preview-box">
          <p><strong>Kategori:</strong> Pemberdayaan Ekonomi Kreatif Berbasis Digital</p>
          <p><strong>Objek Proyek:</strong> Batik Sekar Reyog Ponorogo</p>
        </div>
        <h4>Dampak Kontribusi:</h4>
        <ul class="modal-feature-list">
          <li>Menghadirkan katalog digital yang dapat diakses calon pembeli dari berbagai daerah tanpa harus berkunjung ke galeri fisik.</li>
          <li>Menstandarisasi pencatatan data produk dan varian motif batik khas Ponorogo secara terpusat.</li>
        </ul>
      `
    },
    'ai-workshop': {
      title: 'Sertifikat Partisipasi: AI & Modern Coding Workflow',
      tag: 'Workshop Teknologi',
      body: `
        <div class="modal-preview-box">
          <p><strong>Topik:</strong> Integrasi Artificial Intelligence dalam Siklus Pengembangan Perangkat Lunak</p>
          <p><strong>Tahun:</strong> 2025</p>
        </div>
        <h4>Cakupan Pembelajaran:</h4>
        <ul class="modal-feature-list">
          <li>Penyusunan System Prompt dan Context Windowing untuk coding.</li>
          <li>Otomasi penulisan unit test dan dokumentasi fungsi memakai tools AI.</li>
          <li>Etika pemrograman dan verifikasi validitas kode program buatan model AI.</li>
        </ul>
      `
    }
  };

  const certModal = document.getElementById('certModal');
  const certModalTag = document.getElementById('certModalTag');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalBody = document.getElementById('certModalBody');

  document.querySelectorAll('.cert-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.PortfolioUtils) PortfolioUtils.playClickSound();
      const certId = btn.getAttribute('data-cert');
      const data = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.certificates && window.PORTFOLIO_DATA.certificates[certId]) || certData[certId];
      if (data && certModal) {
        certModalTag.textContent = data.tag;
        certModalTitle.textContent = data.title;
        certModalBody.innerHTML = data.body;
        certModal.classList.add('open');
      }
    });
  });

  // C. ACTIVITY MODALS
  const actData = {
    'ukk': {
      title: 'Pelaksanaan Uji Kompetensi Keahlian (UKK) Web Developer',
      tag: 'Dokumentasi Live Coding & Ujian Asesor',
      body: `
        <div class="modal-preview-box">
          <p><strong>Lokasi:</strong> Laboratorium Komputer Kejuruan • Ponorogo</p>
          <p><strong>Pelaksanaan:</strong> 2026</p>
        </div>
        <p>Momen penting di mana seluruh keterampilan teknis diuji secara langsung dalam batas waktu yang ditentukan. Mulai dari membangun skema basis data, mengkoneksikan script PHP, hingga merapikan antarmuka CSS responsif di depan asesor independen.</p>
        <h4>Rangkaian Ujian:</h4>
        <ul class="modal-feature-list">
          <li>Sesi 1: Perancangan skema relasi tabel MySQL dan penyiapan file konfigurasi.</li>
          <li>Sesi 2: Implementasi halaman katalog dan formulir transaksi produk.</li>
          <li>Sesi 3: Verifikasi fungsionalitas dan wawancara teknis bersama tim penguji.</li>
        </ul>
      `
    },
    'ai-ws': {
      title: 'Workshop Pemanfaatan AI untuk Programmer Pemula',
      tag: 'Dokumentasi Seminar & Pelatihan',
      body: `
        <div class="modal-preview-box">
          <p><strong>Fasilitator:</strong> Praktisi AI & Pengembang Web</p>
          <p><strong>Materi:</strong> Prompt Engineering & LLM Coding Assistants</p>
        </div>
        <p>Dokumentasi keikutsertaan aktif dalam workshop teknologi modern. Menggali bagaimana memanfaatkan kecerdasan buatan sebagai rekan pair-programming yang mempercepat pemecahan error dan penulisan dokumentasi.</p>
      `
    },
    'umkm-survey': {
      title: 'Survey & Digitalisasi Katalog Batik Sekar Reyog',
      tag: 'Dokumentasi Proyek Lapangan UMKM',
      body: `
        <div class="modal-preview-box">
          <p><strong>Lokasi:</strong> Sentra Produksi Batik Sekar Reyog • Ponorogo</p>
          <p><strong>Aktivitas:</strong> Wawancara Pemilik, Inventarisasi Motif, Pemotretan Produk</p>
        </div>
        <p>Pengalaman berharga terjun langsung ke lokasi usaha UMKM lokal. Mendengarkan kebutuhan pemilik usaha akan pentingnya media promosi digital, mengumpulkan sampel motif batik reyog, serta menyelaraskan desain website dengan karakter budaya khas Ponorogo.</p>
      `
    },
    'study-group': {
      title: 'Sesi Belajar Bersama: Peer-Code Review & Debugging',
      tag: 'Dokumentasi Komunitas IT Pelajar',
      body: `
        <div class="modal-preview-box">
          <p><strong>Kegiatan:</strong> Diskusi Mingguan Rekan Pemrograman</p>
          <p><strong>Tujuan:</strong> Meningkatkan Kualitas Kode (Clean Code) & Problem Solving</p>
        </div>
        <p>Aktivitas rutin bersama rekan belajar di mana kami saling membedah baris kode satu sama lain, mencari penyebab error SQL/PHP, dan berbagi strategi terbaru dalam perancangan CSS responsif.</p>
      `
    }
  };

  const actModal = document.getElementById('actModal');
  const actModalTag = document.getElementById('actModalTag');
  const actModalTitle = document.getElementById('actModalTitle');
  const actModalBody = document.getElementById('actModalBody');

  document.querySelectorAll('.act-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.PortfolioUtils) PortfolioUtils.playClickSound();
      const actId = btn.getAttribute('data-act');
      const data = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.activities && window.PORTFOLIO_DATA.activities[actId]) || actData[actId];
      if (data && actModal) {
        actModalTag.textContent = data.tag;
        actModalTitle.textContent = data.title;
        actModalBody.innerHTML = data.body;
        actModal.classList.add('open');
      }
    });
  });

  // D. ARTICLE READER MODALS
  const articleData = {
    'php-tutorial': {
      title: 'Panduan Dasar Membangun Website Dinamis dengan PHP dan MySQL',
      tag: 'Tutorial Web Development',
      meta: '<span>✍️ Oleh Yusuf Maulana</span> • <span>📅 10 Feb 2026</span> • <span>⏱️ 5 menit baca</span>',
      body: `
        <h4>1. Mengapa Memilih PHP & MySQL untuk Pemula?</h4>
        <p>PHP dan MySQL merupakan fondasi teknologi web yang sangat matang, mudah dipelajari, dan memiliki dokumentasi komunitas yang luas. Sangat cocok bagi siswa kejuruan yang ingin memahami alur kerja backend dari dasarnya.</p>

        <h4>2. Langkah Membuat Koneksi Database</h4>
        <p>Untuk menghubungkan script PHP ke server MySQL, kita dapat memanfaatkan ekstensi <code>mysqli</code> seperti contoh berikut:</p>
        <pre><code>&lt;?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_portofolio";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?&gt;</code></pre>

        <h4>3. Menampilkan Data ke Tabel HTML</h4>
        <p>Setelah terkoneksi, gunakan fungsi <code>mysqli_query()</code> dan perulangan <code>while($row = mysqli_fetch_assoc($query))</code> untuk merender data secara dinamis ke antarmuka halaman web Anda.</p>

        <h4>Kesimpulan</h4>
        <p>Dengan memahami prinsip dasar query SQL dan penanganan variabel di PHP, Anda sudah memiliki bekal kuat untuk membangun website dinamis yang siap digunakan di dunia industri.</p>
      `
    },
    'ai-developer': {
      title: 'Mengapa Junior Developer Perlu Memahami Tools AI Sejak Dini?',
      tag: 'Wawasan Artificial Intelligence',
      meta: '<span>✍️ Oleh Yusuf Maulana</span> • <span>📅 28 Jan 2026</span> • <span>⏱️ 4 menit baca</span>',
      body: `
        <h4>Era Baru Pemrograman dengan Bantuan AI</h4>
        <p>Kehadiran Large Language Model (LLM) seperti ChatGPT, Gemini, dan Cursor bukan ancaman bagi pemrogram pemula, melainkan kesempatan luar biasa untuk mempercepat kurva belajar kita.</p>

        <h4>Manfaat Utama untuk Junior Developer:</h4>
        <ul class="modal-feature-list">
          <li><strong>Penjelasan Error Instan:</strong> Saat menjumpai pesan error kompleks di console peramban atau terminal, AI mampu menguraikan arti error tersebut dalam bahasa yang mudah dipahami.</li>
          <li><strong>Latihan Logika Algoritma:</strong> Kita dapat meminta model AI memberikan variasi alternatif pemecahan masalah (misalnya perbandingan efisiensi loop vs method bawaan).</li>
          <li><strong>Membiasakan Clean Code:</strong> Menanyakan rekomendasi penamaan variabel dan struktur modular.</li>
        </ul>

        <h4>Penting: Jangan Sekadar Copy-Paste!</h4>
        <p>Kunci sukses memanfaatkan AI adalah memahami setiap baris kode yang dihasilkan. Selalu baca, pahami logika jalannya kode, dan uji secara manual di lingkungan lokal Anda.</p>
      `
    },
    'clean-code': {
      title: 'Tips Menyusun Kode HTML5 & CSS3 yang Clean dan Responsif',
      tag: 'Best Practices Frontend',
      meta: '<span>✍️ Oleh Yusuf Maulana</span> • <span>📅 15 Des 2025</span> • <span>⏱️ 6 menit baca</span>',
      body: `
        <h4>1. Gunakan Tag HTML Semantik</h4>
        <p>Hindari penggunaan tag <code>&lt;div&gt;</code> untuk semua elemen. Gunakan tag yang memiliki makna seperti <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, dan <code>&lt;footer&gt;</code>. Hal ini krusial untuk aksesibilitas dan SEO.</p>

        <h4>2. Manfaatkan CSS Custom Properties (Variables)</h4>
        <p>Mendefinisikan palet warna, spasi, dan font family di dalam selector <code>:root</code> membuat proses pemeliharaan tema dan styling jauh lebih efisien.</p>

        <h4>3. Mobile-First & Flexible Units</h4>
        <p>Gunakan unit relatif seperti <code>rem</code>, <code>%</code>, serta tata letak <strong>CSS Grid</strong> dan <strong>Flexbox</strong> agar elemen halaman secara otomatis menyesuaikan ukuran layar perangkat pengguna.</p>
      `
    },
    'batik-case': {
      title: 'Pengalaman Nyata Mendigitalisasi Usaha Batik Sekar Reyog Ponorogo',
      tag: 'Studi Kasus Proyek Nyata',
      meta: '<span>✍️ Oleh Yusuf Maulana</span> • <span>📅 02 Mar 2026</span> • <span>⏱️ 7 menit baca</span>',
      body: `
        <h4>Latar Belakang Proyek</h4>
        <p>Batik Sekar Reyog adalah usaha kerajinan batik khas Ponorogo yang memiliki ragam motif sarat nilai kearifan lokal. Sebelumnya, proses pemasaran hanya mengandalkan transaksi di gerai fisik.</p>

        <h4>Tantangan & Solusi Teknis:</h4>
        <ul class="modal-feature-list">
          <li><strong>Tantangan:</strong> Pengelola membutuhkan platform yang mudah diakses dan tidak memberatkan koneksi internet pengguna.</li>
          <li><strong>Solusi:</strong> Website katalog dibangun dengan PHP Native ringan tanpa framework rumit, dilengkapi kompresi aset gambar dan integrasi langsung ke WhatsApp customer service.</li>
        </ul>

        <h4>Pelajaran yang Dipetik:</h4>
        <p>Membuat website bukan hanya soal teknis baris kode, melainkan tentang bagaimana empati kita dalam memahami kebutuhan nyata pengguna dan pelaku usaha.</p>
      `
    }
  };

  const articleModal = document.getElementById('articleModal');
  const articleModalTag = document.getElementById('articleModalTag');
  const articleModalTitle = document.getElementById('articleModalTitle');
  const articleModalMeta = document.getElementById('articleModalMeta');
  const articleModalBody = document.getElementById('articleModalBody');

  document.querySelectorAll('.blog-read-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.PortfolioUtils) PortfolioUtils.playClickSound();
      const artId = btn.getAttribute('data-article');
      const data = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.articles && window.PORTFOLIO_DATA.articles[artId]) || articleData[artId];
      if (data && articleModal) {
        articleModalTag.textContent = data.tag;
        articleModalTitle.textContent = data.title;
        articleModalMeta.innerHTML = data.meta || `<span>✍️ Oleh ${data.author || 'Yusuf Maulana'}</span> • <span>📅 ${data.date}</span> • <span>⏱️ ${data.readTime}</span>`;
        articleModalBody.innerHTML = data.body;
        articleModal.classList.add('open');
      }
    });
  });

  // E. CV SUMMARY MODAL TRIGGERS
  const cvModal = document.getElementById('cvModal');
  const openCvBtn = document.getElementById('openCvBtn');
  const heroCvBtn = document.getElementById('heroCvBtn');

  if (openCvBtn && cvModal) {
    openCvBtn.addEventListener('click', () => {
      cvModal.classList.add('open');
    });
  }

  if (heroCvBtn && cvModal) {
    heroCvBtn.addEventListener('click', () => {
      cvModal.classList.add('open');
    });
  }

});
