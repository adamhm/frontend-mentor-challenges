import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { ReactComponent as DownIcon } from "@assets/chevron-down-outline.svg";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(true);

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
        const element = e.target as HTMLButtonElement;

        setIsOpen(false);
    };

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <div ref={menuRef} className="ml-auto">
            <button
                type="button"
                className="flex h-14 w-[200px] items-center rounded-md border px-6 text-[14px] font-semibold shadow"
                onClick={() => setIsOpen((open) => !open)}
            >
                Filter by Region
                <DownIcon className="ml-auto h-4 w-4" />
            </button>
            {isOpen && (
                <menu className="mt-1 w-[200px] rounded-md border py-4 text-[14px] font-semibold shadow-md">
                    {regions.map((region) => (
                        <li key={region}>
                            <button
                                type="button"
                                data-region={region}
                                className="w-full px-6 py-1 text-left hover:bg-gray-200"
                                onClick={clickHandler}
                            >
                                {region}
                            </button>
                        </li>
                    ))}
                </menu>
            )}
        </div>
    );
}

export default Dropdown;
