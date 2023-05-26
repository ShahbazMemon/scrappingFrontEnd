import React from "react";
import Header, { HeaderProps } from "./header";
import Footer, { FooterProps } from "./footer";
import Sidebar from "./sidebar";

export type LayoutProps = {
  children: React.ReactNode;
  data: string;
};

// type Props = {
//   sidebar : LayoutProps
// }

const index = ({ children, data }: LayoutProps) => {
  return (
    <div>
      {/* <Sidebar sidebar = {data}/> */}
      <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{width:"100%"}}>{children}</main>
      </div>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Footer footer={data} />
      </div>
    </div>
  );
};

export default index;
