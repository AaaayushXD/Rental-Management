import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  Home,
  PhoneCall,
  Settings,
  UserIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

//TODO: Logo needed. this is NOT the actual LOGO.
import Logo from "../assets/aayushlogo.png";

import { UserNavProp } from "../models/model";

const variants = {
  open: { width: "300px" },
  closed: { width: "150px" },
};

const navItems = [
  {
    name: "Home",
    url: "#",
    icon: <Home />,
  },
  {
    name: "Date",
    url: "#",
    icon: <CalendarDays />,
  },
  {
    name: "Rent",
    url: "#",
    icon: <BarChart3 />,
  },
  {
    name: "Contacts",
    url: "#",
    icon: <PhoneCall />,
  },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  return (
    <>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="min-h-[100dvh] bg-[var(--primary-color)] w-full flex flex-col justify-between items-center px-3 py-8 gap-8 md:!w-[300px] "
        style={{ zIndex: 10 }}
      >
        {/* Logo */}
        <div className="w-full h-[80px] bg-[var(--secondary-content)] px-4 py-2 rounded relative">
          <img src={Logo} alt="Logo" className="w-full max-h-full" />
          <ArrowRight
            className="absolute top-[30%] right-[-30px] bg-[var(--secondary-content)] md:hidden rounded-full h-[40px] w-[40px] cursor-pointer hover:text-[var(--primary-color)]"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </div>
        {/* Navigations */}
        <div className="flex flex-col flex-grow w-full gap-5 py-8">
          {navItems &&
            navItems.map((items, index) => {
              return (
                <a
                  href={items.url}
                  key={index}
                  onClick={() => setActiveNavIndex(index)}
                  className={
                    "flex p-3 rounded space-x-2 md:justify-start " +
                    (activeNavIndex === index
                      ? " bg-[var(--primary-content)] text-[var(--primary-color)] "
                      : " bg-[var(--primary-light)] text-[var(--primary-content)] hover:bg-[var(--primary-dark)] ") +
                    (isOpen ? "" : "justify-center")
                  }
                >
                  {items.icon}
                  <span className={"md:block " + (isOpen ? "block" : "hidden")}>
                    {items.name}
                  </span>
                </a>
              );
            })}
        </div>
        {/* Setting */}
        <div className="flex items-center justify-center w-full">
          <Settings size={30} />
        </div>
      </motion.nav>
    </>
  );
};

export const UserNav: React.FC = () => {
  return (
    <div className="w-full h-[80px] flex justify-end items-center px-5 gap-5 flex-grow">
      <div className="flex gap-3">
        <div>
          <Bell />
        </div>
        <div>
          <UserIcon />
        </div>
      </div>
    </div>
  );
};
