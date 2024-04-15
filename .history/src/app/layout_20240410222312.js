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
            components: {
              DatePicker: {
                activeBg: "$BROWN-500",
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
