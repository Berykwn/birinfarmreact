const PageTitle = ({ children }) => {
    return (
        <h1 className="text-stone-900 text-2xl md:text-4xl font-extrabold mb-2">
            {children}
        </h1>
    );
};

export default PageTitle;
