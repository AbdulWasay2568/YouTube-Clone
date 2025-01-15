import React, { useState } from "react";

const Navbar = () => {
  const categories = [
    "All",
    "Music",
    "Wildlife",
    "Education",
    "Recently Uploaded",
    "Live",
    "Tamil",
    "T-Series",
    "Cricket",
    "Sports",
    "Eating",
    "Laughter",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="ml-52 fixed top-14  w-full h-14 flex items-center justify-start overflow-hidden bg-white">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`h-6 px-3 text-xs rounded-full whitespace-nowrap cursor-pointer 
            border border-gray-300 mx-3
            ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }
            ${index === 0 ? "ml-6" : ""}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
