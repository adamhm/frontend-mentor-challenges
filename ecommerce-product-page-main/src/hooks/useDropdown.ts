import { useEffect, useRef, useState } from "react";

function useDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent): void => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as HTMLElement)
            ) {
                const parent = (e.target as HTMLElement).parentElement;
                const itemRemoveBtnClicked =
                    parent && parent.dataset.role === "remove-item";

                if (!itemRemoveBtnClicked) {
                    setIsOpen(false);
                }
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
