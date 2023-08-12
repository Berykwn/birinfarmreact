import Alert from "@/Components/Elements/Alert/AlertSuccess";
import TransactionTable from "@/Components/Fragments/Tables/TransactionTable";
import MainLayout from "@/Layouts/MainLayout";

const Transaksi = (props) => {
    const { title, pages, auth, flash, transactions } = props;
    return (
        <MainLayout title={title} pages={pages} auth={auth}>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 mx-auto max-w-4xl lg:py-10">
                    <div className="p-8 my-2 text-sm text-gray-800 rounded-lg bg-white shadow">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tabel transaksi</h2>
                        <p className="mt-2 mb-4">
                            Silahkan cetak nota lalu hubungi admin pada nomor yang tertara di nota!
                        </p>
                        {flash.message && <Alert message={flash.message} />}
                        <div className="relative overflow-x-auto">
                            <TransactionTable transaction={transactions} />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Transaksi;
