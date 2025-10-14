// src/components/footer/PartnersSection.jsx
import { motion } from "framer-motion";

import SernitasGroup from "../../assets/footerSection/sernitas-group.png";
import SernitasHR from "../../assets/footerSection/sernitas-hr-mini.jpeg";
import SernitasKliniken from "../../assets/footerSection/sernitas-kliniken.png";
import SernitasInstitute from "../../assets/footerSection/sernitas-institute.png";

import CachedImage from "../CachedImage";

const partners = [
  { id: 1, img: SernitasGroup, alt: "Sernitas Group", link: "https://sernitas.com/" },
  { id: 2, img: SernitasHR, alt: "Sernitas HR", link: "https://www.sernitas-hr.com/" },
  { id: 3, img: SernitasKliniken, alt: "Sernitas Kliniken", link: "https://www.sernitas-kliniken.com/" },
  { id: 4, img: SernitasInstitute, alt: "Sernitas Institute", link: "https://sernitas-institute.com/" },
];

// small helper: tighten the HR logo a bit so it doesn't look bigger
const logoClass = (alt) =>
  `object-contain transition-all duration-300 opacity-90 hover:opacity-100
   h-8 md:h-9 lg:h-10
   ${alt === "Sernitas HR" ? "max-w-[110px]" : "max-w-[130px]"}`;

const PartnersSection = () => {
  return (
    <motion.div
      className="w-full bg-white py-4 shadow-sm border-t-4 border-[#058169]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* Grid: 2 cols on small (=> 2 rows for 4 items), 4 cols on md+ */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-4 place-items-center">
        {partners.map((p) => (
          <motion.a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <CachedImage src={p.img} alt={p.alt} className={logoClass(p.alt)} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default PartnersSection;
