import React from "react";
import cube from "#/cube.png";
import Image from "next/image";
import AddCarButton from "@/components/profile/my-car/addCarButton";

export default function MyCars() {
  return (
    <div className="p-5 rounded-lg mx-auto w-[1000px]">
      <h1 className="text-4xl font-bold mb-5">Мэдэгдэл</h1>
      <div className="w-[800px] h-[200px] bg-gray-200 flex flex-col items-center">
        <Image
          src={cube}
          alt="加载中"
          className="w-25 h-auto mr-5 mt-4 mb-8"
          width={25}
          height={25}
        />
        <div className="text-center mb-6 font-semibold">
          Миний машинууд Танд одоогоор оруулсан машин байхгуй байна.
        </div>
        <AddCarButton />
      </div>
    </div>
  );
}
