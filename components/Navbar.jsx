"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { usePathname } from "next/navigation";

const categories = [
  { id: 1, title: "Daytime", path: "#day" },
  { id: 2, title: "Evening", path: "#evening" },
  { id: 3, title: "Find Us", path: "#find" },
  { id: 4, title: "Contact Us", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full uppercase top-0 left-0 absolute z-50 flex items-center justify-between px-10 py-5">
      {/* Desktop Menu */}
      {!isMobile && (
        <div className="hidden lg:flex fixed gap-10">
          {categories.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="hover:text-foreground/100 text-xl text-foreground/50 transition"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <div className="flex items-center absolute right-[2rem] top-6">
          <motion.button
            initial={false}
            animate={isOpen ? "open" : "closed"}
            onClick={() => toggleOpen(!isOpen)}
            className="focus:outline-none z-30 group"
          >
            <span
              className={`block w-[3rem] mb-2 h-1 transition-all duration-300 bg-foreground/90 ${
                isOpen ? "rotate-45 translate-y-3" : ""
              } group-hover:bg-blue-800`}
            ></span>
            <span
              className={`block w-[3rem] mb-2 h-1 my-1 transition-all duration-300 bg-foreground/90 ${
                isOpen ? "opacity-0" : ""
              } group-hover:bg-blue-800`}
            ></span>
            <span
              className={`block w-[3rem] mb-2 h-1 transition-all duration-300 bg-foreground/90 ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              } group-hover:bg-blue-800`}
            ></span>
          </motion.button>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center bg-[url("/MENU2.png")] bg-cover'>
          <Link onClick={() => toggleOpen(false)} href={"/"}>
            <img
              src="/Freja.png"
              className="w-[18rem] invert pb-10"
              alt="logo"
            />
          </Link>
          <motion.ul>
            {categories.map((link) => (
              <motion.li
                onClick={() => toggleOpen(false)}
                key={link.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="pb-10 text-center"
              >
                <Link
                  href={link.path}
                  className="text-white text-3xl md:text-5xl my-4 hover:text-blue-800 transition"
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
