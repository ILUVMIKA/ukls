import { beritaData1 } from "@/data/berita";
import Link from "next/link";
export default function BeritaPage() {
  return (
    <>
    <h2>selamat datang</h2>
    <div>
      {beritaData1.map((berita) => (
        <div key={berita.id} className="card mb-4 p-4">
        <Link href={"/berita/"+berita.id}><h3 className="text-gray-700">{berita.nama}</h3></Link>
        </div>
      ))}
    </div>

    </>
  );
}
