import Icon from "@/Components/Elements/Icon";

const AlertSuccess = ({ message }) => {
    return (
        <div
            className="flex items-center p-4 mb-4 text-sm text-teal-800 rounded-lg bg-stone-100"
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
