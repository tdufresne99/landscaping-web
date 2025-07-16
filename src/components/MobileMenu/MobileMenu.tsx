"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BurgerButton from "@/components/BurgerButton/BurgerButton";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";

const defaultButtonPosition = "mr-10";
const openButtonPosition = "fixed top-9 right-10 z-50";

interface MobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(defaultButtonPosition);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={`${className}`}>
      <BurgerButton
        className={buttonPosition}
        open={isOpen}
        toggle={() => {
          setIsOpen(!isOpen);
        }}
      />

      <AnimatePresence
        onExitComplete={() => {
          setButtonPosition(defaultButtonPosition);
        }}
      >
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ y: "-40%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-40%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-b from-background/0 to-background backdrop-blur-sm z-40"
            onAnimationStart={() => {
              setButtonPosition(openButtonPosition);
            }}
          >
            <div className="mt-8 flex flex-wrap flex-col items-center justify-center z-40" >
              <Logo className="max-w-48" />
              <Navigation
                className=""
                listClassName="flex-col"
                isAnimated={false}
                listItemClassName="w-full mt-8 text-center text-dark text-2xl hover:text-accent transition-colors duration-150"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
