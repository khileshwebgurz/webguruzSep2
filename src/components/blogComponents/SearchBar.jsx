// components/SearchBar.js
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
    router.push(`/?s=${formattedSearchTerm}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // onKeyDown={handleSearch}
      />
      <button className="Search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
