import React from "react";

const Footer = ({ hidden, fixed, gradient }) => {
  if (hidden) {
    return null;
  }

  return (
    <div className={fixed ? 'footer footer-fixed' : 'footer footer-static'}>
      <ul>
        <li>Aprtamenty Katowicka 39 © 2022 All right reserved</li>
      </ul>
    </div>
  );
};

export default Footer;
