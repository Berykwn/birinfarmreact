import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";

const DetailTernak = (props) => {
    const { title, pages, ternakDetail, auth } = props;
    return (
        <MainLayout title={title} pages={pages} auth={auth}>
            <section className="bg-off-white-gray">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="lg:pl-24 lg:pr-4 lg:py-16">
                        <div className="relative lg:rounded-lg overflow-hidden">
                            <img
                                src={`img/${ternakDetail.foto}`}
                                alt={ternakDetail.nama}
                                className="w-full max-w-200 max-h-200 object-cover animate-fade-in cursor-pointer lg:max-w-none"
                            />
                        </div>
                    </div>
                    <div className="px-14 lg:py-16 py-4 pl-0 max-w-md mx-auto overflow-hidden md:max-w-2xl">
                        <div className="flex">
                            <Link
                                href={route("pemesanan")}
                                className="focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                            >
                                Pesan
                            </Link>
                            <h2 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                                {ternakDetail.jenis_ternak.nama} {" - "}{" "}
                                {ternakDetail.kode_ternak}
                            </h2>
                        </div>
                        <div className="flex items-center gap-x-2 text-xs mt-1">
                            <span className="text-slate-500">
                                <span className="text-slate-500">
                                    Jumlah jantan: {ternakDetail.jumlah_jantan}{" "}
                                </span>
                                <span className="text-slate-500">
                                    • Jumlah jantan:{" "}
                                    {ternakDetail.jumlah_jantan}
                                </span>
                            </span>
                        </div>
                        <p
                            className="mt-2 text-gray-500 text-md text-justify"
                            dangerouslySetInnerHTML={{
                                __html: ternakDetail.deskripsi,
                            }}
                        ></p>
                        <h2 className="block mt-2 text-2xl leading-tight font-medium text-black">
                            Kode ring: {ternakDetail.rings.kode}
                        </h2>
                        <p
                            className="mt-2 text-gray-500 text-md text-justify"
                            dangerouslySetInnerHTML={{
                                __html: ternakDetail.rings.deskripsi,
                            }}
                        ></p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default DetailTernak;
