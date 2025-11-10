export interface Berita {
  id: number;
  nama: string;
  tanggal?: string;
  isi: string;
}

export const beritaData1: Berita[] = [
  {
    id: 1,
    nama: "Pemerintah Tambah Libur Nasional pada 30 Desember 2025",
    tanggal: "2025-11-04",
    isi: "Pemerintah Indonesia resmi menambah satu hari libur nasional pada tanggal 30 Desember 2025. Keputusan ini diumumkan melalui konferensi pers oleh Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan.",
  },
    {
    id: 2,
    nama: "Pemerintah Makan gratis pada 3 November 2025",
    tanggal: "2025-11-04",
    isi: "Makan gratis diberikan kepada seluruh warga negara Indonesia sebagai bentuk apresiasi atas partisipasi aktif mereka dalam berbagai program pemerintah sepanjang tahun 2025.",
  },

];