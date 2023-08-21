import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as CartIcon } from "@assets/icon-cart.svg";

function Header() {
    return (
        <header className="flex justify-center">
            <nav className="max-w-[1110px] grow border-b border-gray-200">
                <ul className="flex h-28 items-center text-dark-grayish-blue">
                    <li className="flex h-full items-center border-b-4 border-transparent">
                        <a href="#">
                            <Logo />
                        </a>
                    </li>
                    <li className="ml-14 flex h-full items-center border-b-4 border-transparent hover:border-orange hover:text-black">
                        <a href="#">Collections</a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent hover:border-orange hover:text-black">
                        <a href="#">Men</a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent hover:border-orange hover:text-black">
                        <a href="#" aria-current="page">
                            Women
                        </a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent hover:border-orange hover:text-black">
                        <a href="#">About</a>
                    </li>
                    <li className="ml-8 flex h-full items-center border-b-4 border-transparent hover:border-orange hover:text-black">
                        <a href="#">Contact</a>
                    </li>
                    <li
                        className="ml-auto border-b-4 border-transparent"
                        title="Cart"
                    >
                        <a href="#" className="hover:text-black">
                            <CartIcon />
                        </a>
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
