import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function KondisiForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [kondisiData, setKondisiData] = useState({
        kondisi: "",
        bobot: ""
    });

    const [error, setError] = useState();

    const submitKondisi = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("kondisi-update", kondisiData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setKondisiData((kondisiData) => ({
                        ...kondisiData,
                        kondisi: "",
                        bobot: ""
                    }));
                    toast.success("Kondisi Penyakit berhasil diubah!");
                },
            });
        } else {
            Inertia.post("kondisi", kondisiData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setKondisiData((kondisiData) => ({
                        ...kondisiData,
                        kondisi: "",
                        bobot: ""
                    }));
                    toast.success("Kondisi Penyakit berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setKondisiData((kondisiData) => ({
            ...kondisiData,
            id: editData?.id,
            kondisi: editData?.kondisi,
            bobot: editData?.bobot
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Kondisi Penyakit`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitKondisi}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Kondisi Penyakit</h1>
                        <input
                            onChange={(e) => {
                                setKondisiData((kondisiData) => ({
                                    ...kondisiData,
                                    kondisi: e.target.value,
                                }));
                            }}
                            value={kondisiData.kondisi}
                            type="text"
                            name="kondisi"
                            id="kondisi"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.kondisi && (
                            <span className="text-xs text-red-500">
                                {error?.kondisi}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nilai Bobot</h1>
                        <input
                            onChange={(e) => {
                                setKondisiData((kondisiData) => ({
                                    ...kondisiData,
                                    bobot: e.target.value,
                                }));
                            }}
                            value={kondisiData.bobot}
                            type="text"
                            name="bobot"
                            id="bobot"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.bobot && (
                            <span className="text-xs text-red-500">
                                {error?.bobot}
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
