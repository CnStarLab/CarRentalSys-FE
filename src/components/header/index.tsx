"use client";
import { Affix, Button, Select } from "antd";
import React from "react";
import Container from "../Container";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <Affix offsetTop={0.1}>
      <div className="h-24 shadow-sm bg-white z-10">
        <Container>
          <div className="flex justify-between items-center h-full">
            <div
              className="italic text-xl cursor-pointer"
              onClick={() => router.push("/")}
            >
              RentRide
            </div>
            <div className="flex gap-4">
              <Button icon={<PlusOutlined />}>Add Car</Button>
              <Button href="login" type="primary">
                Login
              </Button>
              <Select
                options={[
                  { value: "EN", label: <div>🇬🇧EN</div> },
                  { value: "MN", label: <div>🇲🇳MN</div> },
                ]}
                defaultValue="EN"
              />
            </div>
          </div>
        </Container>
      </div>
    </Affix>
  );
}
