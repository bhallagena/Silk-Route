import Link from 'next/link';
import { motion } from 'framer-motion';

const slide = {
  initial: { x: 80 },

  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),

  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },

  closed: { scale: 0, transition: { duration: 0.4 } },
};

interface NavProps {
    isActive: boolean;
    setSelectedIndicator: (isOpen: string) => void;
    data: Data
    selectedIndicator: string
    setIsOpen: (isOpen: boolean) => void;
  }
  interface Data {
    index: number;
    title: string;
    href: string;
}

export default function Index({data, isActive, setSelectedIndicator, selectedIndicator, setIsOpen}: NavProps) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={`relative flex items-center ${
            selectedIndicator == href? 'text-white':'text-gray-400' 
        }`} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
        onClick={() => setIsOpen(false)}
      >
        
        <Link href={href} className='block px-4 py-2 text-gray-400  hover:text-white transition-colors duration-200'>{title}</Link>
      </motion.div>
    )
}