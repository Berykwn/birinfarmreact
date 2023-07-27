import LabelPemesanan from "@/Components/Elements/Input/LabelPemesanan";
import MainLayout from "@/Layouts/MainLayout";

const Pemesanan = (props) => {
    const { title, pages, ternakData } = props;
    return (
        <MainLayout title={title} pages={pages}>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        Form pemesanan
                    </h2>
                    <form action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <LabelPemesanan
                                    htmlFor={"nama_produk"}
                                    value={"Nama Produk"}
                                />
                                <select
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    <option value="">-- Pilih produk --</option>
                                    {ternakData.data.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.jenis_ternak.nama} {" - "}{" "}
                                            {item.kode_ternak}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full">
                                <LabelPemesanan
                                    htmlFor={"jumlah_jantan"}
                                    value={"Jumlah Jantan"}
                                />
                                <input
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="masukan jumlah jantan"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <LabelPemesanan
                                    htmlFor={"jumlah_betina"}
                                    value={"Jumlah Betina"}
                                />
                                <input
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="masukan jumlah betina"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Kontak
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="masukan kontak anda"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Alamat
                                </label>
                                <textarea
                                    id="description"
                                    rows="8"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your description here"
                                ></textarea>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Catatan
                                </label>
                                <textarea
                                    id="description"
                                    rows="8"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your description here"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mt-2 focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                        >
                            Pesan
                        </button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
};

export default Pemesanan;
