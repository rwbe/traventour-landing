import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import faqs from '../data/faq.json';

const FAQSection = () => {
  // State to control which question is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle active question
  const toggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container my-16" id="faq">
      <div className="flex flex-col items-center justify-between mb-12 lg:flex-row">
        <div className="flex flex-col items-center gap-2 text-center lg:items-start">
          <span className="text-gray-500 font-semibold text-sm">PERGUNTAS FREQUENTES</span>
          <h2 className="text-3xl font-bold">Perguntas Comuns</h2>
        </div>
        <Link to="#" className="flex items-center gap-2 mt-4 font-semibold text-blue-600 lg:mt-0">
          Ver mais <FaChevronRight />
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            activeIndex={activeIndex}
            toggleActive={toggleActive}
          />
        ))}
      </div>
    </div>
  );  
};

// FAQItem component for each FAQ item
const FAQItem = ({ index, question, answer, activeIndex, toggleActive }) => {
  const isActive = activeIndex === index;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className={`flex justify-between items-center p-6 w-full focus:outline-none ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => toggleActive(index)}
      >
        <span className="font-semibold text-lg">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${isActive ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 bg-gray-100">
            <p className="text-gray-700">{answer}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FAQSection;
