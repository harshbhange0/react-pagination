import React from "react";

import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
export default function List() {
  return (
    <div className="h-full space-y-8 bg-blue-100 px-4 py-10  sm:px-10 md:px-20">
      <header
        className="my-2 w-full rounded-2xl px-6 py-5 "
        style={{
          boxShadow: "0 0 0.4rem #cccccca1",
        }}
      >
        <SearchBar />
      </header>

      <>
        <Pagination />
      </>
    </div>
  );
}
