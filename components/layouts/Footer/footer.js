import React from "react";
import FooterStyleBox from './style'
const Footer = (props) => {
  return (
    <FooterStyleBox>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </FooterStyleBox>
  );
};

export default Footer;
