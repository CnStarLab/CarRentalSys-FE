"use client";

import React, { useState } from "react";
import Image from "next/image";
import pencil from "#/pen.png";
import phone from "#/telephone.png";
import mail from "#/mail.png";
import Eicon from "#/eicon.png";
import { useRouter } from "next/navigation";

interface ProfileClientProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  isVerified: boolean;
  password: string;
}

export default function ProfileClient({
  firstName: initialFirstName,
  lastName: initialLastName,
  phoneNumber: initialPhoneNumber,
  email: initialEmail,
  isVerified: initialIsVerified,
  password: initialPassword,
}: ProfileClientProps) {
  // State management using hooks
  const [firstName, setFirstName] = useState<string>(initialFirstName);
  const [lastName, setLastName] = useState<string>(initialLastName);
  const [phoneNumber, setPhoneNumber] = useState<string>(initialPhoneNumber);
  const [email, setEmail] = useState<string>(initialEmail);
  const [isVerified, setIsVerified] = useState<boolean>(initialIsVerified);
  const [password, setPassword] = useState<string>(initialPassword);

  const router = useRouter();

  // Handler functions
  const handlePersonalInfoChange = () => {
    // Logic to change personal information
  };

  const handleContactInfoChange = () => {
    // Logic to change contact information
  };

  const handleVerifyPhone = () => {
    // Logic to verify phone number
    setIsVerified(true);
    router.push(`/phoneNumberVerify?phoneNumber=${phoneNumber}`);
  };

  const handleVerifyAccount = () => {
    // Logic to verify account
  };

  const handlePasswordChange = () => {
    // Logic to change password
  };

  return (
    <div className="max-w-md bg-white mx-auto">
      {/* Personal Information */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <div className="text-2xl mb-4 font-semibold">Хувийн мэдээлэл</div>
        <div className="flex mb-2">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-4/7 p-2 h-14 border rounded bg-custom-blue2"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-3/7 p-2 h-14 border rounded bg-custom-blue2 ml-2"
          />
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Энэ нэр нь олон нийтэд нээлттэй харагдах юм.
        </p>
        <button
          onClick={handlePersonalInfoChange}
          className="flex items-center px-4 py-2 bg-white border rounded hover:bg-blue-50"
        >
          <Image
            src={pencil}
            alt="Edit"
            className="mr-2"
            width={16}
            height={16}
          />
          Хувийн мэдээлэл өөрчлөх
        </button>
      </div>

      {/* Contact Information */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-2xl mb-4 font-semibold">Холбоо барих мэдээлэл</h3>
        <div className="flex items-center mb-2">
          <div className="relative w-7/10">
            <Image
              src={phone}
              alt="Phone"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              width={16}
              height={16}
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 pl-10 border rounded"
            />
          </div>
          <button
            onClick={handleVerifyPhone}
            disabled={isVerified}
            className={`w-3/10 px-4 py-2 text-white rounded ml-2 ${
              isVerified ? "bg-green-500" : "bg-gray-700 hover:bg-black"
            }`}
          >
            {isVerified ? "Баталгаажсан" : "Баталгаажуулах"}
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Утасны дугаараар баталгаажуулах машиндаа хүндрэл учруулж боломтой.
        </p>
        <div className="relative">
          <Image
            src={mail}
            alt="Phone"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            width={16}
            height={16}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 pl-10 mb-6 border rounded bg-custom-blue2"
          />
        </div>
        <button
          onClick={handleContactInfoChange}
          className="flex items-center px-4 py-2 bg-white border rounded hover:bg-blue-50"
        >
          <Image
            src={pencil}
            alt="Edit"
            className="mr-2"
            width={16}
            height={16}
          />
          Холбоо барих мэдээлэл өөрчлөх
        </button>
      </div>

      {/* Verification */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-2xl mb-4 font-semibold">Баталгаажуулалт</h3>
        <div className="flex items-center mb-2">
          <div className="w-1/10 flex justify-center items-center mr-2">
            <Image src={Eicon} alt="Eicon" className="w-4 h-4" />
          </div>
          <div className="relative w-6/10">
            <Image
              src={phone}
              alt="Phone"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              width={16}
              height={16}
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 pl-10 border rounded bg-custom-blue2"
            />
          </div>
          <button
            onClick={handleVerifyAccount}
            disabled={isVerified}
            className={`w-3/10 px-4 py-2 text-white rounded ml-2 ${
              isVerified ? "bg-green-500" : "bg-gray-700 hover:bg-black"
            }`}
          >
            {isVerified ? "Баталгаажсан" : "Баталгаажуулах"}
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Бүртгий хаягийг E-mongolia системээр баталгаажуулах машин түрээслэх,
          түрээсүүлэх үйлчилгээг ашиглаж боломтой юм.
        </p>
      </div>

      {/* Password Change */}
      <div className="mb-4">
        <h3 className="text-2xl mb-4 font-semibold">Нууц үг</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-custom-blue2"
        />
        <button
          onClick={handlePasswordChange}
          className="flex items-center px-4 py-2 bg-white border rounded hover:bg-blue-50"
        >
          <Image
            src={pencil}
            alt="Edit"
            className="mr-2"
            width={16}
            height={16}
          />
          Нууц үгээ солих
        </button>
      </div>
    </div>
  );
}
