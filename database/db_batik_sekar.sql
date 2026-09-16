-- =======================================================
-- Basis Data: `db_batik_sekar`
-- Proyek: E-Katalog Batik Sekar Reyog Ponorogo
-- Pengembang: Yusuf Maulana Wakhidul Qohar (Siswa SMK)
-- Server: MySQL / phpMyAdmin (XAMPP)
-- =======================================================

CREATE DATABASE IF NOT EXISTS `db_batik_sekar` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `db_batik_sekar`;

-- --------------------------------------------------------
-- Struktur Tabel `kategori`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `kategori` (
  `id_kategori` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(50) NOT NULL,
  `keterangan` text DEFAULT NULL,
  PRIMARY KEY (`id_kategori`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`, `keterangan`) VALUES
(1, 'Tulis', 'Batik tulis canting manual khas seniman Ponorogo'),
(2, 'Cap', 'Batik cap tembaga kombinasi colet warna'),
(3, 'Busana', 'Pakaian kemeja dan atasan batik siap pakai');

-- --------------------------------------------------------
-- Struktur Tabel `produk_batik`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `produk_batik` (
  `id_produk` int(11) NOT NULL AUTO_INCREMENT,
  `id_kategori` int(11) NOT NULL,
  `nama_produk` varchar(120) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `harga` int(11) NOT NULL,
  `stok` int(11) NOT NULL DEFAULT 0,
  `deskripsi` text DEFAULT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'Tersedia',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_produk`),
  KEY `fk_kategori` (`id_kategori`),
  CONSTRAINT `fk_kategori` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id_kategori`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `produk_batik` (`id_produk`, `id_kategori`, `nama_produk`, `kategori`, `harga`, `stok`, `deskripsi`, `status`) VALUES
(1, 1, 'Batik Tulis Dadak Merak', 'Tulis', 350000, 4, 'Batik tulis pola merak tarung dengan pewarnaan alami sogan khas kesenian Reyog.', 'Tersedia'),
(2, 1, 'Batik Tulis Barongan Klasik', 'Tulis', 385000, 2, 'Kain batik tulis halus ornamen barongan dan daun kelor, bahan primissima premium.', 'Tersedia'),
(3, 2, 'Batik Cap Merak Tarung', 'Cap', 175000, 12, 'Perpaduan motif cap tembaga rapi dan canting colet, cocok untuk seragam dan acara resmi.', 'Tersedia'),
(4, 3, 'Kemeja Batik Pria Lengan Panjang', 'Busana', 260000, 3, 'Kemeja formal furing katun adem, jahitan slim fit dan pola motif tersambung rapi.', 'Tersedia'),
(5, 2, 'Selendang Batik Sekar Arum', 'Cap', 120000, 8, 'Kain sutra santung lembut berornamen sulur bunga khas Reyog Ponorogo.', 'Tersedia'),
(6, 3, 'Blouse Batik Wanita Modern', 'Busana', 210000, 5, 'Atasan wanita santai semi-formal kombinasi merak pastel yang elegan.', 'Tersedia');

-- --------------------------------------------------------
-- Struktur Tabel `inquiry_pesanan`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `inquiry_pesanan` (
  `id_pesanan` int(11) NOT NULL AUTO_INCREMENT,
  `id_produk` int(11) NOT NULL,
  `nama_pembeli` varchar(100) NOT NULL,
  `telepon_wa` varchar(20) NOT NULL,
  `catatan` text DEFAULT NULL,
  `tanggal_pesan` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_pesanan`),
  KEY `fk_produk` (`id_produk`),
  CONSTRAINT `fk_produk` FOREIGN KEY (`id_produk`) REFERENCES `produk_batik` (`id_produk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
