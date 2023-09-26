import { motion } from "framer-motion";

import { ReactComponent as CloseIcon } from "@assets/icon-close.svg";
import menu from "@data/menu.json";

type SideMenuProps = {
    onClose?(): void;
};

function SideMenu({ onClose }: SideMenuProps) {
    return (
        <>
            <motion.div
                className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                exit={{ opacity: 0 }}
            />
            <motion.dialog
                open
                className="fixed left-0 top-0 z-20 m-0 h-full w-[250px] bg-white font-bold"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 250 }}
                exit={{ opacity: 0, width: 0 }}
            >
                <button
                    aria-label="close"
                    className="ml-4 mt-4 block text-dark-grayish-blue transition-colors duration-500 hover:text-orange"
                    onClick={onClose}
                >
                    <CloseIcon className="h-6 w-6" aria-hidden />
                </button>
                <nav className="ml-4 mt-11">
                    <ul className="flex flex-col justify-between text-[18px]">
                        {menu.items.map((item) => (
                            <li
                                key={item.name}
                                className="h-full items-center border-b-4 border-transparent py-2 transition-all duration-300 hover:text-orange"
                            >
                                <a href={item.target}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.dialog>
        </>
    );
}

export default SideMenu;
