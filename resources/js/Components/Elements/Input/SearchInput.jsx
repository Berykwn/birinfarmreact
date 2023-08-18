const SearchInput = ({ keyword, onChange, size }) => {
    return (
        <form className="">
            <div className={`relative mb-4 ${size}`}>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full px-2.5 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Cari ..."
                    value={keyword}
                    onChange={onChange}
                />
                <button
                    type="submit"
                    className="text-slate-800 absolute px-1 py-0.5 right-2.5 bottom-2.5  rounded-md text-xl"
                >
                </button>
            </div>
        </form>
    );
};

export default SearchInput;
