"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function VerificationCodeInput() {
  // 设置初始计时为10分钟（600秒）
  const [timeLeft, setTimeLeft] = useState(600);
  const [code, setCode] = useState(new Array(4).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get("phoneNumber");

  useEffect(() => {
    // 倒计时逻辑
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 4); // 假设有4个输入框
  }, []);

  // 格式化时间为 MM:SS
  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // 检验验证码是否正确
  useEffect(() => {
    const onComplete = () => {
      const newCode = code.join(""); // Join the code array into a single string
      alert(newCode);
    };
  
    // 当 code 变化时，检查是否已经输入了4个字符
    if (code.every((char) => char !== "")) {
      onComplete();
    }
  }, [code]);

  const handleChange = (value: string, index: number) => {
    // 如果输入的不是数字，直接返回
    if (isNaN(Number(value))) return;

    // 更新当前输入框的值
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // 移动焦点到下一个输入框
    if (index < 3) {
      (inputRefs.current[index + 1] as HTMLInputElement).focus();
    }
  };

  const resend = () => {
    setTimeLeft(600);
    // resend code logic
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // 支持删除操作，按下Backspace时删除并移动到上一个输入框
    if (e.key === "Backspace") {
      if (code[index] === "") {
        // 如果当前输入框为空且不是第一个输入框，移动焦点到上一个输入框
        if (index > 0) {
          const newCode = [...code];
          newCode[index - 1] = ""; // 清空前一个输入框的内容
          setCode(newCode);
          (inputRefs.current[index - 1] as HTMLInputElement).focus(); // 移动焦点到前一个输入框
        }
      } else {
        // 如果当前输入框不为空，清空当前输入框的内容
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="text-2xl mb-4 font-semibold">
        Утасны дугаар баталгаажуулах
      </div>
      <div className="text-sm text-gray-600 mb-2">
        Таны +{phoneNumber} дугаарт илгээгдсэн 4 оронтой кодыг оруулна уу.
      </div>
      <div className="text-center text-2xl font-bold my-6">
        {formatTime()}
      </div>
      <div className="flex justify-center gap-2">
        {code.map((num, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={num}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el: HTMLInputElement | null) => {
              if (el) {
                inputRefs.current[index] = el;
              }
            }}
            className="w-12 h-12 text-2xl text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            autoFocus={index === 0}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => resend()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Дахин код авах
        </button>
      </div>
    </div>
  );
}
