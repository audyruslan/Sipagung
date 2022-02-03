import React from "react";
import Diagnosa from "../Layouts/Diagnosa";
import RiwayatPenyakitTable from "../Components/DiagnosaPenyakit/RiwayatPenyakitTable";

export default function RiwayatPenyakit(props) {
    const HasilPenyakitsData = props.hasilpenyakit.data;

    return (
        <Diagnosa judul="Riwayat Penyakit">
            <div className="p-4 space-y-3">
                <RiwayatPenyakitTable 
                hasilPenyakitsData={HasilPenyakitsData} />
            </div>
        </Diagnosa>
    );
}
