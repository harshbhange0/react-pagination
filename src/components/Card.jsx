import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheelBold, PiEngine } from "react-icons/pi";
export default function Card({
  id,
  car_mf,
  car_n,
  img,
  seats,
  engine,
  mileage,
  transmission_type,
  cost,
}) {
  const [like, setLike] = useState(true);

  const Icon = ({ like }) => {
    let IconComponent = like ? AiOutlineHeart : AiFillHeart;
    return <IconComponent />;
  };
  return (
    <div
      className=" mx-auto w-[400px] space-y-8 rounded-xl p-4 text-gray-800"
      style={{
        boxShadow: "0 0 0.4rem #cccccca1",
      }}
    >
      <div className="h-[200px]  overflow-hidden rounded-xl">
        <img src={img} alt={car_n} className="bg-center" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl">
            {car_mf} {car_n}
          </h1>
          <span className="rounded-sm border border-dashed border-blue-400 px-3 py-2">
            Id : {id}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <FiUsers className="text-blue-500" /> <span>{seats}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BsSpeedometer className="text-blue-500" />
            <span>{engine}</span>
          </div>
          <div className="flex items-center space-x-2">
            <PiEngine className="text-blue-500" />
            <span>{transmission_type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <PiSteeringWheelBold className="text-blue-500" />
            <span>{mileage}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">
            {cost}
            <span className="text-sm">/ Month</span>
          </h2>
          <div className="flex items-center gap-3">
            <button
              className={`${
                like
                  ? "bg-blue-300/40 text-blue-400"
                  : "bg-blue-300/80 text-blue-600"
              } rounded-xl  p-3 `}
              style={{
                boxShadow: "0 0 0.4rem #cccccca1",
              }}
              onClick={() => {
                let i = !like;
                setLike(i);
              }}
            >
              <Icon like={like} />
            </button>
            <span className="rounded-xl bg-blue-500 px-4 py-2 text-white">
              Rent Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
