import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import AlertNoFound from "@/Components/Elements/Alert/AlertNotFound";
import useSearch from "@/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import CardArtikel from "@/Components/Fragments/Card/CardArtikel";
import PageTitle from "@/Components/Elements/PageTitle";
import Paginator from "@/Components/Fragments/Paginator";

const Artikel = (props) => {
    const { pages, artikel, allArtikel, auth } = props;

    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allArtikel,
        artikel.data,
        ["nama", "deskripsi"]
    );

    return (
        <MainLayout pages={pages} auth={auth}>
            <section className="bg-base-100 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <PageTitle>Artikel</PageTitle>

                    <SearchInput
                        keyword={searchKeyword}
                        onChange={handleSearchInputChange}
                    />

                    {filteredData.length > 0 ? (
                        <div className="mx-auto max-w-full py-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredData.map((item) => (
                                    <CardArtikel key={item.id}>
                                        <CardArtikel.Header
                                            image={item.image}
                                        />
                                        <CardArtikel.Body
                                            judul={item.judul}
                                            deskripsi={item.deskripsi}
                                            updated_at={item.updated_at}
                                            author={item.author}
                                        />
                                    </CardArtikel>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <AlertNoFound>
                            Data ternak tidak ditemukan!!!
                        </AlertNoFound>
                    )}
                    <Paginator link={artikel.links}/>
                </div>
            </section>
        </MainLayout>
    );
};

export default Artikel;
