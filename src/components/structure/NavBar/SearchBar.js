import { useState } from "react";
import SvgIcon from "../../general/SvgIcon";
import { SearchIcon } from "../../SVGPATHS";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");

    const handleKeyDown = (e) => {
        if (e.key !== "Enter") {
            return;
        }
        handleSearch(searchInput);
    };

    const handleSearch = (query) => {
        console.log("Searched for: " + query);
        // Add API calls and whatnot here. Do whatever, this is just a placeholder for now.
    };

    return (
        <div className="w-full mx-[3rem] sm:mx-[6rem] p-5 bg-lightest flex items-center rounded-full text-white">
            <input
                type="text"
                className="w-full bg-lightest focus:outline-none"
                placeholder="Search"
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <SvgIcon
                onClick={() => handleSearch(searchInput)}
                name="Search"
                path={SearchIcon}
            />
        </div>
    );
}
