import React from "react";
import Header, { HeaderProps } from "./header";
import Footer, { FooterProps } from "./footer";
import Sidebar from "./sidebar";
import styles from "@/styles/layout.module.css";

export type LayoutProps = {
  children: React.ReactNode;
  data: string;
};

// type Props = {
//   sidebar : LayoutProps
// }

const index = ({ children, data }: LayoutProps) => {
  return (
    <div style={{ backgroundColor: "ButtonFace" }}>
      <div>
        <div style={{ display: "block", position: "fixed" }}>
          <Sidebar />
        </div>
      </div>
        <div className={styles.context}>
          <div>
            <main style={{ width: "100%" }}>{children}</main>
            <div style={{ bottom: 0, width: "100%" }}>
              <Footer footer={data} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default index;
