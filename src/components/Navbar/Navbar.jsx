//
import { HomeIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/footerSection/logoHome.png";
import Greylogo from "../../assets/footerSection/editedLogoGrey.png";
import CachedImage from "../CachedImage";

const Navbar = () => {
  const navigate = useNavigate();
  //for controlling font color in Home Page
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  // === SCROLL STATE (drives transparent vs white) ===
  const [scrolled, setScrolled] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  // === UI STATE ===
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);

  // Refs
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const hideDropdownTimeoutRef = useRef(null);

  // ===== Scroll listener (ONLY scroll behavior) =====
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // initialize on mount (handles reload mid-page)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // ==================================================
  // Listen to the hero video's "ended" event
  useEffect(() => {
    const onHeroEnd = () => setVideoEnded(true);
    window.addEventListener("heroVideoEnded", onHeroEnd);
    return () => window.removeEventListener("heroVideoEnded", onHeroEnd);
  }, []);

  // Toggles
  const toggleMenu = () => setIsMenuOpen((p) => !p);
  const toggleSearch = () => {
    setIsSearchOpen((p) => !p);
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchListVisible(false);
  };

  // Search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const searchableItems = [
      { title: "Unsere Leistungen", link: "/services/grundpflege" },
      { title: "Grundpflege", link: "/services/grundpflege" },
      { title: "Behandlungspflege", link: "/services/behandlungspflege" },
      { title: "Verhinderungspflege", link: "/services/verhinderungspflege" },
      {
        title: "Betreuungs und Entlastungsleistungen",
        link: "/services/betreuung-entlastung",
      },
      { title: "24h - Rufbereitschaft", link: "/services/rufbereitschaft" },

      { title: "Über uns", link: "/about-us/wir-sind-sernitas" },
      { title: "Wir sind Sernitas", link: "/about-us/wir-sind-sernitas" },
      { title: "Team", link: "/about-us/team" },
      { title: "Leitbild", link: "/about-us/leitbild" },
      { title: "Kooperationsnetzwerk", link: "/about-us/kooperationsnetzwerk" },
      { title: "Mitgliedschaft BAP", link: "/about-us/mitgliedschaft-bap" },

      { title: "Wissenswertes", link: "/wissenswertes/faq" },
      { title: "FAQ", link: "/wissenswertes/faq" },
      { title: "Aktuelles", link: "/wissenswertes/aktuelles" },
      { title: "Pflege-Blog", link: "/wissenswertes/pflege-blog" },
      { title: "Pflege-Ratgeber", link: "/wissenswertes/pflege-ratgeber" },
      { title: "Downloads", link: "/wissenswertes/downloads" },

      { title: "Karriere", link: "/karriere" },
      { title: "Kontakt", link: "/contact" },
      { title: "Impressum", link: "/imprint" },
      { title: "Datenschutz", link: "/privacy-policy" },
      { title: "AGB", link: "/general-terms" },
    ];

    const results = searchableItems.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setSearchResults(results);
    setIsSearchListVisible(results.length > 0);
  };

  const handleResultClick = (link) => {
    navigate(link);
    setIsSearchOpen(false);
    setIsSearchListVisible(false);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setIsSearchListVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const solid = scrolled || videoEnded;

  // Start white on Home before solid; otherwise your previous colors
  const navBgClass = solid ? "bg-white shadow-sm" : "bg-transparent";
  const textClass = solid
    ? "text-black"
    : isHome
    ? "text-white"
    : "text-primary-500";
  const hoverLinkClass = solid
    ? "hover:text-black"
    : isHome
    ? "hover:text-white"
    : "hover:text-black";
  const burgerBarClass = solid
    ? "bg-black"
    : isHome
    ? "bg-white"
    : "bg-primary-500";

  // keep dropdown styles as you had them
  const dropdownBg = "bg-white";
  const dropdownItem = "text-black hover:text-black hover:bg-primary-700";

  // ===== Nav items =====
  const navItems = [
    {
      title: <span>Unsere&nbsp;Leistungen</span>,
      subItems: [
        { title: "Grundpflege", link: "/services/grundpflege" },
        { title: "Behandlungspflege", link: "/services/behandlungspflege" },
        { title: "Verhinderungspflege", link: "/services/verhinderungspflege" },
        {
          title: "Betreuungs und Entlastungsleistungen",
          link: "/services/betreuung-entlastung",
        },
        { title: "24h - Rufbereitschaft", link: "/services/rufbereitschaft" },
      ],
    },
    {
      title: <span>Über&nbsp;uns</span>,
      subItems: [
        { title: "Wir sind Sernitas", link: "/about-us/wir-sind-sernitas" },
        { title: "Team", link: "/about-us/team" },
        { title: "Leitbild", link: "/about-us/leitbild" },
        {
          title: "Kooperationsnetzwerk",
          link: "/about-us/kooperationsnetzwerk",
        },
        { title: "Mitgliedschaft BAP", link: "/about-us/mitgliedschaft-bap" },
      ],
    },
    {
      title: "Wissenswertes",
      subItems: [
        { title: "FAQ", link: "/wissenswertes/faq" },
        { title: "Aktuelles", link: "/wissenswertes/aktuelles" },
        { title: "Pflege-Blog", link: "/wissenswertes/pflege-blog" },
        { title: "Pflege-Ratgeber", link: "/wissenswertes/pflege-ratgeber" },
        { title: "Downloads", link: "/wissenswertes/downloads" },
      ],
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 w-full z-50 px-2 py-1 transition-colors duration-300 ${navBgClass}`}
      >
        <div className=" flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            aria-label="Sernitas Care – Startseite"
            title="Startseite"
            className="group inline-flex items-center justify-center ml-2"
          >
            <CachedImage
              src={solid || !isHome ? Logo : Greylogo}
              alt="Sernitas Care"
              width={150}
              height={50}
              draggable={false}
              decoding="async"
              fetchpriority="high"
              className="w-[140px] h-[40px] object-contain transition-transform duration-200 transform-gpu group-hover:scale-[1.04]"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 mx-1">
            <ul
              className={` flex gap-3 md:gap-5 xl:gap-6 tracking-wide items-center font-light  ${textClass}`}
            >
              <li className="flex items-center gap-2">
                <a
                  href="/"
                  className={`text-xs md:text-sm lg:text-md font-normal flex items-center gap-2 ${{
                    hoverLinkClass,
                  }}`}
                >
                  {/* <HomeIcon className="w-5 h-5" /> */}
                  Startseite
                </a>
              </li>
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group flex items-center gap-2"
                  onMouseEnter={() => {
                    if (hideDropdownTimeoutRef.current)
                      clearTimeout(hideDropdownTimeoutRef.current);
                    setActiveDropdown(idx);
                  }}
                  onMouseLeave={() => {
                    hideDropdownTimeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 300);
                  }}
                >
                  <a
                    href={
                      item.title === "Unsere Leistungen"
                        ? "/services/grundpflege"
                        : item.title === "Über uns"
                        ? "/about-us/wir-sind-sernitas"
                        : item.title === "Wissenswertes"
                        ? "/wissenswertes/faq"
                        : "/"
                    }
                    className={`font-sans text-xs md:text-sm lg:text-md font-normal  ${hoverLinkClass} flex items-center justify-center`}
                  >
                    {item.title}
                    {item.subItems && (
                      <ChevronDownIcon
                        strokeWidth={3}
                        className=" w-3 h-3 ml-1 inline-block"
                      />
                    )}
                  </a>

                  {activeDropdown === idx && item.subItems && (
                    <ul
                      className={`absolute left-0 top-full mt-2 shadow-lg m-2 w-60 ${dropdownBg}`}
                      onMouseEnter={() => {
                        if (hideDropdownTimeoutRef.current)
                          clearTimeout(hideDropdownTimeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        hideDropdownTimeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 300);
                      }}
                    >
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={sub.link}
                            className={`block p-4 text-xs ${dropdownItem}`}
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Karriere */}
              <li className="text-md flex items-center">
                <a
                  href="/karriere"
                  className={`font-sans text-xs md:text-sm lg:text-md font-normal ${hoverLinkClass} flex items-center justify-center`}
                >
                  Karriere
                </a>
              </li>

              {/* Kontakt */}
              <li className="flex items-center">
                <a
                  href="/contact"
                  className={`font-sans text-xs md:text-sm lg:text-md font-normal ${hoverLinkClass} flex items-center justify-center`}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Search Icon */}
          <div
            className={`hidden lg:flex mr-8 sm:mr-3 ${textClass} ${hoverLinkClass}`}
          >
            <li className="flex items-center list-none">
              <button onClick={toggleSearch} className="text-sm md:text-md font-bold">
                <i className="fas fa-search"></i>
              </button>
            </li>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-end w-full">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-shadow duration-300 ${textClass}`}
              aria-label="Open menu"
            >
              <div className="space-y-1">
                <span className={`block w-6 h-0.5 ${burgerBarClass}`}></span>
                <span className={`block w-6 h-0.5 ${burgerBarClass}`}></span>
                <span className={`block w-6 h-0.5 ${burgerBarClass}`}></span>
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div
          ref={searchRef}
          className={`fixed top-16 left-0 w-full py-5 xl:py-8 px-24 lg:px-47 z-50 ${
            solid ? "bg-transparent  text-white" : "bg-transparent  text-white"
          }`}
        >
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="search-input w-full px-4 py-2 rounded border border-gray-300 "
          />
          {isSearchListVisible && searchResults.length > 0 && (
            <ul className="mt-4 text-black bg-gray-100 shadow-lg rounded max-h-64 overflow-y-auto">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="border-b last:border-none px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleResultClick(result.link)}
                >
                  {result.title}
                </li>
              ))}
            </ul>
          )}
          {searchQuery && searchResults.length === 0 && (
            <p className="mt-4 opacity-80">Keine Ergebnisse gefunden.</p>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800/60">
          <div className="backdrop-blur-md flex flex-col items-start p-6 text-white w-full h-full overflow-y-auto">
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-white text-2xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="w-full space-y-6 mt-8">
              <li className="flex items-center gap-4 text-lg font-bold uppercase">
                <a
                  href="/"
                  className="flex items-center gap-2 hover:text-secondary transition duration-300"
                  onClick={toggleMenu}
                >
                  {/* <i className="fas fa-home"></i>  */}
                  Home
                </a>
              </li>

              {navItems.map((item, idx) => (
                <li key={idx} className="w-full">
                  <div className="text-lg font-bold uppercase flex items-center justify-between">
                    <span>{item.title}</span>
                  </div>
                  <ul className="mt-4 space-y-4 pl-4">
                    {item.subItems.map((sub, i) => (
                      <li key={i}>
                        <a
                          href={sub.link}
                          onClick={toggleMenu}
                          className="block text-md hover:text-secondary transition duration-300"
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li>
                <a
                  href="/contact"
                  onClick={toggleMenu}
                  className="w-full text-center px-8 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition duration-300"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="/karriere"
                  onClick={toggleMenu}
                  className="w-full text-center px-8 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition duration-300"
                >
                  Karriere
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
