import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center h-full">
      <div className="max-w-[1560px] w-full">{children}</div>
    </div>
  );
}
