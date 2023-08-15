import Icon from "@/Components/Elements/Icon";

const SearchInput = ({keyword, onChange, size}) => {
    return (
        <form>
            <div className={`relative mb-4 ${size}`}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon iconName={"search"} />
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border-stone-300 rounded-lg focus:ring-lime-900 focus:border-0"
                    placeholder="Cari ..."
                    value={keyword}
                    onChange={onChange}
                />
            </div>
        </form>
    )
}

export default SearchInput