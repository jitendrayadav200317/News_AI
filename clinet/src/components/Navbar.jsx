import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { X, Menu } from "lucide-react";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const handleclick = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className="h-16 p-4 sticky top-0 z-50 bg-white backdrop-blur-md  opacity-80">
      <div className="flex mx-6 items-center justify-between ">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          NEWS AI
        </motion.h1>

        <ul className="hidden md:flex gap-4">
          {["Home", "Categories", "Challels", "About"].map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
              key={item}
              className="hover:text-gray-700"
            >
              <Link to={`/${item.toLocaleLowerCase()}`}> {item} </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-4 items-center justify-center">
          <Link to={"/Login"} className="hidden md:block">
            <Button variant="white" size="xs">
              Login
            </Button>
          </Link>
          <Link to={"/Register"} className="hidden md:block">
            {""}
            <Button variant="white" size="xs">
              Register
            </Button>
          </Link>

          <button onClick={handleclick} className="md:hidden ">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="">
          <ul className="md:hidden flex flex-col gap-4 h-screen items-center">
            {["Home", "Categories", "Challels", "About"].map((item) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
                key={item}
                className="hover:text-gray-700"
              >
                <Link to={`/${item.toLocaleLowerCase()}`}> {item} </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
