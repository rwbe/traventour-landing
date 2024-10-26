import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';

const Accordion = ({ faqs }) => {
  const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const accordionButtonClasses = classNames(
      'accordion-button flex items-center justify-between w-full p-4 font-semibold text-left transition-all duration-300 hover:bg-blue-50',
      {
        'bg-blue-50': isOpen,
      }
    );

    const accordionQuestionClasses = classNames(
      'accordion-question transition-all duration-300 ease',
      {
        'text-blue-600 text-sm': isOpen,
        'text-slate-900': !isOpen,
      }
    );

    const accordionIconClasses = classNames(
      'accordion-icon flex items-center justify-center aspect-square size-8 p-2 text-xl rounded-full transition-transform duration-300 ease border border-slate-300',
      {
        'transform -scale-y-90 bg-blue-600 text-white': isOpen,
      }
    );

    return (
      <div className="accordion-item">
        <button className={accordionButtonClasses} onClick={toggleAccordion}>
          <p className={accordionQuestionClasses}>{question}</p>
          <div className={accordionIconClasses}>
            <FaChevronDown />
          </div>
        </button>
        <div
          className={`accordion-answer py-4 px-4 overflow-hidden transition-max-height duration-300 ease ${
            isOpen ? 'flex bg-blue-50' : 'hidden'
          }`}
        >
          <p className="text-slate-900">{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="divide-y divide-slate-300 border border-slate-300">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
