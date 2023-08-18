import React from "react";
import { Link } from "@inertiajs/react";
import Paginator from "@/Components/Fragments/Paginator";
import AdminLayout from "@/Layouts/AdminLayout";
import TernakTable from "@/Components/Fragments/Tables/TernakTable";
import PageTitle from "@/Components/Elements/PageTitle";
import useSearch from "@/Components/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";

const Ternak = (props) => {
    const { auth, pages, title, flash, ternak, allTernak } = props;
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allTernak,
        ternak.data,
        ["nama", "kode_ternak"],
        "", // You can pass an empty string as relatedKeyword since we're searching by nested property
        ["rings.kode", "jenis_ternak.nama"] // Pass related search fields here
    );

    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth}
            flash={flash.message}
        >
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <PageTitle>List ternak</PageTitle>

                <div className="w-3/4 text-sm text-gray-800">
                    <div className="bg-gray-100 p-6">
                        Kelola data ternak birinfarm, anda bisa mencari data
                        sesuai keyword yang ada pada tabel, menambah data ternak
                        baru, mengubah data ternak yang sesuai, dan menghapus
                        data ternak yang tidak relevan!
                        <div className="mt-4">
                            <Link
                                href={route("dashboard.ternak.create")}
                                className="px-3 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700"
                            >
                                Tambah Produk
                            </Link>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-full">
                            <SearchInput
                                keyword={searchKeyword}
                                onChange={handleSearchInputChange}
                            />
                        </div>
                    </div>
                </div>

                <TernakTable>
                    <TernakTable.Header />
                    {filteredData.length ? (
                        filteredData.map((item) => (
                            <TernakTable.Body
                                key={item.id}
                                id={item.id}
                                nama={item.nama}
                                kode_ring={item.rings.kode}
                                kode_ternak={item.kode_ternak}
                                jumlah_jantan={item.jumlah_jantan}
                                jumlah_betina={item.jumlah_betina}
                            />
                        ))
                    ) : (
                        <TernakTable.NotFound />
                    )}
                </TernakTable>

                <Paginator link={ternak.links} flash={flash} />
            </section>
        </AdminLayout>
    );
};

export default Ternak;
