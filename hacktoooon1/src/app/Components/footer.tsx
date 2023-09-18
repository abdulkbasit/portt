import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footerBg pt-24 pb-16">
      <div className="flex items-center justify-center">
        {/* Logo  */}
        <div className="flex items-center gap-x-1.5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-2xl font-heading font-bold">
            AB
          </div>
          <p
            className="font-heading font-bold text-2xl text-headingText"
            aria-label="Adeel_Ch"
          >
            <span>AB_</span>
            <span className="text-primary">Basit</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;