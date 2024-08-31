"use client";
import {
  HeartOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Carousel, Divider } from "antd";
import Image from "next/image";
import React from "react";

export default function CarHorizontal() {
  return (
    <div>
      <div className="flex justify-between w-full hover:shadow-md rounded p-2 cursor-pointer">
        <div className="flex gap-5">
          <Carousel infinite={false} arrows>
            <Image
              src="https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg"
              alt="car"
              width={320}
              height={200}
              className="rounded-lg"
            />
          </Carousel>
          <div className="flex flex-col gap-2 pt-4">
            <div className="text-2xl">Title</div>
            <div>4.0</div>
            <div className="flex gap-2">
              <div className="bg-slate-100 rounded-full size-8 flex justify-center items-center">
                <UserOutlined />
              </div>
              <div className="bg-slate-100 rounded-full size-8 flex justify-center items-center">
                <ThunderboltOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 flex flex-col justify-between items-end">
          <div className="bg-slate-100 rounded-full size-12 flex justify-center items-center">
            <HeartOutlined />
          </div>
          <div>Location</div>
          <div>
            <span>1 хоног</span> 50’000₮
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
