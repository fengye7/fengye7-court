import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import { useEffect } from "react";
import BootstrapClient from "@/components/BootstrapClient";
import CustomNavbar from "@/components/navigation_bar";

export default function pageApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <BootstrapClient />
      <script
        type="text/javascript"
        src="https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js" // 引入跟随鼠标的线条样式
      ></script>
      <CustomNavbar/>
      <Component {...pageProps} />
    </>
  );
}
