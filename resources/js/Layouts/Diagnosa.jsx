import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Sidebar from "../Components/Diagnosa/Sidebar";
import Header from "../Components/Diagnosa/Header";

export default function Diagnosa(props) {
    return (
        <div className="h-screen w-full sm:flex sm:flex-row flex-col-reverse bg-gray-50">
            <Head title={`${props.judul} | Sipakar`} />
            <Sidebar active={props.judul} />
            <div className="flex-1 overflow-y-auto">
                <Header title={props.judul} />
                {props.children}
            </div>
        </div>
    );
}
