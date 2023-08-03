import Paginator from "@/Components/Elements/Paginator";
import AdminLayout from "@/Layouts/AdminLayout";
import Alert from "@/Components/Elements/Alert";
import TernakTable from "@/Components/Fragments/Tables/TernakTable";

const Pesanan = (props) => {
    const { auth, pages, title, flash, ternak, allTernak } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="bg-stone-100">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <h1 className="text-stone-900 text-2xl md:text-4xl font-extrabold mb-2">
                        Data ternak
                    </h1>

                    {flash.message && <Alert message={flash.message} />}
                    <TernakTable ternaks={ternak.data} allTernak={allTernak} />
                    <div className="flex justify-start py-4">
                        <Paginator link={ternak.links} flash={flash} />
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default Pesanan;
