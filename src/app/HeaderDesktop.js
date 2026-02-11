"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateFavorite } from "@/lib/features/filters/filtersSlice";
import { HeartIcon, Cog6ToothIcon, BellIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { setHideSearchBar } from "@/lib/features/ui/uiSlice";

export default function HeaderDesktop() {
  const router = useRouter();

  const favorite = useSelector((state) => state.filters.favorite);
  const hideSearchBar = useSelector((state) => state.ui.hideSearchBar);
  const dispatch = useDispatch();
  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/") {
      dispatch(setHideSearchBar(false));
    } else {
      dispatch(setHideSearchBar(true));
    }
  }, [pathName, dispatch]);

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
        <div className={hideSearchBar === false ? "block" : "hidden"}>
          <SearchBar />
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
            router.push("/notification");
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
            router.push("/settings");
          }}
        >
          <Cog6ToothIcon className="w-[24px] h-[24px]" />
        </div>
        {/*=== SETTINGS ===*/}

        {/* PROFILE IMAGE */}
        <div
          onClick={() => {
            router.push("/profile");
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
