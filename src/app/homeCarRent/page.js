import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import SideMenu from "./SideMenu";
import Body from "./Body";
export default function HomePage() {
  return (
    <div className="w-full bg-[#F6F7F9] h-screen overflow-hidden flex flex-col">
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
      <div className="block md:hidden">
        <HeaderMobile />
      </div>
      {/* SIDE MENU && BODY */}
      <div className="flex mt-1.25 h-[calc(100%-200px)] md:h-[calc(100%-124px)]">
        {/* SIDE MENU */}
        <SideMenu />
        {/*=== SIDE MENU ===*/}
        {/* BODY */}
        <div className="flex-1 px-16  overflow-y-auto h-full no-scrollbar">
          <Body />
        </div>
        {/*=== BODY ===*/}
      </div>
      {/*=== SIDE MENU && BODY ===*/}
    </div>
  );
}
