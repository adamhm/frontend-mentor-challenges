import { ReactComponent as MoonIcon } from "@assets/moon-sharp.svg";
import useDarkMode from "@hooks/useDarkMode";

function Header() {
    const toggleDarkMode = useDarkMode();

    return (
        <header className="mx-auto flex h-[5rem] max-w-[1440px] items-center border-b-2 px-[5rem] dark:border-yankees-blue dark:bg-outer-space dark:text-white">
            <h1 className="text-2xl font-bold">Where in the world?</h1>
            <button
                type="button"
                className="ml-auto font-semibold"
                onClick={toggleDarkMode}
            >
                <MoonIcon
                    stroke-width="40"
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
