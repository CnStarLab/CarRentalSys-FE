"use client";
import { locations } from "@/constants/locations";
import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select } from "antd";
import React from "react";
const { RangePicker } = DatePicker;
export default function Search() {
  return (
    <div className="flex gap-4">
      <Select
        options={locations}
        style={{ width: "200px" }}
        placeholder="Байршил сонгох"
        size="large"
      />
      <RangePicker size="large" />
      <Button icon={<SearchOutlined />} type="primary" size="large">
        Search
      </Button>
    </div>
  );
}
