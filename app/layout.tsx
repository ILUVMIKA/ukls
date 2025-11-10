import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "UKL",
  description: "Navbar sederhana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#f8f8f8",
            borderBottom: "1px solid #ddd",
            position: "sticky",
            top: 0,
          }}
        >
          <Link href="/" style={{ fontWeight: "bold", fontSize: "20px" }}>
            Telkom
          </Link>

          <div style={{ display: "flex", gap: "15px" }}>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/berita">Berita</Link>
            <Link href="/profil">Profil</Link>
          </div>
        </nav>

        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
