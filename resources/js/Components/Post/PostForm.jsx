import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function PostForm() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [postData, setPostData] = useState({
        nama_post: "",
        det_post: "",
        srn_post: "",
        gambar: "",
    });

    const [error, setError] = useState();

    const submitPost = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("post-update", postData, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPostData((postData) => ({
                        ...postData,
                        nama_post: "",
                        det_post: "",
                        srn_post: "",
                        gambar: "",
                    }));
                    toast.success("Postingan berhasil diubah!");
                },
            });
        } else {
            Inertia.post("post", postData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setPostData((postData) => ({
                        ...postData,
                        nama_post: "",
                        det_post: "",
                        srn_post: "",
                        gambar: "",
                    }));
                    toast.success("Postingan berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setPostData((postData) => ({
            ...postData,
            id: editData?.id,
            nama_post: editData?.nama_post,
            det_post: editData?.det_post,
            srn_post: editData?.srn_post,
            gambar: editData?.gambar,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Post`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitPost}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama post</h1>
                        <input
                            onChange={(e) => {
                                setPostData((postData) => ({
                                    ...postData,
                                    nama_post: e.target.value,
                                }));
                            }}
                            value={postData.nama_post}
                            type="text"
                            name="nama_post"
                            id="nama_post"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.nama_post && (
                            <span className="text-xs text-red-500">
                                {error?.nama_post}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Detail post</h1>
                        <input
                            onChange={(e) => {
                                setPostData((postData) => ({
                                    ...postData,
                                    det_post: e.target.value,
                                }));
                            }}
                            value={postData.det_post}
                            type="text"
                            name="det_post"
                            id="det_post"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.det_post && (
                            <span className="text-xs text-red-500">
                                {error?.det_post}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Saran post</h1>
                        <input
                            onChange={(e) => {
                                setPostData((postData) => ({
                                    ...postData,
                                    srn_post: e.target.value,
                                }));
                            }}
                            value={postData.srn_post}
                            type="text"
                            name="srn_post"
                            id="srn_post"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.srn_post && (
                            <span className="text-xs text-red-500">
                                {error?.srn_post}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gambar</h1>
                        <input
                            onChange={(e) => {
                                setPostData((postData) => ({
                                    ...postData,
                                    gambar: e.target.value,
                                }));
                            }}
                            value={postData.gambar}
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
