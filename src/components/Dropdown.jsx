import { useState } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion'

const Dropdown = ({ id, children, items, className, type }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button type='button' className={`${className} inline-flex items-center justify-center w-full gap-2 text-sm font-medium bg-transparent text-slate-500`} id={`dropdown-${id}`} aria-haspopup='true' aria-expanded={isOpen ? 'true' : 'false'} onClick={toggleDropdown}>
          {children} {isOpen ? type === 'chevron' ? <FaChevronUp /> : <RiArrowUpSFill /> : type === 'chevron' ? <FaChevronDown /> : <RiArrowDownSFill />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            transition={{ duration: 0.2 }}
            className='absolute left-0 z-50 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby={`dropdown-${id}`}>
            <div className='py-1' role='none'>
              {items.map((item, index) => (
                <a key={index} href='#' className='block px-4 py-2 text-sm font-medium text-gray-700 duration-200 transtion-all ease hover:bg-blue-100 hover:text-blue-600' role='menuitem'>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown
