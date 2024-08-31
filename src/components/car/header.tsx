"use client";
import {
  ArrowLeftOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function CarHeader() {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => router.back()}
      >
        <div className="rounded-full bg-gray-100 size-8 flex justify-center items-center">
          <ArrowLeftOutlined />
        </div>
        <div className="text-2xl">Title</div>
      </div>
      <div className="flex gap-4">
        <Button size="large" icon={<ShareAltOutlined />}>
          Share
        </Button>
        <Button size="large" icon={<HeartOutlined />}>
          Favorite
        </Button>
      </div>
    </div>
  );
}
