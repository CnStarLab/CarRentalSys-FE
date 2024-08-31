import { UserOutlined } from "@ant-design/icons";
import { Button, Divider, Input } from "antd";
import Image from "next/image";
import React from "react";

export default function CarDetail() {
  return (
    <div className="w-3/5">
      <Image
        src="https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg"
        alt="car"
        width={840}
        height={480}
        className="rounded-lg"
      />
      <div className="text-2xl py-4">Тайлбар</div>
      <div>Олон өдрөөр түрээслүүлнэ. Сайн машин</div>
      <Divider />
      <div className="text-2xl pb-4">Үзүүлэлт</div>
      <div className="grid grid-cols-2 gap-3">
        {data.map((e) => (
          <div>
            <div>{e.label}</div>
            <div>{e.value}</div>
          </div>
        ))}
      </div>
      <Divider />
      <div className="text-2xl py-4">Сэтгэгдэл</div>
      <div className="grid gap-4">
        <div>
          <div className="flex gap-2">
            <UserOutlined />
            <div>
              <div>Amaraa Bayaraa</div>
              <div>2024 оны 3 сараас хойш</div>
            </div>
          </div>
          <div>Тав тухтай, цэвэрхэн машин байсан. Баярлалаа.</div>
        </div>
        <div>
          <div className="flex gap-2">
            <UserOutlined />
            <div>
              <div>Amaraa Bayaraa</div>
              <div>2024 оны 3 сараас хойш</div>
            </div>
          </div>
          <div>Тав тухтай, цэвэрхэн машин байсан. Баярлалаа.</div>
        </div>
        <div className="flex gap-4">
          <Input placeholder="Add comment" />
          <Button>Add Comment</Button>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    label: "Төрөл",
    value: "Жийп",
  },
  {
    label: "Үйлдвэр",
    value: "Lexus",
  },
  {
    label: "Загвар",
    value: "RX 450",
  },
  {
    label: "Хаалга",
    value: "4",
  },
  {
    label: "Суудал",
    value: "5",
  },
  {
    label: "Хурдны хайрцаг",
    value: "Автомат",
  },
  {
    label: "Хүрд",
    value: "Буруу",
  },
  {
    label: "Үйлдвэрлэсэн он",
    value: "2014",
  },
  {
    label: "Хөдөлгүүр",
    value: "Бензин",
  },
  {
    label: "Моторын багтаамж",
    value: "2.4л",
  },
  {
    label: "Өнгө",
    value: "Хөх",
  },
];
