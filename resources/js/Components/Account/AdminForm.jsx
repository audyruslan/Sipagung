import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function AdminForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [adminData, setAdminData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState();

    const submitAdmin = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("admin-update", adminData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setAdminData((adminData) => ({
                        ...adminData,
                        name: "",
                        username: "",
                        email: "",
                        password: ""
                    }));
                    toast.success("Admin berhasil diubah!");
                },
            });
        } else {
            Inertia.post("admin", adminData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setAdminData((adminData) => ({
                        ...adminData,
                        name: "",
                        username: "",
                        email: "",
                        password: ""
                    }));
                    toast.success("Admin berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setAdminData((adminData) => ({
            ...adminData,
            id: editData?.id,
            name: editData?.name,
            username: editData?.username,
            email: editData?.email,
            password: editData?.password
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Admin`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitAdmin}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Lengkap</h1>
                        <input
                            onChange={(e) => {
                                setAdminData((adminData) => ({
                                    ...adminData,
                                    name: e.target.value,
                                }));
                            }}
                            value={adminData.name}
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.name && (
                            <span className="text-xs text-red-500">
                                {error?.name}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm"></h1>Username
                        <input
                            onChange={(e) => {
                                setAdminData((adminData) => ({
                                    ...adminData,
                                    username: e.target.value,
                                }));
                            }}
                            value={adminData.username}
                            type="text"
                            name="username"
                            id="username"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.username && (
                            <span className="text-xs text-red-500">
                                {error?.username}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm"></h1>Email
                        <input
                            onChange={(e) => {
                                setAdminData((adminData) => ({
                                    ...adminData,
                                    email: e.target.value,
                                }));
                            }}
                            value={adminData.email}
                            type="email"
                            name="email"
                            id="email"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.email && (
                            <span className="text-xs text-red-500">
                                {error?.email}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm"></h1>Password
                        <input
                            onChange={(e) => {
                                setAdminData((adminData) => ({
                                    ...adminData,
                                    password: e.target.value,
                                }));
                            }}
                            value={adminData.password}
                            type="text"
                            name="password"
                            id="password"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.password && (
                            <span className="text-xs text-red-500">
                                {error?.password}
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
