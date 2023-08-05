import FormPemesanan from "@/Components/Fragments/Form/FormPemesanan";
import MainLayout from "@/Layouts/MainLayout";

const Pemesanan = (props) => {
    const { title, pages, ternakData, auth, errors } = props;
    return (
        <MainLayout title={title} pages={pages} auth={auth}>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        Form pemesanan
                    </h2>
                    <FormPemesanan
                        ternakData={ternakData.data}
                        auth={auth}
                        errors={errors}
                    />
                </div>
            </section>
        </MainLayout>
    );
};

export default Pemesanan;
