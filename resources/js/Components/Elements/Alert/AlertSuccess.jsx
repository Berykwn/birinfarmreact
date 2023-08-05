import Icon from "@/Components/Elements/Icon";

const AlertSuccess = ({ message }) => {
    return (
        <div
            className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
        >
            <Icon iconName="alert" />
            <div>
                <span className="font-medium">Success!</span> {message}
            </div>
        </div>
    );
};

export default AlertSuccess;
