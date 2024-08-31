import CarCard from "@/components/car-card";
import CarDetail from "@/components/car/detail";
import CarHeader from "@/components/car/header";
import CarOrder from "@/components/car/order";
import { Divider } from "antd";
import React from "react";

export default function Car() {
  return (
    <div>
      <CarHeader />
      <div className="flex flex-nowrap gap-20 mt-4">
        <CarDetail />
        <CarOrder />
      </div>
      <Divider />
      <div className="text-2xl pb-4">Төсөөт зарууд</div>
      <div className="flex gap-4">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
}
