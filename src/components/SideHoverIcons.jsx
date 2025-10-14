import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaAngleDoubleRight,
  FaFacebookF,
  FaInstagram,
  FaAngleDoubleLeft,
} from "react-icons/fa";

const SideHoverIcons = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`fixed top-1/2 -right-1  -translate-y-1/2 z-20 transition-all duration-500 bg-transparent ${
        hover ? "w-64" : "w-14"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col gap-2 py-4 px-2">
        {/* Phone */}
        <a
          href="tel:+4923496646480"
          className="h-10 flex items-center bg-primary-500 hover:bg-secondary rounded-md shadow text-white px-2"
        >
          <FaPhone className="text-lg shrink-0" />
          <span
            className={`ml-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
              hover
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            +49 234 966 46 480
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@sernitas-care.com"
          className="h-10 flex items-center bg-primary-500 hover:bg-secondary rounded-md shadow text-white px-2"
        >
          <FaEnvelope className="text-lg shrink-0" />
          <span
            className={`ml-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
              hover
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            info@sernitas-care.com
          </span>
        </a>

        {/* Contact Form */}
        <a
          href="/contact"
          className="h-10 flex items-center bg-primary-500 hover:bg-secondary rounded-md shadow text-white px-2"
        >
          <FaAngleDoubleLeft className="text-lg shrink-0" />
          <span
            className={`ml-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
              hover
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            Zum Kontaktformular
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/sernitasglobal"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 flex items-center bg-primary-500 hover:bg-secondary rounded-md shadow text-white px-2"
        >
          <FaFacebookF className="text-lg shrink-0" />
          <span
            className={`ml-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
              hover
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            Facebook
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sernitashrturkey?igsh=MWphd210cjVod3hjbg=="
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 flex items-center bg-primary-500 hover:bg-secondary rounded-md shadow text-white px-2"
        >
          <FaInstagram className="text-lg shrink-0" />
          <span
            className={`ml-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
              hover
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            Instagram
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideHoverIcons;
