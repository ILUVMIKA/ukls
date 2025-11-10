import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Manager Panel</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link href="/berita" className="hover:bg-gray-700 p-2 rounded">Berita</Link>
        <Link href="/profil" className="hover:bg-gray-700 p-2 rounded">Profil</Link>
      </nav>
    </aside>
  );
}
