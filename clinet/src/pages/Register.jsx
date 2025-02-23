import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff , UserRoundPen} from "lucide-react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

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
            <UserRoundPen  className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full "
              type="text"
              placeholder="Enter Your Name...."
            />
          </div>
          
          <div className="flex gap-2 border-b  border-b-gray-400">
            <Mail className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full "
              type="email"
              placeholder="Enter Email...."
            />
          </div>


          <div className="flex gap-2 border-b border-gray-400 relative">
            <Lock className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full "
              type={isEyeClick ? "Text" : "password"}
              placeholder="Enter  Password...."
            />
          </div>


          <div className="flex gap-2 border-b border-gray-400 relative">
            <Lock className="text-gray-500 " size={20} />

            <div onClick={handleEyeClick} className="absolute right-2">
              {isEyeClick ? <Eye /> : <EyeOff />}
            </div>
            <input
              className="focus:outline-none w-full "
              type={isEyeClick ? "Text" : "password"}
              placeholder="Enter Confirm Password...."
            />
          </div>

          <Button fullWidth>Register</Button>

          <p className="text-center text-gray-800">
            Dont't have account?<Link to="/login" className="text-sky-500">Login</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
export default Login;
