import AdminLayout from "@/Layouts/AdminLayout";
import PageTitle from "@/Components/Elements/PageTitle";
import ArtikelTable from "@/Components/Fragments/Tables/ArtikelTable";
import useSearch from "@/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import Paginator from "@/Components/Fragments/Paginator";

const Artikel = (props) => {
    const { auth, pages, flash, artikel, allArtikel } = props;
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allArtikel,
        artikel.data,
        ["judul", "deskripsi"],
        "" // You can pass an empty string as relatedKeyword since we're searching by nested property
    );

    return (
        <AdminLayout
            pages={pages}
            auth={auth}
            flash={flash.message}
        >
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <PageTitle>Artikel data</PageTitle>

                <SearchInput
                    keyword={searchKeyword}
                    onChange={handleSearchInputChange}
                    size={"lg:w-1/2 w-full"}
                />
                
                <ArtikelTable>
                    <ArtikelTable.Header />
                    {filteredData.length ? (
                        filteredData.map((item) => (
                            <ArtikelTable.Body
                                key={item.id}
                                id={item.id}
                                judul={item.judul}
                                deskripsi={item.deskripsi}
                                author={item.author}
                            />
                        ))
                    ) : (
                        <ArtikelTable.NotFound />
                    )}
                </ArtikelTable>

                <Paginator link={artikel.links} />
            </section>
        </AdminLayout>
    );
};

export default Artikel;
