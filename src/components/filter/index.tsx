"use client";
import React from "react";
import {
  Affix,
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Slider,
  Switch,
} from "antd";

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

export default function Filter() {
  return (
    <Affix offsetTop={140}>
      <Card extra={<Button>Clear</Button>} title="Filter">
        <Form
          layout="vertical"
          name="validate_other"
          onFinish={onFinish}
          className="w-[300px]"
        >
          <Form.Item
            name="switch"
            valuePropName="checked"
            layout="horizontal"
            labelAlign="right"
            label="Хүргэлттэй эсэх"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="switch"
            valuePropName="checked"
            label="Жолоочтой эсэх"
            layout="horizontal"
            labelAlign="left"
          >
            <Switch />
          </Form.Item>
          <Divider />
          <Form.Item name="price" label="Price">
            <Slider range defaultValue={[20, 50]} />
          </Form.Item>
          <Divider />
          <Form.Item name="type" label="Type">
            <Checkbox.Group
              className="flex flex-col"
              options={options}
              defaultValue={["Apple"]}
            />
          </Form.Item>
          <Form.Item name="type" label="Type">
            <Checkbox.Group
              className="flex flex-col"
              options={options}
              defaultValue={["Apple"]}
            />
          </Form.Item>
          <Form.Item name="type" label="Type">
            <Checkbox.Group
              className="flex flex-col"
              options={options}
              defaultValue={["Apple"]}
            />
          </Form.Item>
        </Form>
      </Card>
    </Affix>
  );
}
