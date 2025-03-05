import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from '@mantine/core';
import { CircleCheckBig } from 'lucide-react'
import { Slide } from "react-awesome-reveal";

// import { useDispatch } from 'react-redux';


function Preferences() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  // const dispatch = useDispatch()
  const categories = [
    "Technology",
    "Sports",
    "Politics",
    "Entertainment",
    "Health",
    "Business",
  ];

  console.log(selectedCategory);

  const toggleCategory = (category) => {
    setSelectedCategory(
      selectedCategory.includes(category)
        ? selectedCategory.filter((c) => c !== category)
        : [...selectedCategory, category]
    );
  };

  return (
    <Slide>
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-gray-800 font-semibold text-2xl">
          Select Interests
        </h1>
      </div>
      <div className="grid p-6 mt-6 grid-cols-2 sm:grid-cols-3 gap-6">
        {categories.map((category,index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={index}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleCategory(category)}
            className={`shadow-md rounded-xl flex justify-center items-center gap-4 text-center px-5 py-3 ${selectedCategory.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {category}<span> {selectedCategory.includes(category) && <CircleCheckBig /> } </span>
          </motion.div>
        ))}
      </div>
      <Button>Save Preferences</Button>
    </div>
    </Slide>
  );
}
export default Preferences;
