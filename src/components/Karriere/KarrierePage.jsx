import karriereImage1 from "../../assets/karrierePage/karriere-2.png";
import karriereImage2 from "../../assets/aboutPage/hero-3.png";

import CachedImage from "../CachedImage";

const jobPosts = [
  {
    title: "Vertriebsmitarbeiter:in",
    subtitle: "(m/w/d)",
    phone: "+49 234 966 46 480",
    email: "info@sernitas-care.com",
  },
  {
    title: "Büromanagement",
    subtitle: "(m/w/d)",
    phone: "+49 234 966 46 480",
    email: "info@sernitas-care.com",
  },
  {
    title: "Management HR",
    subtitle: "(m/w/d)",
    phone: "+49 234 966 46 480",
    email: "info@sernitas-care.com",
  },
  {
    title: "Kundenbetreuer:in",
    subtitle: "(m/w/d)",
    phone: "+49 234 966 46 480",
    email: "info@sernitas-care.com",
  },
  {
    title: "Werkstudent:in HR",
    subtitle: "(m/w/d)",
    phone: "+49 234 966 46 480",
    email: "info@sernitas-care.com",
  },
  {
    title: "Initiativbewerbung",
    subtitle: "(m/w/d)",
    phone: "+49 234 966 46 480",
    email: "info@sernitas-care.com",
  },
];

const KarrierePage = () => {
  return (
    <div className="bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gray-100 h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <CachedImage
          src={karriereImage1}
          alt="Karriere"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text + Button */}
        <div className="relative z-10 text-left text-primary-500 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 md:mb-8 drop-shadow-lg">
            Karriere
          </h1>
          <a
            href="/karriere/bewerben"
            className="font-mono text-white bg-primary hover:bg-transparent
             hover:text-primary-500 px-4 py-5 rounded-md text-lg
             transition shadow-lg hover:shadow-xl hover:border-2 hover:border-primary-500"
          >
           Werde ein Teil unseres Teams!
          </a>
        </div>
      </section>

      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="py-12 xl:py-24 px-6 lg:px-12 xl:px-32 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-sour text-secondary text-xl font-medium mb-4">
            EIN TEAM VON EXPERTEN
          </h2>
          <h1 className="font-sour text-primary/90 text-3xl lg:text-4xl font-bold mb-16">
            Starte Deine Karriere bei Sernitas
          </h1>

          <div className="max-w-full mx-auto flex flex-col items-center gap-10 text-primary/90 text-justify space-y-16">
            <div className="w-full">
              <h2 className="font-sour text-3xl font-bold mt-12 mb-6 text-center">
                Unsere Arbeitsweise
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                In unserem Unternehmen stehen unsere Kund:innen und
                Mitarbeiter:innen im Mittelpunkt. Ganz gleich, welchen Beruf Sie
                ausüben, ohne unsere Mitarbeiter:innen können wir den hohen
                Qualitätsstandard unserer Unternehmen nicht gewährleisten.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Das Unternehmen Sernitas GmbH benötigt stets engagierte und gut
                ausgebildete Teamkolleg:innen. Wir wissen, dass hohe
                Qualitätsleistungen und kompetentes Personal die Grundlage für
                Erfolg sind. Dieser Grundsatz ist uns wichtig und ein Anliegen.
                Wenn Du genauso denkst und dich angesprochen fühlst und in einer
                freundlichen, internationalen Atmosphäre arbeiten möchtest,
                freuen wir uns auf Deine Bewerbung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOB POSTS SECTION ================= */}
      <section className="py-24 px-6 lg:px-12 xl:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sour text-primary/90 text-4xl font-bold text-center mb-12">
            Offene Stellenangebote
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center text-center">
            {jobPosts.map((job, index) => (
              <a
                key={index}
                href="/karriere/bewerben"
                className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer"
              >
                <h3 className="text-secondary text-xl font-bold mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{job.subtitle}</p>
                <p className="text-primary/90 text-md flex items-center justify-center gap-2">
                  <i className="fas fa-phone"></i> {job.phone}
                </p>
                <p className="text-primary/90 text-md flex items-center justify-center gap-2">
                  <i className="fas fa-envelope"></i> {job.email}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLY BUTTON SECTION ================= */}
      <section className="py-24 px-6 lg:px-12 xl:px-32 text-center">
        <h2 className="font-sour text-primary/90 text-xl lg:text-2xl font-medium mb-16">
          Haben wir Dein Interesse geweckt? Dann bewirb dich gleich! Wir freuen
          uns dich kennenzulernen.
        </h2>
        <a
          href="/karriere/bewerben"
          className="bg-primary/90 text-white px-6 py-3 rounded-2xl text-lg font-medium hover:bg-secondary/90 transition cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          HIER BEWERBEN
        </a>
      </section>
    </div>
  );
};

export default KarrierePage;
