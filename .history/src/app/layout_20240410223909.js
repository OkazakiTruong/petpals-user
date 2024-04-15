import { Footer } from "@/components/Footer/Footer";
import "./global.scss";
import { Header } from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, ConfigProvider, Space } from "antd";

export const metadata = {
  title: "Petpals - Chữa lành từ trái tim",
  description: "Petpals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ToastContainer />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#911A1D",
            },
            components: {
              DatePicker: {
                activeBorderColor: "#911A1D",
                activeShadow: "0 0 2px #911A1D",
                hoverBorderColor: "#911A1D",
                multipleItemBg: "#911A1D",
                cellRangeBorderColor: "#911A1D",
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
