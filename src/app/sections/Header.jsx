"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#about" },
    { name: "Beneficios", href: "#benefits" },
    { name: "Productos", href: "#products" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#join" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-50 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-10/12 max-md:max-w-11/12 mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#hero" className="z-50">
          <Logo size={scrolled ? "small" : "default"} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-green-600 ${
                scrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 text-gray-800 cursor-pointer hover:text-green-600 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white flex flex-col justify-center items-center md:hidden z-50"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-gray-800 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}