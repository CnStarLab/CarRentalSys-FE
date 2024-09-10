"use client";

import React, { useState } from "react";
import Image from "next/image";
import pencil from "#/pen.png";
import phone from "#/telephone.png";
import Eicon from "#/eicon.png";
import backicon from "#/back.png";
import infoicon from "#/info.png";
import { useRouter } from "next/navigation";
import type { RadioChangeEvent, UploadProps } from "antd";
import { Radio, Select, Space, Switch, Button, message, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import SelectField from "./selectField";

export default function AddCarClient() {
  // State management using hooks
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rentPrice, setRentPrice] = useState<string>("1 өдрийн үнэ ғ");
  const [radioValue, setRadioValue] = useState(1);

  const router = useRouter();

  const onRadioChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };

  const { Option } = Select;

  // 定义状态变量来保存所有 Select 的值
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );

  // 处理 Select 值变化的事件
  const handleSelectChange = (name: string) => (value: string) => {
    setSelectedValues((prev) => ({ ...prev, [name]: value }));
  };

  const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleSubmit = () => {
    // Logic to submit all information
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
    setRentPrice("");
    setRadioValue(1);
    setSelectedValues({});
  };

  // 定义选项数据
  const selectOptions = {
    type: [
      { value: "Суудлын", label: "Суудлын" },
      { value: "Жийп", label: "Жийп" },
      { value: "Гэр бүлийн", label: "Гэр бүлийн" },
      { value: "Ачааны", label: "Ачааны" },
      { value: "Автобус", label: "Автобус" },
      { value: "Хунд ММ", label: "Хунд ММ" },
      { value: "Бусад", label: "Бусад" },
    ],
    manufacturer: [
      { value: "Acura", label: "Acura" },
      { value: "Alfa Romeo", label: "Alfa Romeo" },
      { value: "Aston Martin", label: "Aston Martin" },
      { value: "Audi", label: "Audi" },
      { value: "BMW", label: "BMW" },
      { value: "Bentley", label: "Bentley" },
      { value: "Bugatti", label: "Bugatti" },
      { value: "Cadillac", label: "Cadillac" },
      { value: "Chevrolet", label: "Chevrolet" },
      { value: "Citroen", label: "Citroen" },
      { value: "Daewoo", label: "Daewoo" },
      { value: "Dodge", label: "Dodge" },
      { value: "Ferrari", label: "Ferrari" },
      { value: "Fiat", label: "Fiat" },
      { value: "Ford", label: "Ford" },
      { value: "Geely", label: "Geely" },
      { value: "Honda", label: "Honda" },
      { value: "Hyundai", label: "Hyundai" },
      { value: "Infiniti", label: "Infiniti" },
      { value: "Isuzu", label: "Isuzu" },
      { value: "Jaguar", label: "Jaguar" },
      { value: "Jeep", label: "Jeep" },
      { value: "Kia", label: "Kia" },
      { value: "Lada", label: "Lada" },
      { value: "Lamborghini", label: "Lamborghini" },
      { value: "Land Rover", label: "Land Rover" },
      { value: "Lexus", label: "Lexus" },
      { value: "Mahindra", label: "Mahindra" },
      { value: "Maserati", label: "Maserati" },
      { value: "Mazda", label: "Mazda" },
      { value: "Mercedes-Benz", label: "Mercedes-Benz" },
      { value: "Mitsubishi", label: "Mitsubishi" },
      { value: "Nissan", label: "Nissan" },
      { value: "Opel", label: "Opel" },
      { value: "Peugeot", label: "Peugeot" },
      { value: "Porsche", label: "Porsche" },
      { value: "Proton", label: "Proton" },
      { value: "Renault", label: "Renault" },
      { value: "Rolls-Royce", label: "Rolls-Royce" },
      { value: "SEAT", label: "SEAT" },
      { value: "Saab", label: "Saab" },
      { value: "Skoda", label: "Skoda" },
      { value: "Smart", label: "Smart" },
      { value: "Subaru", label: "Subaru" },
      { value: "Suzuki", label: "Suzuki" },
      { value: "Tata", label: "Tata" },
      { value: "Tesla", label: "Tesla" },
      { value: "Toyota", label: "Toyota" },
      { value: "Volkswagen", label: "Volkswagen" },
      { value: "Volvo", label: "Volvo" },
    ],
    template: [
      { value: "4Runner", label: "4Runner" },
      { value: "Camry", label: "Camry" },
      { value: "Crown", label: "Crown" },
      { value: "Aqua", label: "Aqua" },
      { value: "Prius Alpha", label: "Prius Alpha" },
      { value: "Prius 10", label: "Prius 10" },
      { value: "Prius 20", label: "Prius 20" },
      { value: "Prius 30", label: "Prius 30" },
      { value: "Prius 50", label: "Prius 50" },
      { value: "Prius 51", label: "Prius 51" },
    ],
    door: [
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "more", label: "more" },
    ],
    seat: [
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
      { value: "more", label: "more" },
    ],
    gearbox: [
      { value: "Автомат", label: "Автомат" },
      { value: "Механик", label: "Механик" },
      { value: "Бусад", label: "Бусад" },
    ],
    speed: [
      { value: "Зөв", label: "Зөв" },
      { value: "Буруу", label: "Буруу" },
    ],
    heater: [
      { value: "Хотлогчгүй", label: "Хотлогчгүй" },
      { value: "Урдаа FWD", label: "Урдаа FWD" },
      { value: "Хойноо RWD", label: "Хойноо RWD" },
      { value: "Бүх дугуй 4WD", label: "Бүх дугуй 4WD" },
    ],
    year:[],
    conditioner: [
      { value: "Бензин", label: "Бензин" },
      { value: "Дизель", label: "Дизель" },
      { value: "Газ", label: "Газ" },
      { value: "Хайбрид", label: "Хайбрид" },
      { value: "Цахилгаан", label: "Цахилгаан" },
      { value: "Бусад", label: "Бусад" },
    ],
    engineCapacity:[],
    color: [
      { value: "Цагаан", label: "Цагаан" },
      { value: "Хар", label: "Хар" },
      { value: "Цэнхэр", label: "Цэнхэр" },
      { value: "Цайвар цэнхэр", label: "Цайвар цэнхэр" },
      { value: "Xex", label: "Xex" },
      { value: "Саарал", label: "Саарал" },
      { value: "Хурэн", label: "Хурэн" },
      { value: "Ягаан", label: "Ягаан" },
      { value: "Улаан", label: "Улаан" },
      { value: "Ногоон", label: "Ногоон" },
      { value: "Улбар шар", label: "Улбар шар" },
      { value: "Бор", label: "Бор" },
      { value: "Сувдан цагаан", label: "Сувдан цагаан" },
    ],
    region: [
      { value: "Архангай", label: "Архангай" },
      { value: "Баян-Өлгий", label: "Баян-Өлгий" },
      { value: "Баянхонгор", label: "Баянхонгор" },
      { value: "Булган", label: "Булган" },
      { value: "Говь-Алтай", label: "Говь-Алтай" },
      { value: "Говьсумбэр", label: "Говьсумбэр" },
      { value: "Дархан", label: "Дархан" },
      { value: "Дорноговь", label: "Дорноговь" },
      { value: "Дорнод", label: "Дорнод" },
      { value: "Дундговь", label: "Дундговь" },
      { value: "Завхан", label: "Завхан" },
      { value: "Орхон", label: "Орхон" },
      { value: "Сэлэнгэ", label: "Сэлэнгэ" },
      { value: "Сүхбаатар", label: "Сүхбаатар" },
      { value: "Төв", label: "Төв" },
      { value: "Увс", label: "Увс" },
      { value: "Улаанбаатар", label: "Улаанбаатар" },
      { value: "Ховд", label: "Ховд" },
      { value: "Хэнтий", label: "Хэнтий" },
      { value: "Хевсгел", label: "Хевсгел" },
      { value: "Оверхангай", label: "Оверхангай" },
    ],
  };

  return (
    <div className="max-w-[650px] bg-white mx-auto">
      {/* Personal Information */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <div className="flex items-center space-x-2">
          <Image
            src={backicon}
            alt="Back Icon"
            className="w-6 h-6 mr-4"
            width={24}
            height={24}
          />
          <div className="text-4xl mb-4 font-semibold">Хувийн мэдээлэл</div>
        </div>
        <div className="flex items-center bg-custom-blue1 p-4 rounded-md mb-6">
          <Image
            src={infoicon}
            alt="Warning"
            className="mr-2"
            width={20}
            height={20}
          />
          <div>
            Та турээслуулэх гэж буй машины унэн зев мэдээллийг оруулна уу.
          </div>
        </div>
        <div className="text-2xl mb-4 font-semibold">Еренхий мэдээлэл</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Гарчиг"
          className="w-full h-10 border rounded bg-custom-blue2 mb-4 pl-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Машины тухай тайлбар бичих."
          className="w-full h-32 border rounded bg-custom-blue2 pl-2"
        />
        <p className="text-sm text-gray-600 mb-2">
          Таны машин ямар онцлогтой талаар эсвэл таны зугээс турээслэх гэж
          байгаа хун мэдвэл зохих зуйлсийг тайлбар хэсэгт бичиж болно.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-2xl mb-4 font-semibold">Жолооч</h3>
        <div className="flex items-center mb-2">
          <Radio.Group onChange={onRadioChange} value={radioValue}>
            <Space direction="vertical">
              <Radio value={1}>Жолооч</Radio>
              <Radio value={2}>
                Турээслэгу хусэлт илгээвэл жолоочтой байх боломжтой
              </Radio>
              <Radio value={3}>Заавал жолоочтой турээслуулнэ</Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>

      {/* Verification */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-2xl mb-4 font-semibold">Υзγγлэлт</h3>
        <div>
          <SelectField
            placeholder="Терел"
            options={selectOptions.type}
            onChange={handleSelectChange("type")}
          />
          <SelectField
            placeholder="Yйлдвэр"
            options={selectOptions.manufacturer}
            onChange={handleSelectChange("manufacturer")}
          />
          <SelectField
            placeholder="Загвар"
            options={selectOptions.manufacturer}
            onChange={handleSelectChange("template")}
          />
          <SelectField
            placeholder="Хaaлгa"
            options={selectOptions.door}
            onChange={handleSelectChange("door")}
          />
          <SelectField
            placeholder="Сyудал"
            options={selectOptions.seat}
            onChange={handleSelectChange("seat")}
          />
          <SelectField
            placeholder="Хурдны хайрцаг"
            options={selectOptions.gearbox}
            onChange={handleSelectChange("gearbox")}
          />
          <SelectField
            placeholder="XYpA"
            options={selectOptions.speed}
            onChange={handleSelectChange("speed")}
          />
          <SelectField
            placeholder="Хетлегч"
            options={selectOptions.heater}
            onChange={handleSelectChange("heater")}
          />
          <SelectField
            placeholder="Yйлдвэрлэсэн он"
            options={selectOptions.year}
            onChange={handleSelectChange("year")}
          />
          <SelectField
            placeholder="Хеделгyyр"
            options={selectOptions.conditioner}
            onChange={handleSelectChange("conditioner")}
          />
          <SelectField
            placeholder="Моторын багтаамж"
            options={selectOptions.engineCapacity}
            onChange={handleSelectChange("engineCapacity")}
          />
          <SelectField
            placeholder="Θнгe"
            options={selectOptions.color}
            onChange={handleSelectChange("color")}
          />
          {/* 示例：访问 selectedValues 的值
      <div>
        <p>Selected Type: {selectedValues.type}</p>
        <p>Selected Manufacturer: {selectedValues.manufacturer}</p>
        <p>Selected Color: {selectedValues.color}</p>
        <p>Selected Seat: {selectedValues.seat}</p>
        <p>Selected Gearbox: {selectedValues.gearbox}</p>
        <p>Selected Speed: {selectedValues.speed}</p>
        <p>Selected Heater: {selectedValues.heater}</p>
        <p>Selected Year: {selectedValues.year}</p>
        <p>Selected Conditioner: {selectedValues.conditioner}</p>
        <p>Selected Engine Capacity: {selectedValues.engineCapacity}</p>
      </div> */}
        </div>
      </div>

      {/* Password Change */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-2xl mb-4 font-semibold">YHЭ</h3>
        <input
          type="text"
          value={rentPrice}
          onChange={(e) => setRentPrice(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-custom-blue2"
        />
        <p className="text-sm text-gray-600 mb-2">
          Ta машинаа нәг өдер хэдээр түрээслүүлтэх вэ? үнийг дарава нь верчилж болно
        </p>
      </div>

      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-2xl mb-4 font-semibold">Байршил</h3>
        <SelectField
          placeholder="Аймаг, нийслэл"
          options={selectOptions.region}
          onChange={handleSelectChange("region")}
        />
        <div className="flex items-center mb-2.5">
          <Switch />
          <span className="ml-2.5">Түрээслэгч хусвэл хүргэж өгех боломжтой</span>
        </div>
      </div>

      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-2xl mb-4 font-semibold">3ypar</h3>
        <SelectField
          placeholder="Аймаг, нийслэл"
          options={selectOptions.region}
          onChange={handleSelectChange("region")}
        />
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <p className="text-sm text-gray-600 mb-2 mt-4">
          Машины олон талаас дарсан нягтаршилтай зургуудыг оруулаарай. 
          Хамгийн ихдэз 10 зураг оруулах боломжтой.
        </p>
        <button className="border text-black w-[100px] h-10 rounded-md mt-4 mr-4 ml-96" onClick={handleClear}>Буцах</button>
        <button className="bg-black text-white w-[100px] h-10 rounded-md mt-4" onClick={handleSubmit}>Хадгалах</button>
      </div>
    </div>
  );
}
