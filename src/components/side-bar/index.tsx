"use client";
import {
  BellOutlined,
  CarOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  InteractionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "Профайл",
  },
  {
    key: "/profile/notifications",
    icon: <BellOutlined />,
    label: "Мэдэгдэл",
  },
  {
    key: "/profile/my-cars",
    icon: <CarOutlined />,
    label: "Миний машинууд",
  },
  {
    key: "/profile/orders",
    icon: <ClockCircleOutlined />,
    label: "Түрээсийн захиалгууд",
  },
  {
    key: "/profile/transactions",
    icon: <InteractionOutlined />,
    label: "Гүйлгээний түүх",
  },
  {
    key: "/profile/favorites",
    icon: <HeartOutlined />,
    label: "Хадгалсан машинууд",
  },
];
export default function SideBar() {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };
  return (
    <Menu onClick={onClick} className="w-72" mode="vertical" items={items} />
  );
}
