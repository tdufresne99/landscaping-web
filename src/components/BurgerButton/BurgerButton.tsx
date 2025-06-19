'use client';
import { SlMenu } from "react-icons/sl";
import { BsXLg } from "react-icons/bs";
import { AnimatePresence, motion } from 'framer-motion';

interface BurgerButtonProps {
  open: boolean;
  className?: string;
  toggle: () => void;
}

export default function BurgerButton({ open, className = "", toggle }: BurgerButtonProps) {
  return (
    <button onClick={toggle} className={`p-2 text-primary text-3xl fixed top-10 right-10 z-50 ${className}`}>
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <BsXLg />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.1 }}
          >
            <SlMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
