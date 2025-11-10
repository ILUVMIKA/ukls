import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6">
      <div className="card p-6">
        <h1 className="text-3xl font-bold"> Welcome </h1>
        <p className="mt-2 text-gray-600">
          Gunakan menu di atas atau di bawah.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/dashboard" className="badge">Dashboard</Link>
          <Link href="/berita" className="badge">Berita</Link>
          <Link href="/profil" className="badge">Profil</Link>
        </div>
      </div>
    </section>
  );
}
