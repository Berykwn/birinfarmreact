import React from "react";

const ProductCard = ({ ternaks }) => {
    return (
        <>
            {ternaks.map((item) => (
                <div
                    key={item.id}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="#">
                        <img
                            className="rounded-t-lg"
                            src={`img/${item.foto}`}
                            alt=""
                        />
                    </a>

                </div>
            ))}
        </>
    );
};

export default ProductCard;
