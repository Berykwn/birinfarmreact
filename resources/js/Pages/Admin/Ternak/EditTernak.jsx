import FormEditTernak from "@/Components/Fragments/Form/FormEditTernak";
import AdminLayout from "@/Layouts/AdminLayout";
import PageTitle from "@/Components/Elements/PageTitle";

const EditTernak = (props) => {
    const { auth, pages, ternak, jenis, ring, errors } = props;
    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <PageTitle>Form edit ternak</PageTitle>

                <FormEditTernak
                    ternak={ternak}
                    jenis={jenis}
                    ring={ring}
                    errors={errors}
                />
            </section>
        </AdminLayout>
    );
};

export default EditTernak;
