function RowRiwayatPendidikan(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3">{props.jenjang}</div>
            <div className="col-span-12 md:col-span-3">{props.sekolah}</div>
            <div className="col-span-12 md:col-span-3">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }

  export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pendidikan</h2>

        <RowRiwayatPendidikan jenjang="SD" sekolah="SDN ANDIR" tahun="2010" />
        <RowRiwayatPendidikan jenjang="SMP" sekolah="SMPN 1 PACET" tahun="2016" />
        <RowRiwayatPendidikan jenjang="SMA" sekolah="SMAN 2 MAJALAYA" tahun="2019" />
        <RowRiwayatPendidikan jenjang="Diploma" sekolah="MA'SOEM UNIVERSITY" tahun="2022" />







      </div>
    )
  }