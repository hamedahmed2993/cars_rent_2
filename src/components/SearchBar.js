"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchField } from "@/lib/features/filters/filtersSlice";
import { setOpenOptionsPrice } from "@/lib/features/ui/uiSlice";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  const searchField = useSelector((state) => state.filters.searchField);
  const dispatch = useDispatch();
  return (
    <div className="text-[#596780] w-[492px] h-[44px] border border-[#C3D4E9] hover:border-[#3563E9] rounded-full flex items-center justify-between px-6">
      <div
        className="flex w-full"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <MagnifyingGlassIcon className="w-[25px] h-[25px] hover:bg-slate-50 hover:cursor-pointer" />
        <input
          type="text"
          placeholder="Search something here"
          className="ml-[10px] w-full border-none outline-none"
          value={searchField || ""}
          onChange={(e) => {
            dispatch(updateSearchField(e.target.value));
          }}
        ></input>
      </div>
      <div
        className="hover:bg-slate-50 hover:cursor-pointer"
        onClick={() => {
          dispatch(setOpenOptionsPrice());
        }}
      >
        <img src="/icons/filter.svg" className="w-[24px] h-[24  px]" />
      </div>
    </div>
  );
}
