import React, { useState } from "react";
import Logo from "../../assets/Photos/Logo.png";
import { Link } from "react-router-dom";
import { ListIndentDecrease } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (

    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex-1 ">
          <Link to="/">
            <img src={Logo} alt="Logo" className=" h-[50px] object-contain" />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-10 font-heading">
            {navItems.map((item, idx) => (
              <li key={idx} className="text-lg text-amber-500 hover:opacity-70 transition">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <Link to="/hire">
            <button className="hidden md:inline-flex rounded-md border border-slate-800 px-5 py-2 text-sm font-medium transition hover:bg-slate-800 hover:text-white">
              Hire Me
            </button>
          </Link>

          <button
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-slate-900 hover:bg-slate-100 transition"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            <ListIndentDecrease size={24} />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} navItems={navItems} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};
