import { ReactComponent as MoonIcon } from "@assets/moon-sharp.svg";
import useDarkMode from "@hooks/useDarkMode";

function Header() {
    const toggleDarkMode = useDarkMode();

    return (
        <header className="mx-auto flex h-[5rem] max-w-[1440px] items-center border-b-2 px-8 dark:border-yankees-blue dark:bg-outer-space dark:text-white md:px-[5rem]">
            <h1 className="text-lg font-bold md:text-2xl">
                Where in the world?
            </h1>
            <button
                type="button"
                className="md:text-md ml-auto text-sm font-semibold"
                onClick={toggleDarkMode}
            >
                <MoonIcon
                    strokeWidth="40"
                    stroke="currentcolor"
                    fill="white"
                    className="mr-3 inline h-4 w-4"
                    aria-hidden
                />
                Dark Mode
            </button>
        </header>
    );
}

export default Header;
