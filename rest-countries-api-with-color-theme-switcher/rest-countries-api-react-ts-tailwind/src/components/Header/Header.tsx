import { ReactComponent as MoonIcon } from "@assets/moon-outline.svg";

function Header() {
    return (
        <header className="flex h-[5rem] w-full items-center border-b-2 px-[5rem]">
            <h1 className="text-2xl font-bold">Where in the world?</h1>
            <button type="button" className="ml-auto font-semibold">
                <MoonIcon className="mr-3 inline h-4 w-4" aria-hidden />
                Dark Mode
            </button>
        </header>
    );
}

export default Header;
