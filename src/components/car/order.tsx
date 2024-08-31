"use client";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import { Affix, Button, Card, DatePicker, Divider } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
const { RangePicker } = DatePicker;

export default function CarOrder() {
  return (
    <div className="w-2/5 h-full">
      <Affix offsetTop={120}>
        <Card className="h-max">
          <div className="grid gap-4">
            <div className="flex justify-between">
              <div className="text-4xl">
                50’000₮ <span className="text-base">1 өдрийн үнэ</span>
              </div>
              <div>4.0</div>
            </div>
            <div className="flex gap-2">
              <EnvironmentOutlined />
              <div>
                <div>Байршил</div>
                <div>Улаанбаатар</div>
              </div>
            </div>
            <div className="flex gap-2">
              <UserOutlined />
              <div>
                <div>Amaraa Bayaraa</div>
                <div>2024 оны 3 сараас хойш</div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="grid gap-4">
            <div>Хугацаа</div>
            <RangePicker />
            <div>Хүргэлт, жолооч</div>
            <div className="flex gap-2">
              <Button>Хүргүүлж авна</Button>
              <Button>Жолоочтой авна</Button>
            </div>
            <TextArea placeholder="Түрээсийн зорилгоо бичнэ үү." />
            <div>
              Та энэ машиныг ямар зорилгоор түрээслэх гэж байгаа талаараа бичнэ.
              Жишээ нь: хөдөө явах, ачаа ачих, хүн тосох гэх мэт.
            </div>
            <Button type="primary" block size="large">
              Захиалах
            </Button>
          </div>
        </Card>
      </Affix>
    </div>
  );
}
