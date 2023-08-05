import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Region } from "@typedefs";

function useDropdown(onChange?: (item: Region) => void) {
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent): void => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as HTMLElement)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);
    }, []);

    const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        onChange?.((e.target as HTMLButtonElement).innerText as Region);
        setIsOpen(false);
    };

    return {
        isOpen,
        setIsOpen,
        menuRef,
        clickHandler,
    };
}

export default useDropdown;
