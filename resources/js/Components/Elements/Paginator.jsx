import React from "react";

const Paginator = ({ link }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
                {link.map((linkItem, index) => (
                    <li key={index}>
                        {linkItem.url ? (
                            <a
                                href={linkItem.url}
                                className={`flex items-center justify-center px-3 h-8 ${
                                    linkItem.active
                                        ? "bg-stone-500 text-white"
                                        : "text-gray-500 bg-white border border-gray-300"
                                } hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
                                {/* Remove &laquo; and &raquo; entities from the label */}
                                {linkItem.label.replace(/&laquo;|&raquo;/g, "")}
                            </a>
                        ) : (
                            <span
                                className={`flex items-center justify-center px-3 h-8 ${
                                    linkItem.active
                                        ? "bg-stone-500 text-white"
                                        : "text-gray-500 bg-white border border-gray-300"
                                } hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
                                {/* Remove &laquo; and &raquo; entities from the label */}
                                {linkItem.label.replace(/&laquo;|&raquo;/g, "")}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Paginator;
