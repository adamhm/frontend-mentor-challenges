import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as CartIcon } from "@assets/icon-cart.svg";
import { ShoppingCart } from "@components";
import useCartContext from "@hooks/useCartContext";
import useDropdown from "@hooks/useDropdown";

function Header() {
    const { dropdownRef, isOpen, setIsOpen } = useDropdown();
    const { state } = useCartContext();

    const itemsCount = state.items.reduce(
        (prev, current) => prev + current.quantity,
        0
    );

    return (
        <header className="flex justify-center">
            <nav className="max-w-[1110px] grow border-b border-gray-200">
                <ul className="flex h-28 items-center text-dark-grayish-blue">
                    <li className="flex h-full items-center border-b-4 border-transparent">
                        <a href="#">
                            <Logo />
                        </a>
                    </li>
                    <li className="ml-14 flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-orange hover:text-black">
                        <a href="#">Collections</a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-orange hover:text-black">
                        <a href="#">Men</a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-orange hover:text-black">
                        <a href="#" aria-current="page">
                            Women
                        </a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-orange hover:text-black">
                        <a href="#">About</a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-orange hover:text-black">
                        <a href="#">Contact</a>
                    </li>
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
                        className="ml-12 border-b-4 border-transparent"
                        title="Profile"
                    >
                        <a href="#">
                            <img
                                src="./images/image-avatar.png"
                                alt=""
                                className="h-12 w-12 rounded-full transition-all hover:border-2 hover:border-orange"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
