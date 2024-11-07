function RowRiwayatPekerjaan(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3">{props.tahun}</div>
            <div className="col-span-12 md:col-span-3">{props.instansi}</div>
            <div className="col-span-12 md:col-span-3">{props.jobdesk}</div>
          </div>
        </div>
      </div>
    );
  }

  export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>

        <RowRiwayatPekerjaan instansi="PT Masoem" tahun="2019" jobdesk="Administrasi"/>
        <RowRiwayatPekerjaan instansi="PT Yamaha" tahun="2020" jobdesk="Akuntan publik"/>
        <RowRiwayatPekerjaan instansi="PT Nirwana" tahun="2020" jobdesk="Sekretaris"/>
        <RowRiwayatPekerjaan instansi="PT Alim Rugi" tahun="2021" jobdesk="Manajer produksi"/>







      </div>
    )
  }