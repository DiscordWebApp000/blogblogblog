"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-white   text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Sol taraf: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/images/Logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Sağ taraf: Menü */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold uppercase lg:px-12 px-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-gray-300">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-300">
              Galeri
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              İletişim
            </Link>
          </li>
        </ul>

        {/* Mobil Menü İkonu */}
        <div className="md:hidden">
          <FaBars size={24} onClick={toggleMenu} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobil Menü */}
      <div
        className={`fixed top-0 left-0 h-full w-2/4 bg-white text-black p-6 transition-transform duration-300 ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
         <div className="flex items-center pb-8 ml-[-30px]">
          <Link href="/">
            <img src="/images/Logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>
        <ul className="space-y-4 text-lg font-bold uppercase">
          <li>
            <Link href="/" onClick={toggleMenu} className="hover:text-gray-500">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/about-us" onClick={toggleMenu} className="hover:text-gray-500">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggleMenu} className="hover:text-gray-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={toggleMenu} className="hover:text-gray-500">
              Galeri
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-gray-500">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
