import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import accordionData from "./data";
import SingleAccordion from "./SingleAccordion";

// Animation function for sliding up
const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay,
    },
  },
});

const AccordionSection = () => {
  const [activeQuestionId, setActiveQuestionId] = useState(null); // Track the active question
  const [showAll, setShowAll] = useState(false); //Tract the what the questions to show

  const handleToggle = (id) => {
    setActiveQuestionId((prevId) => (prevId === id ? null : id)); // Toggle the active question
  };

  return (
    <motion.section
      className="container mx-auto py-24 px-4 md:px-12 xl:px-44 space-y-12"
      initial="initial"
      animate="animate" // Trigger animation only once
    >
      {/* Header */}
      <motion.h2
        variants={slideUp(0.2)}
        initial="initial"
        animate="animate" // Trigger animation only once
        className="font-sour text-3xl xl:text-4xl font-bold text-center text-primary/90 -mb-10 md:-mb-6"
      >
        Fragen, die oft gestellt werden – Antworten, die helfen!
      </motion.h2>

      {/* Parent Wrapper for Questions and Answers */}
      <div className=" p-12 md:p-4">
        {/* Accordion Questions */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="initial"
          animate="animate" // Trigger animation only once
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* {accordionData.map((question, index) => (
            <motion.div
              key={question.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              animate="animate" // Trigger animation only once
            >
              <SingleAccordion
                {...question}
                isActive={activeQuestionId === question.id} // Pass active state
                onToggle={() => handleToggle(question.id)} // Handle toggle
              />
            </motion.div>
          ))} */}
          {/* Always show first 3 items */}
          {accordionData.slice(0, 3).map((question, index) => (
            <motion.div
              key={question.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              animate="animate"
            >
              <SingleAccordion
                {...question}
                isActive={activeQuestionId === question.id}
                onToggle={() => handleToggle(question.id)}
              />
            </motion.div>
          ))}

          {/* Show the rest only if showAll = true */}
          {showAll &&
            accordionData.slice(3).map((question, index) => (
              <motion.div
                key={question.id}
                variants={slideUp(index * 0.2)}
                initial="initial"
                animate="animate"
              >
                <SingleAccordion
                  {...question}
                  isActive={activeQuestionId === question.id}
                  onToggle={() => handleToggle(question.id)}
                />
              </motion.div>
            ))}

          {accordionData.length > 3 && (
            <div className="flex justify-center mt-1 w-full">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="w-full text-xl font-bold px-8 py-2 md:px-10 md:py-3 
                 bg-primary/90 text-white rounded-xl shadow-2xl
                 border border-primary/30 hover:bg-primary/80 hover:text-white 
                 transition duration-300 ease-out"
              >
                {showAll ? (
                  <FiChevronUp className="text-2xl mx-auto" />
                ) : (
                  <FiChevronDown className="text-2xl mx-auto" />
                )}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AccordionSection;
