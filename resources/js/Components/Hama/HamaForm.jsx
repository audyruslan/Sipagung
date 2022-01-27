import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function HamaForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [hamaData, setHamaData] = useState({
        nama_hama: "",
        det_hama: "",
        srn_hama: "",
        gambar: "",
    });

    const [error, setError] = useState();

    const submitHama = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("hama-update", hamaData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setHamaData((hamaData) => ({
                        ...hamaData,
                        nama_hama: "",
                        det_hama: "",
                        srn_hama: "",
                        gambar: "",
                    }));
                    toast.success("Hama berhasil diubah!");
                },
            });
        } else {
            Inertia.post("hama", hamaData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setHamaData((hamaData) => ({
                        ...hamaData,
                        nama_hama: "",
                        det_hama: "",
                        srn_hama: "",
                        gambar: "",
                    }));
                    toast.success("Hama berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setHamaData((hamaData) => ({
            ...hamaData,
            id: editData?.id,
            nama_hama: editData?.nama_hama,
            det_hama: editData?.det_hama,
            srn_hama: editData?.srn_hama,
            gambar: editData?.gambar,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Hama`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitHama}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Hama</h1>
                        <input
                            onChange={(e) => {
                                setHamaData((hamaData) => ({
                                    ...hamaData,
                                    nama_hama: e.target.value,
                                }));
                            }}
                            value={hamaData.nama_hama}
                            type="text"
                            name="nama_hama"
                            id="nama_hama"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.nama_hama && (
                            <span className="text-xs text-red-500">
                                {error?.nama_hama}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Detail Hama</h1>
                        <input
                            onChange={(e) => {
                                setHamaData((hamaData) => ({
                                    ...hamaData,
                                    det_hama: e.target.value,
                                }));
                            }}
                            value={hamaData.det_hama}
                            type="text"
                            name="det_hama"
                            id="det_hama"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.det_hama && (
                            <span className="text-xs text-red-500">
                                {error?.det_hama}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Saran Hama</h1>
                        <input
                            onChange={(e) => {
                                setHamaData((hamaData) => ({
                                    ...hamaData,
                                    srn_hama: e.target.value,
                                }));
                            }}
                            value={hamaData.srn_hama}
                            type="text"
                            name="srn_hama"
                            id="srn_hama"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.srn_hama && (
                            <span className="text-xs text-red-500">
                                {error?.srn_hama}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gambar</h1>
                        <input
                            onChange={(e) => {
                                setHamaData((hamaData) => ({
                                    ...hamaData,
                                    gambar: e.target.value,
                                }));
                            }}
                            value={hamaData.gambar}
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
