import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import { ConfigProvider } from "antd";
// import antdThemeConfig from "../../theme.config";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ConfigProvider theme={antdThemeConfig}> */}
        <Header />
        {children}
        <Footer />
        {/* </ConfigProvider> */}
      </body>
    </html>
  );
}
