import Icon from "@/Components/Elements/Icon";
import Paginator from "@/Components/Elements/Paginator";
import PesananTable from "@/Components/Fragments/Tables/PesananTable";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

const Pesanan = (props) => {
    const { auth, pages, title, pesanan, allPesanan } = props;
    console.log(pesanan);
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <h1 className="text-stone-900 dark:text-white text-2xl md:text-4xl font-extrabold mb-2">
                        Daftar pesanan
                    </h1>
                    <PesananTable
                        pesanans={pesanan.data}
                        allPesanan={allPesanan}
                    />
                    <div className="flex justify-start py-4">
                        <Paginator link={pesanan.links} />
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default Pesanan;
