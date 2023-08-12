import React from "react";
import { Link } from "@inertiajs/react";
import Paginator from "@/Components/Fragments/Paginator";
import AdminLayout from "@/Layouts/AdminLayout"; 
import TernakTable from "@/Components/Fragments/Tables/TernakTable";
import Breadcrumb from "@/Components/Fragments/Breadcrumb";

const Ternak = (props) => {
    const { auth, pages, title, flash, ternak, allTernak } = props;

    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth}
            flash={flash.message}
        >
            <section className="px-8 mt-2">
                <Breadcrumb pages={pages} title={title} url={'dashboard.ternak'}/>
                <div className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10 mt-4">
                    <h1 className="text-stone-900 text-2xl md:text-4xl font-extrabold mb-2">
                        Data ternak
                    </h1>
                    <div
                        className="p-4 text-sm text-gray-800 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                        role="alert"
                    >
                        Kelola data ternak birinfarm, anda bisa mencari data
                        sesuai keyword yang ada pada tabel, menambah data ternak
                        baru, mengubah data ternak yang sesuai, dan menghapus
                        data ternak yang tidak relevan!
                        <div className="mt-4 mb-2">
                            <Link
                                href={route("dashboard.ternak.create")}
                                className="px-3 py-3 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800"
                            >
                                Tambah Produk
                            </Link>
                        </div>
                    </div>
                    <TernakTable ternaks={ternak.data} allTernak={allTernak} />
                    <div className="flex justify-start py-4">
                        <Paginator link={ternak.links} flash={flash} />
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default Ternak;
