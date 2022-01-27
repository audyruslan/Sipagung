import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function GejalaForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [gejalaData, setGejalaData] = useState({
        nama_gejala: "",
    });

    const [error, setError] = useState();

    const submitGejala = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("gejala-update", gejalaData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setGejalaData((gejalaData) => ({
                        ...gejalaData,
                        nama_gejala: "",
                    }));
                    toast.success("Gejala berhasil diubah!");
                },
            });
        } else {
            Inertia.post("gejala", gejalaData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setGejalaData((gejalaData) => ({
                        ...gejalaData,
                        nama_gejala: "",
                    }));
                    toast.success("Gejala berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setGejalaData((gejalaData) => ({
            ...gejalaData,
            id: editData?.id,
            nama_gejala: editData?.nama_gejala,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Gejala`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitGejala}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Gejala</h1>
                        <input
                            onChange={(e) => {
                                setGejalaData((gejalaData) => ({
                                    ...gejalaData,
                                    nama_gejala: e.target.value,
                                }));
                            }}
                            value={gejalaData.nama_gejala}
                            type="text"
                            name="nama_gejala"
                            id="nama_gejala"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.nama_gejala && (
                            <span className="text-xs text-red-500">
                                {error?.nama_gejala}
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
