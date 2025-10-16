import { motion } from "framer-motion";

import teamImage from "../../assets/homePage/photo_enhanced_2x.png";

import CachedImage from "../CachedImage";

const WelcomeSection = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="font-sans text-secondary text-lg lg:text-xl font-medium mb-4">
            HERZLICH WILLKOMMEN BEI SERNITAS CARE
          </h2>
          <h1 className="font-sans text-primary-500 text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            Professionelle Pflege & Betreuung mit interkulturellem Verständnis
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CachedImage
              src={teamImage}
              alt="Sernitas Team"
              className="rounded-2xl shadow-2xl object-cover w-[400px] h-[500px] md:h-[650px] lg:h-[550px]"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="relative inline-block  text-primary-500 text-xl  md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6">
               <span className="">
                Sernitas Care – Ihre vertrauensvolle<br/>
              </span>
              <span className="bg-gradient-to-t from-primary-700 to-transparent">
                Unterstützung im Alltag
              </span>
            </h3>
            <p className="text-lg md:text-md lg:text-xl xl:text-2xl leading-relaxed text-primary-500 mb-4 text-justify">
              Bei Sernitas Care bieten wir Ihnen eine Vielzahl an
              Dienstleistungen, die individuell auf Ihre Bedürfnisse abgestimmt
              sind. Unser Ziel ist es, Ihnen ein selbstbestimmtes, würdevolles
              Leben in Ihrer gewohnten Umgebung zu ermöglichen – ganz gleich, ob
              es um kleine Alltagshelfer oder um umfassende Pflege geht.
            </p>
            <p className="text-lg md:text-md lg:text-xl xl:text-2xl leading-relaxed text-primary-500 mb-4 text-justify">
              Mit unseren Pflege- und Betreuungsleistungen unterstützen wir Sie
              in den Bereichen, die im Alltag besonders wichtig sind:{" "}
              <span className="font-semibold text-secondary">
                Körperpflege
              </span>
              ,{" "}
              <span className="font-semibold text-secondary">Ernährung</span>{" "}
              und{" "}
              <span className="font-semibold text-secondary">Mobilität</span>.
            </p>
            <p className="text-lg md:text-md lg:text-xl xl:text-2xl leading-relaxed text-primary-500 text-justify">
              Wir sind da, um Ihnen bei den täglichen Aufgaben zur Seite zu
              stehen und sorgen mit viel Einfühlungsvermögen dafür, dass Sie
              sich rundum wohl und sicher fühlen – zu Hause eben.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
