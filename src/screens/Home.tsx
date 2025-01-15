import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideosData from "../components/videosData";



export default function Home () {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Header */}
      <Header />
      <Navbar />

      {/* Content Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {/* <Sidebar  /> */}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* <VideosData /> */}
        </div>
      </div>

    </div>
  );
};



