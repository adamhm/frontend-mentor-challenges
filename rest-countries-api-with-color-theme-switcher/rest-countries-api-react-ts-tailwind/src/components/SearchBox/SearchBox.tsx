/* eslint-disable jsx-a11y/label-has-associated-control */

import { ReactComponent as SearchIcon } from "@assets/search-outline.svg";

type SearchBoxProps = {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function SearchBox({ value, onChange }: SearchBoxProps) {
    return (
        <form className="block rounded-md bg-white dark:bg-outer-space">
            <div className="flex h-14 w-full items-center rounded-md border px-8 shadow-[0px_0px_8px_rgba(240,240,240,0.6)] dark:border-outer-space dark:shadow-none md:w-[30rem]">
                <label htmlFor="search" className="sr-only">
                    Search for a country
                </label>
                <SearchIcon
                    className="h-5 w-5 font-bold text-old-silver dark:text-white"
                    aria-hidden
                />
                <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search for a country..."
                    value={value}
                    className="ml-6 w-full p-2 text-[14px] font-semibold placeholder-old-silver dark:bg-outer-space dark:text-white dark:placeholder-gray-300"
                    onChange={onChange}
                />
            </div>
        </form>
    );
}

export default SearchBox;
