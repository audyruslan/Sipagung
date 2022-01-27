import React from "react";
import Admin from "../../Layouts/Admin";
import * as MdIcons from "react-icons/md";
import { useRecoilState } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import PengetahuanTable from "../../Components/PengetahuanHama/PengetahuanTable";
import PengetahuanForm from "../../Components/PengetahuanHama/PengetahuanForm";

export default function Pengetahuan(props) {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [dataEdit, setDataEdit] = useRecoilState(modalData);
    const PengetahuansData = props.pengetahuanhama.data;
    const PenyakitsData = props.hama.data;
    const GejalasData = props.gejalahama.data;

    return (
        <Admin judul="Pengetahuan Hama">
            <PengetahuanForm 
                penyakitsData={PenyakitsData} 
                gejalasData={GejalasData} />
            <div className="p-4 space-y-3">
                <button
                    onClick={() => {
                        setDataEdit(null);
                        setShowModal(true);
                    }}
                    className="text-blue-500 border-2 border-blue-600 px-3 py-1 rounded-xl 
                focus:ring focus:outline-none focus:ring-blue-200 hover:bg-blue-500
                hover:text-white transition-all duration-200 flex items-center space-x-2"
                >
                    <MdIcons.MdAddCircle size={16} />
                    <h1>Tambah</h1>
                </button>
                <PengetahuanTable pengetahuansData={PengetahuansData} />
            </div>
        </Admin>
    );
}
