import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            CodeCraft Studio
          </h2>

          <p className="mt-4 text-gray-400">
            We build modern websites,
            mobile apps and AI-powered
            digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              Services
            </li>

            <li className="hover:text-white cursor-pointer">
              Pricing
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            info@codecraftstudio.com
          </p>

          <p className="text-gray-400 mt-2">
            +1 (555) 123-4567
          </p>

          <p className="text-gray-400 mt-2">
            New York, USA
          </p>

        </div>

        {/* Social Media */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />

            <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />

            <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" />

            <FaGithub className="cursor-pointer hover:text-gray-300 transition" />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © 2026 CodeCraft Studio. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;