import SideBar from "@/components/side-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-20">
      <SideBar />
      <div>{children}</div>
    </div>
  );
}
