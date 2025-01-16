import { useState } from 'react'

import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Categories from "../components/Categories";
import LeftBarLarge from "../components/LeftBarLarge";
import VideosData from "../components/videosData";
import { IoMdMenu } from "react-icons/io";


export default function Home () {
  const [selected,setSelected] = useState(false);

  const menuFunction = () => {
    {selected ? setSelected(false) : setSelected(true)};
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Header */}
      <div className="flex justify-center items-center  flex-row">
        <button 
        onClick={menuFunction}
        className="flex justify-center items-center lg:ml-6 text-sm lg:text-2xl h-8 w-8 text-black cursor-pointer hover:bg-gray-300 rounded-full">
          <IoMdMenu/>
        </button>
        <Header />
      </div>
      
      {/* Content Section */}
      <div className="flex-row flex-1 overflow-hidden">
        {selected ? (
          <>
            <LeftBarLarge/> 
            <div className="ml-52 flex-1 flex flex-col overflow-y-auto">
              <Categories />
              <VideosData />
            </div>
          </>
            ):( 
          <>
            <LeftBar/>
            <div className="ml-20 flex-1 flex flex-col overflow-y-auto">
              <Categories />
              <VideosData />
            </div>
          </>
        )}
      </div>

    </div>
  );
};



