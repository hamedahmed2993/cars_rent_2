"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePriceSlider,
  updateFilterTypes,
  updateFilterCapacities,
} from "@/lib/features/filters/filtersSlice";

export default function SideMenu() {
  const priceSlider = useSelector((state) => state.filters.priceSlider);
  const filterTypes = useSelector((state) => state.filters.filterTypes);
  const filterCapacities = useSelector(
    (state) => state.filters.filterCapacities,
  );
  const openOptionsPrice = useSelector((state) => state.ui.openOptionsPrice);
  const dispatch = useDispatch();
  const types = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacities = [
    { capacity: "2 People", count: 10 },
    { capacity: "4 People", count: 12 },
    { capacity: "6 People", count: 8 },
    { capacity: "8 or More", count: 5 },
  ];
  if (openOptionsPrice)
    return (
      <div className="bg-[#FFFFFF] overflow-y-auto h-[100%] no-scrollbar">
        {/* TYPES */}
        <div className="p-5 text-[#90A3BF] font-[12px]">
          <div className="mb-[20px]">TYPE</div>
          <ul className="list-none space-y-[20px]">
            {types.map((opt) => (
              <li key={opt}>
                <input
                  type="checkbox"
                  id="item1"
                  checked={filterTypes.includes(opt)}
                  onChange={() => {
                    dispatch(updateFilterTypes(opt));
                  }}
                />{" "}
                <label className="font-[20px] text-[#596780]">
                  {opt}
                  <span className="text-[#90A3BF]"> (10)</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {/*=== TYPES ===*/}

        {/* CAPACITY */}
        <div className="p-5 text-[#90A3BF] font-[12px]">
          <div className="mb-[20px]">CAPACITY</div>
          <ul className="list-none space-y-[20px]">
            {capacities.map((cap) => (
              <li key={cap.capacity}>
                <input
                  checked={filterCapacities.includes(cap.capacity)}
                  type="checkbox"
                  id="item1"
                  onChange={() => {
                    dispatch(updateFilterCapacities(cap.capacity));
                  }}
                />{" "}
                <label className="font-[20px] text-[#596780]">
                  {cap.capacity}
                  <span className="text-[#90A3BF]"> ({cap.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {/*=== CAPACITY ===*/}
        <div className="p-5 text-[#90A3BF] font-[12px]">
          <div className="mb-[20px]">
            PRICE
            <input
              value={priceSlider}
              onChange={(e) => {
                dispatch(updatePriceSlider(e.target.value));
              }}
              type="range"
              min="0"
              max="200"
              className="w-full h-2 bg-gray-300 rounded accent-blue-500 cursor-pointer"
            />
            <div className="text-[20px] text-[#596780]">${priceSlider}.00</div>
            <div className="text-[20px] text-[#596780]">MAX.$200.00</div>
          </div>
        </div>
      </div>
    );
}
