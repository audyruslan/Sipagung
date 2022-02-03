import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

export default function Sidebar(props) {
    return (
        <div className="sm:h-screen h-fit p-5 bg-white shadow-xl w-full sm:w-fit md:w-64 fixed sm:relative bottom-0">
            <div className="hidden sm:flex space-x-4 py-5 justify-center items-center">
                <MdIcons.MdMedicalServices
                    size={32}
                    className="text-blue-600"
                />
                <Link href="/">
                    <h1 className="font-bold text-3xl text-blue-600 hidden md:block sm:hidden">
                        SIPAKAR
                    </h1>
                </Link>
            </div>
            <div className="mt-0 sm:mt-10 flex flex-row sm:flex-col space-y-0 sm:space-y-2 items-center sm:items-start justify-evenly sm:justify-start">
                <Link className="w-auto sm:w-full" href="diagnosa">
                    <div
                        className={`flex ${props.active == "Sistem Pakar Diagnosis Penyakit Jagung" 
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                            }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Dashboard</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="diagnosahama">
                    <div
                        className={`flex ${props.active == "Diagnosa Hama"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                            }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Diagnosa Hama</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="riwayathama">
                    <div
                        className={`flex ${props.active == "Riwayat Hama"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                            }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Riwayat Hama</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="diagnosapenyakit">
                    <div
                        className={`flex ${props.active == "Diagnosa Penyakit"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                            }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Diagnosa Penyakit</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="riwayatpenyakit">
                    <div
                        className={`flex ${props.active == "Riwayat Penyakit"
                            ? "bg-blue-600 border-blue-900 text-white font-bold"
                            : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                            }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Riwayat Penyakit</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="keterangan">
                    <div
                        className={`flex ${props.active == "Keterangan"
                            ? "bg-blue-600 border-blue-900 text-white font-bold"
                            : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                            }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Keterangan</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="about">
                    <div
                        className={`flex ${props.active == "About"
                            ? "bg-blue-600 border-blue-900 text-white font-bold"
                            : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                            }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">About</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
