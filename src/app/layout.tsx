import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import { ConfigProvider } from "antd";
// import antdThemeConfig from "../../theme.config";
import Footer from "@/components/footer";
import Container from "@/components/Container";

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
        <div className="flex flex-col justify-between h-screen">
          <div>
            <Header />
            <Container>{children}</Container>
          </div>
          <Footer />
        </div>
        {/* </ConfigProvider> */}
      </body>
    </html>
  );
}
