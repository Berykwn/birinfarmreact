const ListJenis = ({jenis}) => {
    return (
        <>
            {jenis.map((item) => (
                <a
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                    key={item.id}
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {item.nama}
                    </h5>
                    <p className="font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                </a>
            ))}
        </>
    );
};

export default ListJenis;
