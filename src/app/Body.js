"use client";
import CarCard from "@/components/CarCard";
import { useSelector } from "react-redux";

export default function Body() {
  const cars = useSelector((state) => state.cars);
  const favorite = useSelector((state) => state.filters.favorite);
  const searchField = useSelector((state) => state.filters.searchField);
  const carsFilterd = (
    favorite ? cars.filter((car) => car.favorite) : cars
  ).filter(
    (car) =>
      searchField === "" ||
      car.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  const carsList = carsFilterd.map((car) => {
    return <CarCard key={car.id} car={car} />;
  });
  return (
    <div>
      <div className="p-5 text-[#90A3BF] font-4">Popular Cars</div>
      <div className="place-items-center grid gap-4 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {carsList}
      </div>

      <div className="flex items-center justify-end mt-5">
        <div className="w-[50%] flex items-center justify-between">
          <div className="bg-[#3563E9] w-29 h-11 border rounded-sm flex items-center justify-center text-[16px]">
            See more cars
          </div>
          <div className="p-5 text-[#90A3BF] font-4">{cars.length} Car</div>
        </div>
      </div>
    </div>
  );
}
