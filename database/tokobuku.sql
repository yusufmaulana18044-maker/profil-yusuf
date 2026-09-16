-- =======================================================
-- Basis Data: `db_toko_buku`
-- Proyek: Sistem Informasi Manajemen Toko Buku Sederhana
-- Pengembang: Yusuf Maulana Wakhidul Qohar (Siswa SMK)
-- Server: MySQL / phpMyAdmin (XAMPP)
-- =======================================================

CREATE DATABASE IF NOT EXISTS `db_toko_buku` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `db_toko_buku`;

-- --------------------------------------------------------
-- Struktur Tabel `kategori_buku`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `kategori_buku` (
  `id_kategori` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kategori`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `kategori_buku` (`id_kategori`, `nama_kategori`) VALUES
(1, 'Pemrograman & IT'),
(2, 'Pelajaran SMK'),
(3, 'Novel & Fiksi'),
(4, 'Pengembangan Diri');

-- --------------------------------------------------------
-- Struktur Tabel `buku`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `buku` (
  `id_buku` int(11) NOT NULL AUTO_INCREMENT,
  `id_kategori` int(11) NOT NULL,
  `judul` varchar(150) NOT NULL,
  `penulis` varchar(100) NOT NULL,
  `penerbit` varchar(100) NOT NULL,
  `harga` int(11) NOT NULL,
  `stok` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_buku`),
  KEY `fk_buku_kategori` (`id_kategori`),
  CONSTRAINT `fk_buku_kategori` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_buku` (`id_kategori`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `buku` (`id_buku`, `id_kategori`, `judul`, `penulis`, `penerbit`, `harga`, `stok`) VALUES
(1, 1, 'Langkah Mudah Belajar PHP & MySQL', 'Budi Raharjo', 'Informatika', 85000, 10),
(2, 1, 'Dasar-Dasar HTML5, CSS3 dan JavaScript', 'Yusuf Maulana', 'Media Edukasi', 70000, 15),
(3, 2, 'Basis Data Relasional untuk SMK Kelas XI', 'Tim Guru RPL', 'Erlangga Kejuruan', 65000, 20),
(4, 3, 'Laskar Pelangi', 'Andrea Hirata', 'Bentang Pustaka', 89000, 8),
(5, 4, 'Filosofi Teras', 'Henry Manampiring', 'Kompas Buku', 98000, 12);
