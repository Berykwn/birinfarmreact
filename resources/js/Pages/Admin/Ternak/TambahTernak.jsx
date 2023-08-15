import AdminLayout from "@/Layouts/AdminLayout";
import FormTambahTernak from "@/Components/Fragments/Form/FormTambahTernak";

const TambahTernak = (props) => {
    const { auth, pages, title, jenis, ring, errors } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth}>
            <section className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-10 py-10">
                <h1 className="text-stone-900 text-2xl md:text-4xl font-bold mb-4 ">
                    Form tambah ternak
                </h1>
                <FormTambahTernak jenis={jenis} ring={ring} errors={errors} />
            </section>
        </AdminLayout>
    );
};

export default TambahTernak;
