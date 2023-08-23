import { useEffect, useRef, useState } from "react";

function useDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent): void => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as HTMLElement)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);
    }, []);

    return {
        isOpen,
        setIsOpen,
        dropdownRef,
    };
}

export default useDropdown;
