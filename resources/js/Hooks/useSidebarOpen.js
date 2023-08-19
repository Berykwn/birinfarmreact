import { useState, useEffect } from "react";

export function useSidebarOpen() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        setIsSidebarOpen(mediaQuery.matches);
    }, []);

    return { isSidebarOpen, handleSidebarToggle };
}
