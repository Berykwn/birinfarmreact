const LabelPemesanan = ({ htmlFor, value }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            {value}
        </label>
    );
};

export default LabelPemesanan;
