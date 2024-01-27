import {
  BarChart3,
  Bell,
  CalendarDays,
  Home,
  Menu,
  PhoneCall,
  Settings,
  UserIcon,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

//TODO: Logo needed. this is NOT the actual LOGO.
import Logo from "../assets/aayushlogo.png";

// import { UserNavProp } from "../models/model";

const variants = {
  open: { opacity: "100%" },
  closed: { opacity: "0%" },
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

interface NavbarProps {
  activeNav: boolean;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  return (
    <>
      <div
        className={
          "w-full h-full fixed top-[80px] lg:hidden " +
          (props.activeNav ? " " : " hidden")
        }
      >
        <motion.nav
          animate={props.activeNav ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring", duration: 1 }}
          className={
            "bg-[var(--primary-color)] w-full flex flex-col justify-between items-center px-3 py-8 gap-8 transition-opacity ease-in-out duration-300 delay-100 selection:bg-[var(--secondary-color)]"
          }
        >
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
                      "flex p-4 rounded space-x-2 md:justify-start " +
                      (activeNavIndex === index
                        ? " bg-[var(--primary-content)] text-[var(--primary-color)] "
                        : " bg-[var(--primary-light)] text-[var(--primary-content)] hover:bg-[var(--primary-dark)] ")
                    }
                  >
                    {items.icon}
                    <span className={"md:block "}>{items.name}</span>
                  </a>
                );
              })}
          </div>
          {/* Setting */}
          <div className="flex items-center justify-center w-full hover:text-[var(--copy)] cursor-pointer">
            <Settings size={30} />
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export const UserNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <DesktopNavBar />
      <div
        className={
          "w-full max-h-[80px] fixed top-0 left-0 transition-all ease-in-out duration-500 delay-100 select-none  " +
          (navBg ? " bg-[var(--foreground)]" : " ")
        }
      >
        <div className="w-full h-[80px] flex justify-between items-center px-5 gap-5 py-3 lg:justify-end">
          <div
            className="transition duration-300 ease-in-out delay-100 cursor-pointer lg:hidden"
            onClick={() => setActiveNav((activeNav) => !activeNav)}
          >
            {activeNav ? (
              <X
                size={30}
                className="text-[var(--secondary-dark)] hover:text-[var(--secondary-color)]"
              />
            ) : (
              <Menu
                size={30}
                className="text-[var(--primary-dark)] hover:text-[var(--primary-color)]"
              />
            )}
          </div>
          <div className="lg:hidden">
            <img src={Logo} alt="Logo" className="max-h-[60px] p-2" />
          </div>
          <div className="flex items-center gap-3 ">
            <div>
              <Bell size={20} />
            </div>
            <div className="p-2 bg-blue-500 rounded-full">
              <UserIcon size={20} />
            </div>
          </div>
        </div>
      </div>
      <Navbar activeNav={activeNav} />
    </>
  );
};

const DesktopNavBar: React.FC = () => {
  const [activeNavIndex, setActiveNavIndex] = useState<number>(0);
  return (
    <div
      className="hidden lg:flex w-[300px] min-h-[100dvh] fixed top-0 left-0  bg-[var(--primary-color)] px-5 py-10 flex-col gap-8 justify-between items-center transition-all duration-500 ease-in-out selection:bg-[var(--secondary-color)]"
      style={{ zIndex: 50 }}
    >
      <div className="bg-[var(--secondary-content)] flex justify-center items-center">
        <img src={Logo} alt="Logo" className="max-h-[60px] p-2" />
      </div>
      <div className="flex flex-col flex-grow w-full gap-6 py-10 ">
        {navItems &&
          navItems.map((items, index) => {
            return (
              <a
                href={items.url}
                key={index}
                onClick={() => setActiveNavIndex(index)}
                className={
                  "flex p-4 rounded space-x-2 md:justify-start " +
                  (activeNavIndex === index
                    ? " bg-[var(--primary-content)] text-[var(--primary-color)] "
                    : " bg-[var(--primary-light)] text-[var(--primary-content)] hover:bg-[var(--primary-dark)] ")
                }
              >
                {items.icon}
                <span className={"md:block "}>{items.name}</span>
              </a>
            );
          })}
      </div>
      <div className="flex items-center justify-center w-full hover:text-[var(--copy)] cursor-pointer">
        <Settings size={30} />
      </div>
    </div>
  );
};
