import React from "react";
import { Switch } from "antd";
import NotificationItem from "../../../components/notification/NotificationItem";

// static data needs to be replaced with dynamic data
const notifications = [
  {
    name: "Bilguunzaya Boldbaatar",
    requestTime: "2 цагийн өмнө",
    carModel: "Wolkswagen Id3",
    dateRange: "8 сарын 14 -> 8 сарын 16",
    imageUrl: "/blue_car.jpg",
  },
  {
    name: "Bilguunzaya Boldbaatar",
    requestTime: "2 цагийн өмнө",
    carModel: "Wolkswagen Id3",
    dateRange: "8 сарын 14 -> 8 сарын 16",
    imageUrl: "/blue_car.jpg",
  },
];

export default function Notifications() {
  return (
    <div className="p-5 rounded-lg mx-auto w-[1000px]">
      <h1 className="text-2xl font-bold mb-5">Мэдэгдэл</h1>
      <div className="flex flex-col items-start mb-5 pb-2.5 border-b border-gray-300 w-full">
        <div className="flex items-center mb-2.5">
          <Switch />
          <span className="ml-2.5">И-мэйлээр мэдэгдэл хүлээн авах</span>
        </div>
        <div className="flex items-center">
          <Switch />
          <span className="ml-2.5">Утасны дугаараар мэдэгдэл хүлээн авах</span>
        </div>
      </div>
      <div>
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </div>
    </div>
  );
}