import SearchInput from "@/Components/Elements/Input/SearchInput";
import AlertNoFound from "@/Components/Elements/Alert/AlertNotFound";
import Paginator from "@/Components/Fragments/Paginator";
import MainLayout from "@/Layouts/MainLayout";
import TernakCard from "@/Components/Fragments/Card/TernakCard";
import useSearch from "@/Components/Hooks/useSearch";

const Ternak = (props) => {
    const { title, pages, ternak, allTernak, auth } = props;
    const ternaks = ternak.data

    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allTernak,
        ternaks,
        ["nama", "deskripsi"]
    );

    return (
        <MainLayout title={title} pages={pages} auth={auth}>
            <section className="bg-base-100 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-white mb-8 max-w-4xl">
                        <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
                            Produk ternak BirinFarm
                        </h1>
                        <p className="text-lg font-normal text-gray-500 mb-6">
                            "BirinFarm memiliki beragam produk ternak yang unggul,
                            dihasilkan dengan standar kualitas tinggi dan tekad kuat untuk
                            memenuhi kebutuhan pasar."
                        </p>
                        <SearchInput keyword={searchKeyword} onChange={handleSearchInputChange} />
                    </div>
                    {filteredData.length > 0 ? (
                        <div className="mx-auto max-w-full py-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredData.map((item) => (
                                    <TernakCard key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <AlertNoFound>Data ternak tidak ditemukan!!!</AlertNoFound>
                    )}
                    <div className="flex justify-start py-4">
                        <Paginator link={ternak.links} />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Ternak;
