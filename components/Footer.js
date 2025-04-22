"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1>
          <p className="text-lg">&copy; {currentYear} FutureBridge - All rights reserved!</p>
          </h1>
        </div>

        {/* Right side: Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <p>
            <Link href="https://merchant.razorpay.com/policy/OUUOKnEfVJGzeR/privacy" className="underline text-blue-400 hover:text-blue-300">
              Privacy Policy 
            </Link>
          </p>
          <p>
            <Link href="https://merchant.razorpay.com/policy/OUUOKnEfVJGzeR/refund" className="underline text-blue-400 hover:text-blue-300">
              Cancellations and Refunds 
            </Link>
          </p>
          <p>
            <Link href="https://merchant.razorpay.com/policy/OUUOKnEfVJGzeR/shipping" className="underline text-blue-400 hover:text-blue-300">
              Shipping Policy 
            </Link>
          </p>
          <p>
            <Link href="https://merchant.razorpay.com/policy/OUUOKnEfVJGzeR/contact_us" className="underline text-blue-400 hover:text-blue-300">
              Contact Us
            </Link>
          </p>
          <p>
            <Link href="https://merchant.razorpay.com/policy/OUUOKnEfVJGzeR/terms" className="underline text-blue-400 hover:text-blue-300">
              Terms and Conditions 
            </Link>
          </p>
        </div>
      </div>
   
    </footer>
  );
};

export default Footer;
