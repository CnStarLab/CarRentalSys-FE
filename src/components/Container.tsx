import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center h-full">
      <div className="max-w-[1200px] w-full p-5 ">{children}</div>
    </div>
  );
}
