"use client";
import React from "react";
import Image from "next/image";
import plus from "#/plus.png";
import { useRouter } from "next/navigation";

export default function AddCarButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile/my-cars/addCar");
  };

  return (
    <button
      onClick={handleClick}
      className="h-[45px] flex items-center px-4 py-22 text-white rounded ml-2 bg-gray-700 hover:bg-black"
    >
      <Image src={plus} alt="Edit" className="mr-2" width={16} height={16} />
      Машин нэмэх
    </button>
  );
}
