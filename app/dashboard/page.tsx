export default function DashboardPage() {
  const stats = [
    { title: "Total Berita", value: 128, sub: "+12 minggu ini" },
    { title: "Pengguna Aktif", value: 56, sub: "Realtime" },
    { title: "Komentar", value: 342, sub: "+28 hari ini" },
  ];

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Statistik</p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.title} className="card card-hover p-5">
            <p className="text-sm text-gray-500">{s.title}</p>
            <p className="mt-1 text-3xl font-semibold">{s.value}</p>
            <p className="mt-2 text-xs text-gray-500">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold">Aktivitas Terbaru</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>• Admin menambahkan 2 berita baru</li>
          <li>• 4 komentar ditandai sebagai penting</li>
          <li>• 1 pengguna baru mendaftar</li>
        </ul>
      </div>
    </section>
  );
}
