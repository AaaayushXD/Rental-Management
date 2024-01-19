import { ArrowRight, Home, PhoneCall, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/aayushlogo.png";

const variants = {
  open: { width: "40%" },
  closed: { width: "20%" },
};

const navItems = [
  {
    name: "Home",
    url: "#",
    icon: <Home />,
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
        className="h-[100dvh] w-[20%] max-w-[250px] bg-[var(--primary-color)] px-5 py-8 relative min-w-[100px] transition-all duration-500 ease-in-out "
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col items-center justify-between w-full h-full ">
          <div className=" bg-[var(--primary-content)] rounded-full p-3">
            <img src={Logo} alt="Logo" className="w-[80px] h-[80px] p-4" />
          </div>
          <div className="flex flex-col items-center flex-grow w-full gap-4 py-8 sm:items-stretch">
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
                    className={
                      "flex w-full gap-2 p-2 items-center transition-all duration-300 ease-in-out " +
                      (isOpen ? " " : " justify-center")
                    }
                  >
                    <p>{item.icon}</p>
                    <p
                      className={" md:block " + (isOpen ? " block" : " hidden")}
                    >
                      {item.name}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
          <div>
            <Settings size={40} />
          </div>
        </div>
        <div
          className="absolute top-[30px] right-[-15px] bg-[var(--secondary-content)] rounded-full p-2 cursor-pointer md:hidden transition-all ease-in-out duration-300 delay-300"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <ArrowRight />
        </div>
      </motion.nav>
    </>
  );
};
