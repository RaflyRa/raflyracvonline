import foto from '../Foto.jpeg';

function Profile() {
  return (
    <img
      src={foto.src}
      alt="RaflyRA"
      className="fotoku"
    />
  );
}

export default function Hero() {
  return (
    <div className="container mx-auto p-2 text-center">
      <h1 className="text-gray-400 font-bold">CV Online</h1>
      <h1 className="text-3xl text-red-400 font-bold">Rafly Radithya A.R</h1>
      <Profile />
      <p>Saya Adalah Mahasiswa Ma'soem University Prodi Komputerisasi Akuntansi
      Saya adalah Mahasiswa yang tak pernah berhenti. Meski tak selalu mudah,  setiap langkah kecil membawa perubahan. Saya berhak  bangga pada diri saya sendiri.Karena Saya percaya pada proses dan usaha yang saya jalani. Setiap hari adalah kesempatan baru untuk tumbuh dan menjadi lebih baik.🔥🔥🔥"
      </p>
      <h1 className="text-3xl text-red-400 font-bold">#JanganLupaMakan</h1>
    </div>
  );
}
