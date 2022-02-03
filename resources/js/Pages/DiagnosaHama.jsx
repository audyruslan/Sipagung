import React from "react";
import Diagnosa from "../Layouts/Diagnosa";
import DiagnosaHamaTable from "../Components/DiagnosaHama/DiagnosaHamaTable";

export default function DiagnosaHama(props) {
    const KondisiHamasData = props.kondisihama.data;
    const GejalaHamasData = props.gejalahama.data;

    return (
        <Diagnosa judul="Diagnosa Hama">
            <div className="p-4 space-y-3">
                <DiagnosaHamaTable 
                kondisiHamasData={KondisiHamasData}
                gejalaHamasData={GejalaHamasData} />
            </div>
        </Diagnosa>
    );
}
