import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@mantine/core";

function Login() {
  const [isEyeClick, setisEyeClick] = useState(false);
  const handleEyeClick = () => {
    setisEyeClick(!isEyeClick);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-96 bg-white rounded-xl p-6 shadow-md "
      >
        <h1 className="text-center text-2xl font-bold mb-4">WELCOME BACK</h1>
        <form className="space-y-6 w-full">
          <div className="flex gap-2 border-b  border-b-gray-400">
            <Mail className="text-gray-500" />
            <input
              className="focus:outline-none w-full "
              type="email"
              placeholder="Enter Email...."
            />
          </div>
          <div className="flex gap-2 border-b border-gray-400 relative">
            <Lock className="text-gray-500 top-2 left-2" />

            <div onClick={handleEyeClick} className="absolute right-2">
              {isEyeClick ? <Eye /> : <EyeOff />}
            </div>
            <input
              className="focus:outline-none w-full "
              type={isEyeClick ? "Text" : "password"}
              placeholder="Enter Password...."
            />
          </div>
          <Button variant="filled">login</Button>
        </form>
      </motion.div>
    </div>
  );
}
export default Login;
