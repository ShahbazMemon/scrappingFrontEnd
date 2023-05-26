import React from "react";

export type FooterProps = {};

type Props = {
  footer: string;
};

const index = ({ footer }: Props) => {
  return (
    <div style={{ textAlign: "center", color:"black", backgroundColor:"white" }}>
      <p>@heelo from Scrapping</p>
    </div>
  );
};

export default index;
