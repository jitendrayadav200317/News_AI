import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, User } from "lucide-react";
import { Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import { SignUp } from "../redux/slice/authSlice";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const {register,handleSubmit,formState: { errors } } = useForm();

  console.log(loading);

  const onSubmit = (data) => {
    console.log(data);

    dispatch(SignUp(data));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white rounded-xl p-6 shadow-xl  "
      >
        <h1 className="text-center text-2xl font-bold mb-4">
          Create an Account
        </h1>

        <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 border-b  border-b-gray-400">
            <User className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full bg-transparent border-none"
              type="text"
              name="name"
              required
              placeholder="Full Name"
              {...register("name")}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          <div className="flex gap-2 border-b  border-b-gray-400">
            <Mail className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full bg-transparent border-none"
              type="email"
              name="email"
              required
              placeholder="Email Address"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <div className="flex gap-2 border-b border-gray-400 relative">
            <Lock className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full bg-transparent border-none"
              type= "password"
              placeholder="Password"
              required
              name="password"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}

          <div className="flex gap-2 border-b border-gray-400 relative">
            <Lock className="text-gray-500 " size={20} />
            <input
              className="focus:outline-none w-full bg-transparent border-none"
              type="password"
              placeholder="Confirm Password"
              name="Confirm Password"
              {...register("ConfirmPassword")}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

          <Button
            type="submit"
            fullWidth
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader size={16} color="white" /> : "Signup"}
          </Button>

          <p className="text-center text-gray-800">
            Dont't have account?{" "}
            <a href="/login" className="text-blue-500 font-medium">
              Sign In
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};
export default Register;
