import React from "react";

export default function DiagnosaPenyakitTable(props) {

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="bg-white divide-y divide-gray-200">
                                {props.gejalaPenyakitsData.map((gejala, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {gejala.nama_gejala}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                <select
                                                    type="text"
                                                    name="kondisihama"
                                                    id="kondisihama"
                                                    className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg">

                                                    <option value="">Silahkan Pilih</option>
                                                    {props.kondisiPenyakitsData.map((kondisi, index) => (
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
                    </div>
                </div>
            </div>
        </div>
    );
}
