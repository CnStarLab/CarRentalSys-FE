// src/components/NotificationItem.jsx

import { Button } from "antd";
import Image from "next/image";
import React from "react";

interface NotificationItemProps {
  name: string;
  requestTime: string;
  carModel: string;
  dateRange: string;
  imageUrl: string;
}

export default function NotificationItem({ name, requestTime, carModel, dateRange, imageUrl }: NotificationItemProps) {
  return (
    <div className="flex flex-col p-2.5 mb-2.5">
      <div className="flex items-center mb-2.5">
        <span className="bg-blue-600 text-white rounded-full p-2.5 mr-2.5 flex-shrink-0 h-10 w-10 flex items-center justify-center text-2xl">
          {name.charAt(0)}
        </span>
        <div className="flex flex-col justify-center flex-grow">
          <span className="font-bold mb-1.25">{name}</span>
          <div className="flex items-center">
            <span>{requestTime}</span>
            <span className="ml-2.5">{carModel}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center border border-gray-300 w-full mt-5 mb-5 p-2.5">
        <div className="flex-1 mr-5">{dateRange}</div>
        <Image src={imageUrl} alt={carModel} className="w-25 h-auto mr-5" width={100} height={100} />
      </div>
      <div>
        <Button className="mr-2.5 border-none cursor-pointer h-10 w-30 bg-gray-200 text-black">Татгалзах</Button>
        <Button className="border-none cursor-pointer h-10 w-30 bg-gray-800 text-white">Зөвшөөрөх</Button>
      </div>
    </div>
  );
}
