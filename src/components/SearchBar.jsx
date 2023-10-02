import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div
      className="me-auto flex w-full
     items-center justify-center overflow-hidden rounded-3xl bg-white px-2 sm:w-[300px]"
    >
      <input
        type="text"
        className="mx-2 w-full  py-1 outline-none placeholder:ps-2"
        placeholder="search..."
      />
      <BiSearchAlt2 className="text-2xl text-gray-400" />
    </div>
  );
}
