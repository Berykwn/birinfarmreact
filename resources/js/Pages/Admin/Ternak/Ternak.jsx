import Paginator from "@/Components/Elements/Paginator";
import AdminLayout from "@/Layouts/AdminLayout";
import TernakTable from "@/Components/Fragments/Tables/TernakTable";
import AlertSuccess from "@/Components/Elements/Alert/AlertSuccess";
import { Link } from "@inertiajs/react";
import Icon from "@/Components/Elements/Icon";

const Pesanan = (props) => {
    const { auth, pages, title, flash, ternak, allTernak } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="bg-stone-100">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="flex">
                        <h1 className="text-stone-900 text-2xl md:text-4xl font-extrabold mb-2">
                            Data ternak - 
                        </h1>
                        <div className="px-3 lg:py-2 md:py-2 py-1">
                            <Link
                                href={route('dashboard.ternak.create')}
                                className="px-3 py-2 text-xs font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800"
                            >
                                Tambah Produk
                            </Link>
                        </div>
                    </div>
                    {flash.message && <AlertSuccess message={flash.message} />}
                    <TernakTable
                        ternaks={ternak.data}
                        allTernak={allTernak}
                    />
                    <div className="flex justify-start py-4">
                        <Paginator link={ternak.links} flash={flash} />
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default Pesanan;
