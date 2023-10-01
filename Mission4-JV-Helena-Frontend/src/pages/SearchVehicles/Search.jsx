import React from "react";
import "../SearchVehicles/Search.css";
import Navbar from "../Home/components/Navbar";
import SearchInput from "./components/SearchInput";

const Search = () => {
  return (
    <div className="searchContainer">
      <Navbar />
      <SearchInput />
    </div>
  );
};

export default Search;
