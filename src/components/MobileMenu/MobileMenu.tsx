"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BurgerButton from "@/components/BurgerButton/BurgerButton";
import Logo from "@/components/Logo/Logo";

const defaultButtonPosition = "mr-10";
const openButtonPosition = "fixed top-9 right-10 z-50";

interface MobileMenuProps {
  menuItems: { name: string; url: string }[];
}

export default function MobileMenu({ menuItems }: MobileMenuProps) {
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
    <div>
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
            className="fixed inset-0 bg-gradient-to-b from-background/0 to-background backdrop-blur-sm flex flex-col items-center justify-center z-40"
            onAnimationStart={() => {
              setButtonPosition(openButtonPosition);
            }}
          >
            <Logo className="fixed top-16 max-w-48" />
            <nav className="flex flex-col justify-items-center text-dark text-2xl">
              {menuItems !== null &&
                menuItems?.length > 0 &&
                menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="block mt-8 text-center text-dark hover:text-accent transition-colors duration-150"
                  >
                    {item.name}
                  </a>
                ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
