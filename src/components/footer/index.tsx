import React from "react";
import Container from "../Container";
import { Divider } from "antd";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-8">
      <Container>
        <div className="flex flex-col gap-14">
          <div className="text-2xl italic">RentGo</div>
          <div className="flex">
            <div>&copy; @2024 ✨Starlab. All rights reserved.</div>
            <Divider type="vertical" />
            <div>Үйлчилгээний нөхцөл</div>
            <Divider type="vertical" />
            <div>Холбоо барих</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
