export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-lime-900 shadow-sm focus:ring-lime-800 ' +
                className
            }
        />
    );
}
