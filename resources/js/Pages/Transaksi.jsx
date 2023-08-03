import Alert from "@/Components/Elements/Alert/AlertSuccess";
import TransactionTable from "@/Components/Fragments/Tables/TransactionTable";
import MainLayout from "@/Layouts/MainLayout";


const Transaksi = (props) => {
    const { title, pages, auth, flash, transactions } = props;
    return (
        <MainLayout title={title} pages={pages} auth={auth}>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-4xl lg:py-10">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white"></h2>
                    {flash.message && <Alert message={flash.message} />}
                    <div
                        className="p-4 my-2 text-sm text-gray-800 rounded-lg bg-gray-50"
                        role="alert"
                    >
                        <span class="font-medium">Dark alert!</span> Change a
                        few things up and try submitting again.
                    </div>
                    <div className="relative overflow-x-auto">
                        <TransactionTable transaction={transactions} />
                    </div>
                </div> 
            </section>
        </MainLayout>
    );
};

export default Transaksi;
