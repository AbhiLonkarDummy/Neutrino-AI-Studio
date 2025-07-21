// src/components/navbar/Navbar.jsx
import { useState } from "react";
import neutrinoLogo from "../../../assets/neutrino-logo.png";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Usecases", "Testimonials", "FAQ"];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 py-4">
      <div className="flex justify-center">
        <div className="w-full max-w-[1140px] px-[10px] mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">
            <a href="#" className="w-36 h-4 flex items-center ml-2">
              <img
                src={neutrinoLogo}
                alt="Neutrino Logo"
                className="w-full h-auto block"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-gray-700 hover:text-[var(--brand-primary-color)] transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger (visible on all sizes) */}
          <div className="flex button-container items-center gap-2">
            {/* CTA Button */}
            <a
              href="#get-started"
              className="
      w-full sm:w-auto
      text-center
      bg-[var(--brand-primary-color)]
      text-white
      px-4 py-3 sm:px-6 sm:py-2
      rounded-md
      text-base sm:text-lg
      font-medium
      transition
    "
            >
              Get in Touch
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center p-2 text-gray-700 hover:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <>
        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="lg:hidden border-t px-[10px] max-w-[1140px] mx-auto pb-4">
            <div className="flex flex-col space-y-2 mt-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-700 hover:text-black"
                >
                  {item}
                </a>
              ))}
              <a
                href="#get-started"
                className="sm:hidden inline-block bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </>
    </nav>
  );
};

export default NavbarComponent;
