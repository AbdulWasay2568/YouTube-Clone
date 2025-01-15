import React from "react";

const BottomNavbar = () => {
  const navItems = [
    { label: "Home", icon: "ci:home-alt-fill" },
    { label: "Trending", icon: "ic:round-local-fire-department" },
    { label: "Subscriptions", icon: "ic:baseline-subscriptions" },
    { label: "Library", icon: "ic:baseline-video-library" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 flex items-center justify-around bg-white z-10">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-1/4 h-full text-xs"
        >
          <button className="bg-white border-none focus:outline-none">
            <span
              className="iconify text-2xl"
              data-icon={item.icon}
              data-inline="false"
            ></span>
          </button>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavbar;
