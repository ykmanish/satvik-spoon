"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const menuItems = [
  { name: "Daily Meals", href: "/daily-meals" },
  { name: "Salads and Soups", href: "/salads-soups" },
  { name: "Bulk Orders", href: "/bulk-orders" },
  { name: "Corporate Orders", href: "/corporate-orders" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // GSAP animations
  useEffect(() => {
    // Animate hamburger lines
    gsap.fromTo(
      hamburgerRef.current?.children,
      { scaleX: 1 },
      {
        scaleX: isOpen ? [1.2, 0.8, 1] : 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.inOut",
      }
    );

    // Animate mobile menu
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        },
        {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      );

      // Animate menu items
      gsap.fromTo(
        menuRef.current.children,
        {
          y: isOpen ? 20 : 0,
          opacity: isOpen ? 0 : 1,
        },
        {
          y: isOpen ? 0 : 20,
          opacity: isOpen ? 1 : 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: isOpen ? 0.2 : 0,
        }
      );
    }
  }, [isOpen]);

  return (
    <nav className="bg-white border border-zinc-200  w-full py-3 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
             <img
                src="https://mediumslateblue-salmon-778700.hostingersite.com/wp-content/uploads/2023/04/Satvik-Spoon-Final1.png"
                alt="Logo"
                className="h-14"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <div ref={hamburgerRef} className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden border-t mt-3 border-zinc-200 bg-white ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pt-6 pb-4 ">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-[#0c0c0c] hover:text-gray-900 py-1.5 px-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;