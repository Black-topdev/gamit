import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    const isMobileScreen = globalThis.matchMedia("(max-width: 1024px)").matches;
    if (!isMobileScreen) return;
    setOpen(!open);
    document.body.style.overflow = !open ? "hidden" : "";
  };

  return (
    <div className="flex justify-between items-center py-3 md:py-7 px-6 md:px-16 bg-[#030400]">
      <Link
        to="/"
        className="flex gap-4 items-center text-white font-bold text-3xl"
      >
        <img src="/assets/img/header/logo.svg" alt="logo" />
      </Link>
      <div className="hidden md:flex justify-between gap-12">
        <Link
          to="/products"
          className={`hover:text-[#983BF6] flex gap-2 items-center ${
            location.pathname === "/products"
              ? "text-[#983BF6] font-medium"
              : ""
          }`}
        >
          Products
          <img src="/assets/img/header/arrow-down.svg" alt="arrow-down" />
        </Link>
        <Link
          to="/features"
          className={`hover:text-[#983BF6] flex gap-2 items-center ${
            location.pathname === "/features"
              ? "text-[#983BF6] font-medium"
              : ""
          }`}
        >
          Features
          <img src="/assets/img/header/arrow-down.svg" alt="arrow-down" />
        </Link>
        <Link
          to="/about"
          className={`hover:text-[#983BF6] ${
            location.pathname === "/about" ? "text-[#983BF6] font-medium" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/partners"
          className={`hover:text-[#983BF6] ${
            location.pathname === "/partners"
              ? "text-[#983BF6] font-medium"
              : ""
          }`}
        >
          Partners
        </Link>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <button className="bg-[#3E3E3E] font-semibold px-[10px] py-[2px] rounded-2xl">
          Sign up
        </button>
        <button className="bg-[#C1F916] font-semibold text-[#030400] px-[10px] py-[2px] rounded-2xl">
          Connect wallet
        </button>
      </div>
      <button
        onClick={toggleMenu}
        className="px-3 py-1 text-blue-600 md:hidden z-[100]"
        id="navbar-toggle"
      >
        {open && (
          <img
            src="/assets/img/header/menu-close.png"
            alt="menu"
            className="w-6 h-6"
          />
        )}
        {!open && (
          <img
            src="/assets/img/header/menu-open.png"
            alt="menu"
            className="w-6 h-6"
          />
        )}
      </button>
      <div
        className={`text-3xl duration-500 flex flex-col gap-8 justify-start items-center fixed right-0 top-0 w-full h-screen z-20 bg-[#080808] scroll-none p-6 pt-[120px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        id="navbar-collapse"
      >
        <Link
          to="/products"
          className={`hover:text-[#983BF6] flex gap-2 items-center ${
            location.pathname === "/products"
              ? "text-[#983BF6] font-medium"
              : ""
          }`}
        >
          Products
          <img src="/assets/img/header/arrow-down.svg" alt="arrow-down" />
        </Link>
        <Link
          to="/features"
          className={`hover:text-[#983BF6] flex gap-2 items-center ${
            location.pathname === "/features"
              ? "text-[#983BF6] font-medium"
              : ""
          }`}
        >
          Features
          <img src="/assets/img/header/arrow-down.svg" alt="arrow-down" />
        </Link>
        <Link
          to="/about"
          className={`hover:text-[#983BF6] ${
            location.pathname === "/about" ? "text-[#983BF6] font-medium" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/partners"
          className={`hover:text-[#983BF6] ${
            location.pathname === "/partners"
              ? "text-[#983BF6] font-medium"
              : ""
          }`}
        >
          Partners
        </Link>
        <button className="bg-[#3E3E3E] font-semibold px-[10px] py-[2px] rounded-2xl">
          Sign up
        </button>
        <button className="bg-[#C1F916] font-semibold text-[#030400] px-[10px] py-[2px] rounded-2xl">
          Connect wallet
        </button>
      </div>
    </div>
  );
}
