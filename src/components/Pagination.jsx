import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Card from "./Card";
import data from "../assets/data.js";

export default function Pagination() {
  const [newArray, setNewArray] = useState([]);
  const [pageCount, setPageCount] = useState(6);
  const pageChange = (index) => {
    let currentPage = index?.selected + 1;
    const lastPageIndex = currentPage * 6;
    setPageCount(lastPageIndex);
    const firstPageIndex = lastPageIndex - 6;
    setNewArray(data.slice(firstPageIndex, lastPageIndex));
    console.log(newArray);
  };
  useEffect(() => {
    const fetchData = () => {
      const initialData = data.slice(0, 6);
      setNewArray(initialData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  md:grid-cols-3 ">
        {newArray.map((item, i) => {
          return (
            <div key={i} className=" flex items-center">
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
      <div className=" flex flex-col gap-4 sm:flex-row items-center justify-between ">
        <div>
          <span>{pageCount}</span> of <span>{data.length}</span>
        </div>
        <div>
          <ReactPaginate
            previousLabel={<FiArrowLeft />}
            nextLabel={<FiArrowRight />}
            pageCount={10}
            marginPagesDisplayed={3}
            pageRangeDisplayed={2}
            onPageChange={pageChange}
            containerClassName="flex justify-center gap-2 items-center"
            pageClassName="w-8 bg-white h-8 flex items-center justify-center rounded-md"
            previousClassName="w-8 bg-white h-8 flex items-center justify-center rounded-md text-xl"
            nextClassName="w-8 bg-white h-8 flex items-center justify-center rounded-md text-xl"
            breakClassName="w-8 bg-white h-8 flex items-center justify-center rounded-md text-xl"
            activeClassName="bg-blue-200 "
          />
        </div>
      </div>
    </>
  );
}
