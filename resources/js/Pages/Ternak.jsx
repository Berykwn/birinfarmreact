import ListTernak from "@/Components/Fragments/Listdata/ListTernak";
import MainLayout from "@/Layouts/MainLayout";

const Ternak = (props) => {
    const { title, pages, ternak, auth } = props;
    return (
        <MainLayout title={title} pages={pages} auth={auth}>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <ListTernak ternaks={ternak.data} />
                </div>
            </section>
        </MainLayout>
    );
};

export default Ternak;
