import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form>
      <div className="bg-[#002147] py-5 px-10 flex justify-center items-center">
        <input
          type="text"
          className="py-2 rounded px-10 lg:w-[50%] w-full relative"
          name="search"
          id="search"
          placeholder="Search College"
        />
        <div className="absolute lg:left-[345px] left-12">
            <FaSearch></FaSearch>
        </div>
      <input type="submit" className="border lg:px-10 px-3 py-[7px] bg-image text-white border-[#f36b3b]text-white rounded absolute lg:right-[335px] right-10 lg:w-[200px] w-[35%]" name="" value="Search College" id="" />
      </div>
    </form>
  );
};

export default SearchBar;
