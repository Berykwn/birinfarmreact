const Jumbotron = ({children}) => {
    return (
        <div className="w-3/4 text-sm text-gray-800 my-4">
            <div className="bg-gray-50 shadow-sm px-4 py-4">
                {children}
            </div>
        </div>
    );
};

export default Jumbotron;
