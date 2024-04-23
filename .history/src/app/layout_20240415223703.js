import { Footer } from "@/components/Footer/Footer";
import "./global.scss";
import { Header } from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, ConfigProvider, Space } from "antd";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Petpals - Chữa lành từ trái tim",
  description: "Petpals",
};

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <ToastContainer />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#911A1D",
              fontFamily: "Roboto",
            },
            components: {
              DatePicker: {
                inputFontSize: 16,
              },
              Menu: {
                itemBg: "transparent",
                subMenuItemBg: "transparent",
                activeBarBorderWidth: 0,
                itemSelectedBg: "rgba(145, 26, 29, 0.05)",
                itemBorderRadius: 0,
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
        <Footer />
      </body>
    </html>
  );
}
