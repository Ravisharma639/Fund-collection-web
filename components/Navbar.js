"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white px-4 sm:px-6 py-3 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src="/collect.gif" width={44} height={44} alt="FutureBridge Logo" />
          <span>FutureBridge!</span>
        </Link>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {session?.user ? (
            <>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-5 py-2.5 rounded-lg font-medium flex items-center gap-1"
                >
                  Welcome {session.user.email}
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-lg z-10">
                    <ul className="py-2 text-sm">
                      <li>
                        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link href="/settings" className="block px-4 py-2 hover:bg-gray-700">
                          Your Page
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <button className="block px-4 py-2 hover:bg-gray-700">
                            Contact
                          </button>
                        </Link>

                      </li>
                      <li>
                        <button
                          onClick={() => signOut()}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <button
                onClick={() => signOut()}
                className="bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 rounded-lg font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 rounded-lg font-medium">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {session?.user ? (
            <>
              <p className="text-sm">Welcome {session.user.email}</p>
              <Link href="/dashboard" className="block px-2 py-1 hover:bg-gray-800 rounded">
                Dashboard
              </Link>
              <Link href="/settings" className="block px-2 py-1 hover:bg-gray-800 rounded">
                Your Page
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-2 py-1 hover:bg-gray-800 rounded"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-purple-700 hover:bg-purple-800 text-sm px-4 py-2.5 rounded-lg font-medium w-full">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
