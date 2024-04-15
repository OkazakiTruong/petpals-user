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
                itemActiveBg: "rgba(145,26,29,0.05) !important",
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
