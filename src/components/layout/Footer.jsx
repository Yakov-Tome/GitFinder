import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-neutral/60 text-primary-content justify-items-center">
      <AiFillCopyrightCircle
        color="white"
        className="inline-block fill-current"
        size={32}
      />

      <p className="text-white">Copyright &copy; {footerYear}</p>
    </footer>
  );
}

export default Footer;
