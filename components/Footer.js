"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white flex items-center justify-center h-24 px-4">
      <p className="text-lg text-center">
        &copy; {currentYear} FutureBridge •{" "}
        <Link href="/privacy-policy" className="underline text-blue-400 hover:text-blue-300">
          Privacy Policy
        </Link>{" "}
        •{" "}
        <Link href="/terms-of-use" className="underline text-blue-400 hover:text-blue-300">
          Terms of Use
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
