import React, { useState } from "react";
import { router } from "@inertiajs/react";

import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/Elements/Input/InputLabel";

const FormPemesanan = ({ ternakData, auth, errors }) => {
    const [formValues, setFormValues] = useState({
        nama_produk: "",
        jumlah_jantan: "",
        jumlah_betina: "",
        kontak: "",
        alamat: "",
        catatan: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("id_ternak", formValues.nama_produk);
        formData.append("jumlah_jantan", formValues.jumlah_jantan);
        formData.append("jumlah_betina", formValues.jumlah_betina);
        formData.append("id_users", auth.user.id);
        formData.append("kontak", formValues.kontak);
        formData.append("alamat", formValues.alamat);
        formData.append("catatan", formValues.catatan);
        formData.append("status", "Pending");

        router.post("/pemesanan", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                <div className="sm:col-span-2">
                    <InputLabel htmlFor="nama_produk" value="Nama Produk" />
                    <select
                        name="nama_produk"
                        value={formValues.nama_produk}
                        onChange={handleChange}
                        className="text-sm w-full p-2.5 border-gray-300 focus:border-lime-800 focus:ring-lime-800 rounded-md shadow-sm"
                    >
                        <option value="">-- Pilih produk --</option>
                        {ternakData.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.jenis_ternak.nama} - {item.kode_ternak}
                            </option>
                        ))}
                    </select>
                    {errors.id_ternak && (
                        <InputError message={errors.id_ternak} />
                    )}
                </div>

                <div className="w-full">
                    <InputLabel
                        htmlFor={"jumlah_jantan"}
                        value={"Jumlah Jantan"}
                    />
                    <TextInput
                        type="text"
                        name="jumlah_jantan"
                        value={formValues.jumlah_jantan}
                        onChange={handleChange}
                        className="text-sm w-full p-2.5 mt-2"
                        placeholder="masukan jumlah jantan"
                    />
                    {errors.jumlah_jantan && (
                        <InputError message={errors.jumlah_jantan} />
                    )}
                </div>

                <div className="w-full">
                    <InputLabel
                        htmlFor={"jumlah_betina"}
                        value={"Jumlah Betina"}
                    />
                    <TextInput
                        type="text"
                        name="jumlah_betina"
                        value={formValues.jumlah_betina}
                        onChange={handleChange}
                        className="text-sm w-full p-2.5 mt-2"
                        placeholder="masukan jumlah betina"
                    />
                    {errors.jumlah_betina && (
                        <InputError message={errors.jumlah_betina} />
                    )}
                </div>

                <div className="sm:col-span-2">
                    <InputLabel htmlFor={"kontak"} value={"Kontak"} />
                    <TextInput
                        type="text"
                        name="kontak"
                        value={formValues.kontak}
                        onChange={handleChange}
                        className="text-sm w-full p-2.5 mt-2"
                        placeholder="masukan kontak anda"
                    />
                    {errors.kontak && <InputError message={errors.kontak} />}
                </div>
                <div className="sm:col-span-2">
                    <InputLabel htmlFor={"alamat"} value={"Alamat"} />
                    <textarea
                        rows="4"
                        name="alamat"
                        value={formValues.alamat}
                        onChange={handleChange}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                        placeholder="Masukan alamat anda"
                    ></textarea>
                    {errors.alamat && <InputError message={errors.alamat} />}
                </div>
                
                <div className="sm:col-span-2">
                    <InputLabel
                        htmlFor={"deskripsi"} value={"Deskripsi"}
                    />
                    <textarea
                        rows="8"
                        name="catatan"
                        value={formValues.catatan}
                        onChange={handleChange}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                        placeholder="Your description here"
                    ></textarea>
                    <InputError message={errors.catatan} />
                </div>
            </div>
            
            <PrimaryButton type="submit" className="mt-3">Submit</PrimaryButton>
        </form>
    );
};

export default FormPemesanan;
