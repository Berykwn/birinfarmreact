import Paginator from "@/Components/Fragments/Paginator";
import PesananTable from "@/Components/Fragments/Tables/PesananTable";
import AdminLayout from "@/Layouts/AdminLayout";

const Pesanan = (props) => {
    const { auth, pages, title, pesanan, allPesanan, flash } = props;
    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth}
            flash={flash.message}
        >
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <h1 className="text-stone-900 dark:text-white text-2xl md:text-4xl font-extrabold mb-2">
                    Daftar pesanan
                </h1>
                <div
                    className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                    role="alert"
                >
                    perikasa stok barang dan segera konfirmasi pesanan user
                    dengan mengklik button dibawah!
                </div>
                <PesananTable pesanans={pesanan.data} allPesanan={allPesanan} />
                <div className="flex justify-start py-4">
                    <Paginator link={pesanan.links} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default Pesanan;
