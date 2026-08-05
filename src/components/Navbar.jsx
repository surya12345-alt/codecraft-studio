import { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode className="text-blue-600 text-2xl" />

          <h1 className="text-2xl font-bold text-gray-800">
            CodeCraft Studio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-blue-600 transition duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#process"
              className="hover:text-blue-600 transition duration-300"
            >
              Process
            </a>
          </li>

          <li>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition duration-300"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <ThemeToggle />

          {/* Desktop Button */}
          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white shadow-lg">

          <ul className="flex flex-col items-center py-6 gap-6 text-gray-700 font-medium">

            <li onClick={() => setMenuOpen(false)}>
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <a href="#services" className="hover:text-blue-600 transition">
                Services
              </a>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <a href="#process" className="hover:text-blue-600 transition">
                Process
              </a>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <a href="#pricing" className="hover:text-blue-600 transition">
                Pricing
              </a>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>

            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </button>

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;