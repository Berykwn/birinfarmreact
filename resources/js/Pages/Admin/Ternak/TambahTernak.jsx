import AdminLayout from "@/Layouts/AdminLayout";
import FormTambahTernak from "@/Components/Fragments/Form/FormTambahTernak";
import PageTitle from "@/Components/Elements/PageTitle";

const TambahTernak = (props) => {
    const { auth, pages, jenis, ring, errors } = props;
    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <PageTitle>Form tambah ternak</PageTitle>
                <FormTambahTernak jenis={jenis} ring={ring} errors={errors} />
            </section>
        </AdminLayout>
    );
};

export default TambahTernak;
