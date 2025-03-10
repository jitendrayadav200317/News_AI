import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice";
function Login() {
  const [isEyeClick, setisEyeClick] = useState(false);
  const dispatch = useDispatch();

  const LoginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z.string().min(1, { message: "password is requid" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const handleEyeClick = () => {
    setisEyeClick(!isEyeClick);
  };

  const onSubmit = (data) => {
    dispatch(login(data));
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
        <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 border-b  border-b-gray-400">
            <Mail className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full "
              type="email"
              placeholder="Enter Email...."
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message} </p>
          )}
          <div className="flex gap-2 border-b border-gray-400 relative">
            <Lock className="text-gray-500 " size={20} />

            <div onClick={handleEyeClick} className="absolute right-2">
              {isEyeClick ? <Eye /> : <EyeOff />}
            </div>
            <input
              className="focus:outline-none w-full "
              type={isEyeClick ? "Text" : "password"}
              placeholder="Enter Password...."
              {...register("password")}
            />
          </div>

          <Button type="submit" fullWidth>
            login
          </Button>

          <p className="text-center text-gray-800">
            Dont't have account?
            <Link to="/Register" className="text-sky-500">
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
export default Login;
