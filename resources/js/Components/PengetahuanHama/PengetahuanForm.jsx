import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function PengetahuanForm(props) {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [pengetahuanHamaData, setPengetahuanHamaData] = useState({
        hama_id: "",
        gejala_id: "",
        mb: "",
        md: ""
    });

    const [error, setError] = useState();

    const submitPengetahuanHama = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("pengetahuanhama-update", pengetahuanHamaData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPengetahuanHamaData((pengetahuanHamaData) => ({
                        ...pengetahuanHamaData,
                        hama_id: "",
                        gejala_id: "",
                        mb: "",
                        md: "",
                    }));
                    toast.success("Pengetahuan Hama berhasil diubah!");
                },
            });
        } else {
            Inertia.post("pengetahuanhama", pengetahuanHamaData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPengetahuanHamaData((pengetahuanHamaData) => ({
                        ...pengetahuanHamaData,
                        hama_id: "",
                        gejala_id: "",
                        mb: "",
                        md: "",
                    }));
                    toast.success("Pengetahuan Hama berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setPengetahuanHamaData((pengetahuanHamaData) => ({
            ...pengetahuanHamaData,
            id: editData?.id,
            hama_id: editData?.hama_id,
            gejala_id: editData?.gejala_id,
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
                    onSubmit={submitPengetahuanHama}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Penyakit</h1>
                        <select 
                            onChange={(e) => {
                                setPengetahuanHamaData((pengetahuanHamaData) => ({
                                    ...pengetahuanHamaData,
                                    hama_id: e.target.value,
                                }));
                            }}
                            value={pengetahuanHamaData.hama_id}

                            type="text"
                            name="hama_id"
                            id="hama_id"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg">

                            <option value="">Silahkan Pilih</option>
                            {props.hamasData.map((hama, index) =>(
                                <option key={index} 
                                value={hama.id}>{hama.nama_hama}</option>
                            ))};
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Gejala</h1>
                        <select 
                             onChange={(e) => {
                                setPengetahuanHamaData((pengetahuanHamaData) => ({
                                    ...pengetahuanHamaData,
                                    gejala_id: e.target.value,
                                }));
                            }}
                            value={pengetahuanHamaData.gejala_id}

                            type="text"
                            name="gejala_id"
                            id="gejala_id"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg">

                            <option value="">Silahkan Pilih</option>
                            {props.gejalaHamasData.map((gejalaHama, index) =>(
                                <option key={index} 
                                value={gejalaHama.id}>{gejalaHama.nama_gejala}</option>
                            ))};
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">MB</h1>
                        <input
                            onChange={(e) => {  
                                setPengetahuanHamaData((pengetahuanHamaData) => ({
                                    ...pengetahuanHamaData,
                                    mb: e.target.value,
                                }));
                            }}
                            value={pengetahuanHamaData.mb}
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
                                setPengetahuanHamaData((pengetahuanHamaData) => ({
                                    ...pengetahuanHamaData,
                                    md: e.target.value,
                                }));
                            }}
                            value={pengetahuanHamaData.md}
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
