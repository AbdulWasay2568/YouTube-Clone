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

      {/* Content Section */}
      <div className="flex-row flex-1 overflow-hidden">
        <Sidebar  />
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Navbar />
          <VideosData />
        </div>
      </div>

    </div>
  );
};



