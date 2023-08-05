import FormEditTernak from "@/Components/Fragments/Form/FormEditTernak";
import AdminLayout from "@/Layouts/AdminLayout";

const EditTernak = (props) => {
    const { auth, pages, title, ternak, jenis, ring, errors } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="bg-stone-100 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <h1 className="text-stone-900 dark:text-white text-2xl md:text-4xl font-extrabold mb-4">
                        Form edit ternak
                    </h1>
                    <div className="px-10 py-10 bg-white rounded-lg shadow-md">
                        <FormEditTernak ternak={ternak} jenis={jenis} ring={ring} errors={errors} />
                    </div>
                </div>
            </section>
        </AdminLayout>

    )
}

export default EditTernak