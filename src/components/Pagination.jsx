import React, { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Card from "./Card";
import data from "../assets/data.js";

export default function Pagination({ inputText }) {
  const [currentPage, setCurrentPage] = useState(0);

  const filteredData = useMemo(() => {
    if (inputText.trim() === "") {
      setCurrentPage(0);
      return data;
    }
    const filtered = data.filter((item) => {
      return item?.car_mf_name.toLowerCase().includes(inputText.toLowerCase());
    });
    setCurrentPage(0);
    return filtered;
  }, [inputText]);

  const itemsPerPage = 6; // Number of items per page
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    const newUrl = `/page=${selectedPage?.selected+1}`;
    window.history.pushState(null, "", newUrl);
  };

  const getVisibleData = () => {
    const firstIndex = currentPage * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;
    return filteredData.slice(firstIndex, lastIndex);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');

    if (!pageParam) {
      // If there's no page parameter in the URL, set it to 1
      handlePageChange({selected:0});
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
        {getVisibleData().map((item, i) => {
          return (
            <div key={i} className="flex items-center">
              <Card
                id={item.id}
                car_n={item.car_modal}
                car_mf={item.car_mf_name}
                img={item.car_img}
                seats={item.car_seating_capacity}
                engine={item.car_engine}
                mileage={item.car_mileage}
                transmission_type={item.car_transmission_type}
                cost={item.car_cost}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <span>
            {Math.min((currentPage + 1) * itemsPerPage, filteredData.length)} of{" "}
            {filteredData.length}
          </span>
        </div>
        {pageCount > 1 && (
          <div>
            <ReactPaginate
              previousLabel={<FiArrowLeft />}
              nextLabel={<FiArrowRight />}
              pageCount={pageCount}
              marginPagesDisplayed={3}
              pageRangeDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName="flex justify-center gap-2 items-center"
              pageClassName="w-8 h-8 shadow flex items-center justify-center rounded-md"
              previousClassName="w-8 bg-white h-8 flex items-center justify-center rounded-md text-xl"
              nextClassName="w-8 bg-white h-8 flex items-center justify-center rounded-md text-xl"
              breakClassName="w-8 bg-white h-8 flex items-center justify-center rounded-md text-xl"
              activeClassName="bg-blue-200"
              activeLinkClassName="text-blue-500"
            />
          </div>
        )}
      </div>
    </>
  );
}
