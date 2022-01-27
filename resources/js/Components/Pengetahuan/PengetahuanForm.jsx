import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function PengetahuanForm(props) {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [pengetahuanData, setPengetahuanData] = useState({
        id_penyakit: "",
        id_gejala: "",
        mb: "",
        md: ""
    });

    const [error, setError] = useState();

    const submitPengetahuan = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("pengetahuan-update", pengetahuanData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPengetahuanData((pengetahuanData) => ({
                        ...pengetahuanData,
                        id_penyakit: "",
                        id_gejala: "",
                        mb: "",
                        md: "",
                    }));
                    toast.success("Dokter berhasil diubah!");
                },
            });
        } else {
            Inertia.post("pengetahuan", pengetahuanData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPengetahuanData((pengetahuanData) => ({
                        ...pengetahuanData,
                        id_penyakit: "",
                        id_gejala: "",
                        mb: "",
                        md: "",
                    }));
                    toast.success("Penyakit berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setPengetahuanData((pengetahuanData) => ({
            ...pengetahuanData,
            id: editData?.id,
            id_penyakit: editData?.id_penyakit,
            id_gejala: editData?.id_gejala,
            mb: editData?.mb,
            md: editData?.md,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Pengetahuan`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitPengetahuan}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Penyakit</h1>
                        <select 
                            onChange={(e) => {
                                setPengetahuanData((pengetahuanData) => ({
                                    ...pengetahuanData,
                                    id_penyakit: e.target.value,
                                }));
                            }}
                            value={pengetahuanData.id_penyakit}

                            type="text"
                            name="id_penyakit"
                            id="id_penyakit"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg">

                            <option value="">Silahkan Pilih</option>
                            {props.penyakitsData.map((penyakit, index) =>(
                                <option key={index} 
                                value={penyakit.id}>{penyakit.nama_penyakit}</option>
                            ))};
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Gejala</h1>
                        <select 
                             onChange={(e) => {
                                setPengetahuanData((pengetahuanData) => ({
                                    ...pengetahuanData,
                                    id_gejala: e.target.value,
                                }));
                            }}
                            value={pengetahuanData.id_gejala}

                            type="text"
                            name="id_gejala"
                            id="id_gejala"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg">

                            <option value="">Silahkan Pilih</option>
                            {props.gejalasData.map((gejala, index) =>(
                                <option key={index} 
                                value={gejala.id}>{gejala.nama_gejala}</option>
                            ))};
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">MB</h1>
                        <input
                            onChange={(e) => {  
                                setPengetahuanData((pengetahuanData) => ({
                                    ...pengetahuanData,
                                    mb: e.target.value,
                                }));
                            }}
                            value={pengetahuanData.mb}
                            type="text"
                            name="mb"
                            id="mb"
                            autoComplete="off"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.mb && (
                            <span className="text-xs text-red-500">
                                {error?.mb}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">MD</h1>
                        <input
                            onChange={(e) => {
                                setPengetahuanData((pengetahuanData) => ({
                                    ...pengetahuanData,
                                    md: e.target.value,
                                }));
                            }}
                            value={pengetahuanData.md}
                            type="text"
                            name="md"
                            id="md"
                            autoComplete="off"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.md && (
                            <span className="text-xs text-red-500">
                                {error?.md}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold text-center py-2 rounded-lg mt-2"
                    >
                        Simpan
                    </button>
                </form>
            </ModalRoot>
        </div>
    );
}
