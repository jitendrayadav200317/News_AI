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
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create an Account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex items-center pb-2 border-b border-gray-300">
            <User className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent focus:outline-none border-none"
              {...register('name')}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          <div className="relative flex items-center pb-2 border-b border-gray-300">
            <Mail className="text-gray-400 mr-2" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              {...register('email')}
              className="w-full bg-transparent focus:outline-none border-none"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <div className="relative flex items-center pb-2 border-b border-gray-300">
            <Lock className="text-gray-400 mr-2" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register('password')}
              className="w-full bg-transparent focus:outline-none border-none"
            />
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
          <div className="relative flex items-center pb-2 border-b border-gray-300">
            <Lock className="text-gray-400 mr-2" size={20} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
              className="w-full bg-transparent focus:outline-none border-none"
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
            {loading ? <Loader size={16} color="white" /> : 'Signup'}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 font-medium">
            Sign In
          </a>
        </p>
      </motion.div>
    </div>
  );
};
export default Register;
