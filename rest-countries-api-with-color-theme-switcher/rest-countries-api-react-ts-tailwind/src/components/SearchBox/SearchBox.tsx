/* eslint-disable jsx-a11y/label-has-associated-control */

import searchIcon from "@assets/search-outline.svg";

function SearchBox() {
    return (
        <form className="block">
            <div className="flex h-14 w-[30rem] items-center rounded-md border px-8 shadow-md">
                <label htmlFor="search" className="sr-only">
                    Search for a country
                </label>
                <img src={searchIcon} alt="" className="h-5 w-5" />
                <input
                    id="search"
                    type="search"
                    placeholder="Search for a country..."
                    className="ml-6 font-semibold placeholder-old-silver"
                />
            </div>
        </form>
    );
}

export default SearchBox;
