"use client";
import { ThunderboltOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function CarCard() {
  const router = useRouter();
  return (
    <div
      className="w-64 grid gap-3 hover:shadow-md rounded p-2 cursor-pointer"
      onClick={() => router.push("/cars/id")}
    >
      <Image
        src="https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg"
        alt="car"
        width={250}
        height={200}
        className="rounded-lg"
      />
      <div className="flex justify-between">
        <div className="text-2xl">Title</div>
        <div>4.0</div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="bg-slate-100 rounded-full size-8 flex justify-center items-center">
            <UserOutlined />
          </div>
          <div className="bg-slate-100 rounded-full size-8 flex justify-center items-center">
            <ThunderboltOutlined />
          </div>
        </div>
        <div>Location</div>
      </div>
      <div>
        50’000₮ <span>1 хоног</span>
      </div>
    </div>
  );
}
