import React from "react";
import { Link } from "@inertiajs/react";
import Paginator from "@/Components/Fragments/Paginator";
import AdminLayout from "@/Layouts/AdminLayout";
import TernakTable from "@/Components/Fragments/Tables/TernakTable";
import PageTitle from "@/Components/Elements/PageTitle";
import useSearch from "@/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import Jumbotron from "@/Components/Fragments/Jumbotron";
import PrimaryLink from "@/Components/Elements/Link/PrimaryLInk";

const Ternak = (props) => {
    const { auth, pages, flash, ternak, allTernak } = props;
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allTernak,
        ternak.data,
        ["nama", "kode_ternak"],
        "", // You can pass an empty string as relatedKeyword since we're searching by nested property
        ["rings.kode", "jenis_ternak.nama"] // Pass related search fields here
    );

    return (
        <AdminLayout pages={pages} auth={auth} flash={flash.message}>
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <PageTitle>List ternak</PageTitle>

                <Jumbotron>
                    Kelola data ternak birinfarm, anda bisa mencari data sesuai
                    keyword yang ada pada tabel, menambah data ternak baru,
                    mengubah data ternak yang sesuai, dan menghapus data ternak
                    yang tidak relevan!
                    <div className="mt-4">
                        <PrimaryLink href={route("dashboard.ternak.create")}>
                            Tambah Produk
                        </PrimaryLink>
                    </div>
                </Jumbotron>

                <SearchInput
                    keyword={searchKeyword}
                    onChange={handleSearchInputChange}
                    size={"lg:w-1/2 w-full"}
                />

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
