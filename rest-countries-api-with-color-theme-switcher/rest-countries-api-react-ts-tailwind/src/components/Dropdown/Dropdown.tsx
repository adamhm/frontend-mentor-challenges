import { ReactComponent as DownIcon } from "@assets/chevron-down-outline.svg";
import { Region } from "@typedefs";
import useDropdown from "@hooks/useDropdown";

type DropdownProps = {
    selectedItem: Nullable<Region>;
    items: string[];
    onChange?: (item: Region) => void;
};

function Dropdown({ selectedItem, items, onChange }: DropdownProps) {
    const { isOpen, setIsOpen, menuRef, clickHandler } = useDropdown(onChange);

    return (
        <div ref={menuRef}>
            <button
                type="button"
                className="flex h-14 w-[200px] items-center rounded-md border bg-white px-6 text-[14px] font-semibold shadow-[0px_0px_8px_rgba(240,240,240,0.6)] dark:border-outer-space dark:bg-outer-space dark:text-white dark:shadow-none"
                onClick={() => setIsOpen((open) => !open)}
            >
                {selectedItem ?? "Filter by Region"}
                <DownIcon className="ml-auto h-4 w-4" />
            </button>
            {isOpen && (
                <menu className="absolute mt-1 w-[200px] rounded-md border bg-white py-4 text-[14px] font-semibold shadow-[0px_0px_8px_rgba(240,240,240,0.6)] dark:border-outer-space dark:bg-outer-space dark:text-white dark:shadow-none">
                    {items.map((item) => (
                        <li key={item}>
                            <button
                                type="button"
                                className="w-full px-6 py-1 text-left hover:bg-gray-200"
                                onClick={clickHandler}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </menu>
            )}
        </div>
    );
}

export default Dropdown;
