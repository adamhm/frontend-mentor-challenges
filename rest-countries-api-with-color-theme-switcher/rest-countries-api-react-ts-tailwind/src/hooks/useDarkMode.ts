import { useCallback } from "react";

function useDarkMode() {
    const toggle = useCallback(() => {
        document.documentElement.classList.toggle("dark");
    }, []);

    return toggle;
}

export default useDarkMode;
