"use client";
import Container from "@/components/Container";
import { Button, Card, Checkbox, Divider, Form, FormProps, Input } from "antd";
import React from "react";

export default function page() {
  type FieldType = {
    username?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Container>
      <div className="flex w-full justify-center mt-16">
        <Card className=" shadow-md w-[560px]">
          <div className="text-5xl">Sign Up</div>
          <div className="pb-8 pt-2">Монголын анхны машин түрээсийн систем</div>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                href="/"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <Divider />
          <div className="flex flex-nowrap gap-4">
            <Button size="large" block>
              Signup with E-Mongolia
            </Button>
            <Button size="large" block href="/login">
              Login
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}
