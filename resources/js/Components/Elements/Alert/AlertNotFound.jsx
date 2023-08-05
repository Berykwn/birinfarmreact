import Icon from "@/Components/Elements/Icon";

const AlertNoFound = () => {
    return (
        <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
        >
            <Icon iconName={"alert"} />
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Ra dodol!!</span> silahkan cari
                kata kunci yang lain
            </div>
        </div>
    );
};

export default AlertNoFound