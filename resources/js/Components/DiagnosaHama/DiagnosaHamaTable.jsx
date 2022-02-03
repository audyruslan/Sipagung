import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function DiagnosaHamaTable(props) {

    const [kondisiHama, setKondisiHama] = useState('');

    const submitDiagnosaHama = (e) => {
        e.preventDefault();
        Inertia.post("diagnosahama", kondisiHama);
    };

    return (

        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <form onSubmit={submitDiagnosaHama}>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <th>No</th>
                                        <th>Kode</th>
                                        <th>Gejala</th>
                                        <th>Kondisi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {props.gejalaHamasData.map((gejala, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {index + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    G00{index + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {gejala.nama_gejala}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    <select
                                                        onChange={(e) => setKondisiHama(e.target.value)}
                                                        type="text"
                                                        name="kondisihama"
                                                        id="kondisihama"
                                                        className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg">

                                                        <option value="">Silahkan Pilih</option>
                                                        {props.kondisiHamasData.map((kondisi, index) => (
                                                            <option key={index}
                                                                value={kondisi.id}>{kondisi.kondisi}</option>
                                                        ))};
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div class="absolute bottom-0 right-0 h-16 w-16">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white font-bold text-center py-2 rounded-lg mt-2"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
