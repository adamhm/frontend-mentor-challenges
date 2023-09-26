import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { ReactComponent as MenuIcon } from "@assets/icon-menu.svg";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as CartIcon } from "@assets/icon-cart.svg";
import { Menu, ShoppingCart, SideMenu } from "@components";
import useCartContext from "@hooks/useCartContext";
import useDropdown from "@hooks/useDropdown";
import useMobileView from "@hooks/useMobileView";

function Header() {
    const { dropdownRef, isOpen, setIsOpen } = useDropdown();
    const [sideMenuVisible, setSideMenuVisible] = useState(true);
    const { state } = useCartContext();
    const isMobileView = useMobileView(768);

    const openHandler = () => setSideMenuVisible(true);
    const closeHandler = () => setSideMenuVisible(false);

    const itemsCount = state.items.reduce(
        (prev, current) => prev + current.quantity,
        0
    );

    return (
        <header className="sticky top-0 z-10 flex justify-center bg-white md:relative md:top-auto">
            {isMobileView && (
                <button
                    type="button"
                    aria-label="Menu"
                    className="ml-6"
                    onClick={openHandler}
                >
                    <MenuIcon />
                </button>
            )}
            <AnimatePresence>
                {isMobileView && sideMenuVisible && (
                    <SideMenu onClose={closeHandler} />
                )}
            </AnimatePresence>
            <nav className="max-w-[1110px] grow border-b border-gray-200">
                <ul className="flex h-[4.25rem] items-center px-6 text-dark-grayish-blue md:h-28 md:px-0">
                    <li className="mr-6 flex h-full items-center border-b-4 border-transparent">
                        <a href="#">
                            <Logo />
                        </a>
                    </li>
                    {!isMobileView && <Menu />}
                    <li
                        className="ml-auto flex border-b-4 border-transparent"
                        title="Cart"
                        ref={dropdownRef}
                    >
                        <button
                            role="button"
                            onClick={() => setIsOpen((state) => !state)}
                            className="h-[22px] transition-colors duration-500 hover:text-black"
                        >
                            <CartIcon />
                            {itemsCount > 0 && (
                                <span
                                    role="status"
                                    aria-label={`${itemsCount} items in the shopping cart`}
                                    className="relative -top-8 left-2 rounded-md bg-orange px-2 py-[1px] text-[10px] text-white"
                                >
                                    {itemsCount}
                                </span>
                            )}
                        </button>
                        {isOpen && <ShoppingCart />}
                    </li>
                    <li
                        className="ml-6 border-b-4 border-transparent md:ml-12"
                        title="Profile"
                    >
                        <a href="#">
                            <img
                                src="./images/image-avatar.png"
                                alt=""
                                className="h-6 rounded-full transition-all hover:border-2 hover:border-orange md:h-12"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
