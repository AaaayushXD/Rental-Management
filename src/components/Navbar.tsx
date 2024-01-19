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
  open: { width: "500px" },
  closed: { width: "20%" },
};

const navItems = [
  {
    name: "Home",
    url: "#",
    icon: <Home />,
  },
  {
    name: "Date",
    url: "/date",
    icon: <CalendarDays />,
  },
  {
    name: "Rent",
    url: "/rent",
    icon: <BarChart3 />,
  },
  {
    name: "Contacts",
    url: "/contacts",
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
        className="min-h-[100dvh] h-full w-[20%] max-w-[250px] bg-[var(--primary-color)] px-5 py-8 relative min-w-[100px] transition-all duration-500 ease-in-out flex-grow "
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col items-center justify-between flex-grow w-full gap-10">
          <div className=" bg-[var(--primary-content)] rounded-full p-3">
            <img src={Logo} alt="Logo" className="w-[80px] h-[80px] p-4" />
          </div>
          <div className="grid w-full gap-4 py-8">
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    "p-2 rounded cursor-pointer" +
                    (activeNavIndex === index
                      ? " bg-[var(--primary-content)] text-[var(--primary-color)] "
                      : " bg-[var(--primary-light)] text-[var(--primary-content)]")
                  }
                  onClick={() => setActiveNavIndex(index)}
                >
                  <a
                    href={item.url}
                    className={
                      "flex w-full space-x-3 p-2 items-center transition-all duration-300 ease-in-out lg:justify-start " +
                      (isOpen ? " " : " justify-center")
                    }
                  >
                    <p>{item.icon}</p>
                    <p
                      className={
                        "tracking-wide lg:block " +
                        (isOpen ? " block" : " hidden")
                      }
                    >
                      {item.name}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="cursor-pointer text-[var(--copy)] hover:text-[var(--primary-content)] transition-all duration-500 ease-in-out">
            <Settings size={30} />
          </div>
        </div>
        <div
          className="absolute top-[30px] right-[-15px] bg-[var(--secondary-content)] rounded-full p-2 cursor-pointer lg:hidden transition-all ease-in-out duration-300 delay-300"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <ArrowRight />
        </div>
      </motion.nav>
    </>
  );
};

export const UserNav: React.FC<UserNavProp> = (props) => {
  return (
    <div className="w-full h-[80px] flex justify-between items-center px-5 gap-5 flex-grow">
      <div>
        <h1 className="text-xl">
          Hello,{" "}
          <span className="font-bold text-[var(--primary-color)] tracking-wider">
            {props.name}
          </span>
        </h1>
      </div>
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
