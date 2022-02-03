import React from "react";
import Diagnosa from "../Layouts/Diagnosa";
import DiagnosaPenyakitTable from "../Components/DiagnosaPenyakit/DiagnosaPenyakitTable";

export default function DiagnosaPenyakit(props) {
    const KondisiPenyakitsData = props.kondisipenyakit.data;
    const GejalaPenyakitsData = props.gejalapenyakit.data;

    return (
        <Diagnosa judul="Diagnosa Penyakit">
            <div className="p-4 space-y-3">
                <DiagnosaPenyakitTable 
                kondisiPenyakitsData={KondisiPenyakitsData}
                gejalaPenyakitsData={GejalaPenyakitsData} />
            </div>
        </Diagnosa>
    );
}
