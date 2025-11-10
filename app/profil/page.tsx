export default function ProfilPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Profil</h1>
        <p className="text-gray-600">Akun Anda</p>
      </header>

      <div className="card p-6">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-gray-100 text-gray-500">
            <span className="text-xl font-semibold">U</span>
          </div>

          <div className="grow">
            <p className="text-lg font-semibold">Leon</p>
            <p className="text-sm text-gray-600">Leon@email.com</p>
          </div>

          <button className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50">
            Edit Profil
          </button>
        </div>
      </div>
    </section>
  );
}
