"use client";
import { Button, Select } from "antd";
import React from "react";
import Container from "../Container";
import { PlusOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="h-24 shadow-sm sticky top-0 bg-white z-10">
      <Container>
        <div className="flex justify-between items-center h-full">
          <div className="italic text-xl">RentRide</div>
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
  );
}
