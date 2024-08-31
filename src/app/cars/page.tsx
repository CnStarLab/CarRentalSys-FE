import CarCard from "@/components/car-card";
import CarHorizontal from "@/components/car-horizontal";
import Filter from "@/components/filter";
import Search from "@/components/search";
import React from "react";

export default function Browser() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-nowrap gap-20">
        <Filter />
        <div className="w-full">
          <Search search />
          <div className="flex flex-col">
            <div className="text-3xl pt-8">1000 илэрц байна</div>
            <div className="text-2xl py-8">VIP Зарууд</div>
            <CarHorizontal />
            <CarHorizontal />
          </div>
          <div className="text-2xl pb-8">Энгийн Зарууд</div>
          <div className="grid grid-cols-3 gap-2">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
      </div>
    </div>
  );
}
