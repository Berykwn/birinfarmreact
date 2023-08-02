import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ChartPemesanan from "@/Components/Fragments/ChartPemesanan";

export default function Dashboard(props) {
    const { auth, pages, title } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-stone-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                            Selamat datang di BiriFarm!
                        </h1>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                            BiriFarm adalah platform inovatif yang menghubungkan
                            petani dengan konsumen langsung. Kami menyediakan
                            produk-produk pertanian segar dan berkualitas
                            tinggi, langsung dari ladang kami ke pintu rumah
                            Anda.
                        </p>
                    </div>
                    <div className="flex flex-wrap max-w-2xl">
                        <ChartPemesanan />
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}
