import React from "react";

const CetakNota = ({ notaData, jenis, ring }) => {
    const total = notaData.jumlah_jantan + notaData.jumlah_betina;
    const currentDate = new Date().toLocaleDateString();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                    <div className="flex justify-center">
                        <img src="img/logo.png" alt="" />
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                        Kec. Semin, Gunung Kidul, Daerah Istimewa Yogyakarta
                        <br />
                    </p>
                </div>

                <div className="">
                    <div className="py-6">
                        <h3 className="text-sm font-light text-gray-900">
                            Tanggal: {currentDate}
                        </h3>
                        <h3 className="text-sm font-light text-gray-900">
                            Nama Pembeli: {notaData.users.name}
                        </h3>
                        <h3 className="text-sm font-light text-gray-900">
                            Kontak: {notaData.kontak}
                        </h3>
                        <h3 className="text-sm font-light text-gray-900">
                            Alamat: {notaData.alamat}
                        </h3>
                    </div>
                    <div className="">
                        <div className="relative">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nama Produk
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Jenis
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Kode Ring
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Jumlah Jantan
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Jumlah Betina
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {notaData.ternak.nama}
                                        </th>
                                        <td className="px-6 py-4">
                                            {jenis.nama}
                                        </td>
                                        <td className="px-6 py-4">
                                            {ring.kode}
                                        </td>
                                        <td className="px-6 py-4">
                                            {notaData.jumlah_jantan}
                                        </td>
                                        <td className="px-6 py-4">
                                            {notaData.jumlah_betina}
                                        </td>
                                        <td className="px-6 py-4">{total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="py-4">
                        <h5 className="text-sm">Catatan:</h5>
                        <p className="text-sm">{notaData.catatan}</p>
                    </div>
                </div>

                {/* Tombol untuk cetak */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePrint}
                >
                    Cetak
                </button>
            </div>
        </div>
    );
};

export default CetakNota;
