import React from "react";
import Diagnosa from "../Layouts/Diagnosa";
import RiwayatHamaTable from "../Components/DiagnosaHama/RiwayatHamaTable";

export default function RiwayatHama(props) {
    const HasilHamasData = props.hasilhama.data;

    return (
        <Diagnosa judul="Riwayat Hama">
            <div className="p-4 space-y-3">
                <RiwayatHamaTable 
                hasilHamasData={HasilHamasData} />
            </div>
        </Diagnosa>
    );
}
