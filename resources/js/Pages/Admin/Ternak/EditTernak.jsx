import FormEditTernak from "@/Components/Fragments/Form/FormEditTernak";
import AdminLayout from "@/Layouts/AdminLayout";

const EditTernak = (props) => {
    const { auth, pages, title, ternak, jenis, ring, errors } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="px-8 mt-4">
                <div className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                    <h1 className="text-stone-900 dark:text-white text-2xl md:text-4xl font-extrabold mb-4">
                        Form edit ternak
                    </h1>
                    <FormEditTernak
                        ternak={ternak}
                        jenis={jenis}
                        ring={ring}
                        errors={errors}
                    />
                </div>
            </section>
        </AdminLayout>
    );
};

export default EditTernak;
