import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { X, Menu ,Bell } from "lucide-react";
// import { useSelector } from "react-redux";
// import ProfileDropDown from "./ProfileDropDown";

function Navbar() {
  // const { authenticated } = useSelector((state) => state.auth);

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
              <Link
                className="text-md font-semibold tracking-wider"
                to={`/${item.toLocaleLowerCase()}`}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-4 items-center justify-center">
          {/* {authenticated && ( */}
            <div className="flex items-center gap-4">
              <button className="relative text-gray-600 hover:text-gray-800">
                <Bell size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </button>

              {/* <ProfileDropDown /> */}
            </div>
          {/* )} */}

          {/* {!authenticated && ( */}
            <div className="flex gap-6">
              <Link to="/Login" className="hidden md:block">
                <Button variant="white" size="xs">
                  Login
                </Button>
              </Link>
              <Link to="/Register" className="hidden md:block">
                {""}
                <Button variant="white" size="xs">
                  Register
                </Button>
              </Link>
            </div>
          {/* )} */}

          {/* Mobile Menu Button */}

          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleclick}
            className="md:hidden "
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white p-4 shadow-md rounded-lg mx-4 mt-2"
        >
          <ul className="space-y-4 text-center">
            {["Home", "Categories", "Challels", "About"].map((item) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
                key={item}
                className="hover:text-gray-700"
              >
                <Link
                  to={`/${item.toLocaleLowerCase()}`}
                  className="black hover:text-gray-700"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <li>
              <Link to="/login" className="block hover:text-gray-700">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="block hover:text-gray-700">
                Register
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
