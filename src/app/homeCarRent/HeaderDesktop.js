"use client";

import { useDispatch, useSelector } from "react-redux";
import { updateSearchField } from "@/lib/features/filters/filtersSlice";
import { setOpenOptionsPrice } from "@/lib/features/ui/uiSlice";
import { updateFavorite } from "@/lib/features/filters/filtersSlice";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  Cog6ToothIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function HeaderDesktop() {
  const router = useRouter();
  const searchField = useSelector((state) => state.filters.searchField);
  const favorite = useSelector((state) => state.filters.favorite);
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-full h-[124px] flex items-center justify-between px-[20px]">
      {/* TITLE + SEARCH BAR */}
      <div
        className=" 
            flex flex-row items-center justify-between gap-[50px]
          "
      >
        {/* TITLE */}
        <div className="w-[148px] h-[44px] ">
          <div
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-[#3563E9] text-4xl font-bold"
          >
            MORENT
          </div>
        </div>
        {/*=== TITLE ===*/}

        {/* SEARCH BAR */}
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
        {/*=== SEARCH BAR ===*/}
      </div>
      {/*=== TITLE + SEARCH BAR ===*/}

      {/* OPTIONS */}
      <div className="text-[#596780] w-[236px] h-[44px] flex items-center justify-between">
        {/* FAVORITE */}
        <div
          className="w-[44px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-center
          hover:bg-[#FFA89A]"
          onClick={() => {
            dispatch(updateFavorite());
          }}
        >
          <HeartIcon
            className={`w-[24px] h-[24px] ${favorite ? "text-[#FF4423]" : ""}`}
          />
        </div>
        {/*=== FAVORITE ===*/}

        {/* NOTIFICATION */}
        <div
          className="relative w-[44px] h-[44px] border border-[#C3D4E9] rounded-full "
          onClick={() => {
            router.push("/homeCarRent/notification");
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <BellIcon className="w-[24px] h-[24px]" />
          </div>
          <div className="absolute top-0 right-0 w-[11px] h-[11px] border rounded-full bg-[#FF4423] border-[#FF4423]"></div>
        </div>

        {/*=== NOTIFICATION ===*/}

        {/* SETTINGS */}
        <div
          className="w-[44px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-center"
          onClick={() => {
            router.push("/homeCarRent/settings");
          }}
        >
          <Cog6ToothIcon className="w-[24px] h-[24px]" />
        </div>
        {/*=== SETTINGS ===*/}

        {/* PROFILE IMAGE */}
        <div
          onClick={() => {
            router.push("/homeCarRent/profile");
          }}
          className="w-[44px] h-[44px] border border-[#C3D4E9] rounded-full overflow-hidden flex items-center justify-center"
        >
          <img
            src="/profileIcon.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          ></img>
        </div>
        {/*=== PROFILE IMAGE ===*/}
      </div>
      {/*=== OPTIONS ===*/}
    </div>
  );
}
