import { FaPhoneAlt, FaCar, FaFileAlt, FaHome } from "react-icons/fa";

const StepsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 xl:px-44">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-sour text-primary-500 text-2xl md:text-3xl font-bold mb-2">
         SIE BRAUCHEN EINEN PFLEGEDIENST?
        </h2>
        <p className="text-secondary font-ephesis text-xl tracking-wide font-bold mb-8">
          So einfach geht’s
        </p>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">

          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-9 md:w-12 h-9 md:h-12 bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center mb-4">
              <FaPhoneAlt className="text-lg md:text-xl" aria-hidden="true" />
            </div>
            <div className="text-center min-h-[60px]">
              <p className="font-sour text-primary/90 text-xs">
                Rufen Sie uns an: <br />
                <span className="font-sour font-bold text-xs">0234 / 966 46 480</span>
              </p>
            </div>
          </div>

          {/* Arrow 1 */}
          {/* Desktop: horizontal */}
          <div className="hidden lg:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-20 h-10 text-primary/90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M0 25 Q50 50, 100 25" />
            </svg>
            <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          {/* Mobile: vertical */}
          <div className="block lg:hidden relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 100"
              className="w-7 h-14 text-primary/90 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {/* <path d="M25 0 Q50 50, 25 100" /> */}
              <path d="M25 0 L25 100" />
            </svg>
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90 rotate-90"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-9 md:w-12 h-9 md:h-12 bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center mb-4">
              <FaCar className="text-lg md:text-xl" aria-hidden="true" />
            </div>
            <div className="text-center min-h-[60px]">
              <p className="font-sour text-primary/90 text-xs">
                Wir kommen
                <br />
                bei Ihnen vorbei
              </p>
            </div>
          </div>

          {/* Arrow 2 */}
          {/* Desktop: horizontal */}
          <div className="hidden lg:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-20 h-10 text-primary/90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M0 25 Q50 50, 100 25" />
            </svg>
            <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          {/* Mobile: vertical */}
          <div className="block lg:hidden relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 100"
              className="w-7 h-14 text-primary/90 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M25 0 L25 100" />
            </svg>
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90 rotate-90"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-9 md:w-12 h-9 md:h-12 bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center mb-4">
              <FaFileAlt className="text-lg md:text-xl" aria-hidden="true" />
            </div>
            <div className="text-center min-h-[60px]">
              <p className="font-sour text-primary/90 text-xs">
                Sie bekommen <br />
                ein Angebot
              </p>
            </div>
          </div>

          {/* Arrow 3 */}
          {/* Desktop: horizontal */}
          <div className="hidden lg:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-20 h-10 text-primary/90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M0 25 Q50 50, 100 25" />
            </svg>
            <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          {/* Mobile: vertical */}
          <div className="block lg:hidden relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 100"
              className="w-7 h-14 text-primary/90 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
               <path d="M25 0 L25 100" />
            </svg>
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90 rotate-90"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-9 md:w-12 h-9 md:h-12 bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center mb-4">
              <FaHome className="text-lg md:text-xl" aria-hidden="true" />
            </div>
            <div className="text-center min-h-[60px]">
              <p className="font-sour text-primary/90 text-xs">
                Ihr Pflegedienst kommt <br />
                schon am nächsten Tag!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      {/* <hr className="my-8 border-t-[1px] border-primary-500 mt-20" /> */}
      {/* <hr className="my-24 border-t-2 border-x-primary-500" /> */}
    </section>
  );
};

export default StepsSection;
