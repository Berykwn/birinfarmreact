import Paginator from "@/Components/Fragments/Paginator";
import PesananTable from "@/Components/Fragments/Tables/PesananTable";
import AdminLayout from "@/Layouts/AdminLayout";
import useSearch from "@/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import PageTitle from "@/Components/Elements/PageTitle";

const Pesanan = (props) => {
    const { auth, pages, pesanans, allPesanan, flash } = props;
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allPesanan,
        pesanans.data,
        ["alamat", "status"],
        "", // You can pass an empty string as relatedKeyword since we're searching by nested property
        ["ternak.nama"] // Pass related search fields here
    );
    return (
        <AdminLayout pages={pages} auth={auth} flash={flash.message}>
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <PageTitle>List Pesanan</PageTitle>

                <SearchInput
                    keyword={searchKeyword}
                    onChange={handleSearchInputChange}
                    size={"lg:w-1/2 w-full"}
                />

                <PesananTable>
                    <PesananTable.Header />
                    {filteredData.length ? (
                        filteredData.map((item) => (
                            <PesananTable.Body
                                key={item.id}
                                id={item.id}
                                ternak={item.ternak}
                                users={item.users}
                                created_at={item.created_at}
                                status={item.status}
                            />
                        ))
                    ) : (
                        <PesananTable.NotFound />
                    )}
                </PesananTable>

                <Paginator link={pesanans.links} />
            </section>
        </AdminLayout>
    );
};

export default Pesanan;
