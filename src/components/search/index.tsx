"use client";
import { locations } from "@/constants/locations";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Input, Select } from "antd";
import React from "react";
const { RangePicker } = DatePicker;
export default function Search({ search }: { search?: boolean }) {
  return (
    <Card>
      <div className="flex gap-4">
        {search ? (
          <Input placeholder="Search ..." prefix={<SearchOutlined />} />
        ) : (
          <Select
            options={locations}
            style={{ width: "200px" }}
            placeholder="Байршил сонгох"
            size="large"
          />
        )}

        <RangePicker size="large" className="w-96" />
        <Button
          icon={<SearchOutlined />}
          type="primary"
          size="large"
          href="/browser"
        >
          Search
        </Button>
      </div>
    </Card>
  );
}
