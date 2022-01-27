import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function PenyakitForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [penyakitData, setPenyakitData] = useState({
        nama_penyakit: "",
        det_penyakit: "",
        srn_penyakit: "",
        gambar: "",
    });

    const [error, setError] = useState();

    const submitPenyakit = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("penyakit-update", penyakitData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPenyakitData((penyakitData) => ({
                        ...penyakitData,
                        nama_penyakit: "",
                        det_penyakit: "",
                        srn_penyakit: "",
                        gambar: "",
                    }));
                    toast.success("Dokter berhasil diubah!");
                },
            });
        } else {
            Inertia.post("penyakit", penyakitData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPenyakitData((penyakitData) => ({
                        ...penyakitData,
                        nama_penyakit: "",
                        det_penyakit: "",
                        srn_penyakit: "",
                        gambar: "",
                    }));
                    toast.success("Penyakit berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setPenyakitData((penyakitData) => ({
            ...penyakitData,
            id: editData?.id,
            nama_penyakit: editData?.nama_penyakit,
            det_penyakit: editData?.det_penyakit,
            srn_penyakit: editData?.srn_penyakit,
            gambar: editData?.gambar,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Penyakit`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitPenyakit}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Penyakit</h1>
                        <input
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    nama_penyakit: e.target.value,
                                }));
                            }}
                            value={penyakitData.nama_penyakit}
                            type="text"
                            name="nama_penyakit"
                            id="nama_penyakit"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.nama_penyakit && (
                            <span className="text-xs text-red-500">
                                {error?.nama_penyakit}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Detail Penyakit</h1>
                        <input
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    det_penyakit: e.target.value,
                                }));
                            }}
                            value={penyakitData.det_penyakit}
                            type="text"
                            name="det_penyakit"
                            id="det_penyakit"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.det_penyakit && (
                            <span className="text-xs text-red-500">
                                {error?.det_penyakit}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Saran Penyakit</h1>
                        <input
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    srn_penyakit: e.target.value,
                                }));
                            }}
                            value={penyakitData.srn_penyakit}
                            type="text"
                            name="srn_penyakit"
                            id="srn_penyakit"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.srn_penyakit && (
                            <span className="text-xs text-red-500">
                                {error?.srn_penyakit}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gambar</h1>
                        <input
                            onChange={(e) => {
                                setPenyakitData((penyakitData) => ({
                                    ...penyakitData,
                                    gambar: e.target.value,
                                }));
                            }}
                            value={penyakitData.gambar}
                            type="text"
                            name="gambar"
                            id="gambar"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.gambar && (
                            <span className="text-xs text-red-500">
                                {error?.gambar}
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
