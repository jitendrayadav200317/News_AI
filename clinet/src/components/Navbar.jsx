import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Navbar() {
  return (
    <nav className="h-16">
      <div className="flex items-center justify-between mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          NEWS AI
        </motion.h1>

        <ul className="flex gap-2">
          {["Home", "Categories", "Challels", "About"].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLocaleLowerCase()}`}> {item} </Link>
            </li>
          ))}
        </ul>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
