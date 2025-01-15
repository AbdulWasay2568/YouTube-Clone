import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";


const Sidebar = () => {
  const categories = [
    { icon: <MdHomeFilled/>, name: 'Home', selected: true },
    { icon: <SiYoutubeshorts/>, name: 'Shorts' },
    { icon: <MdOutlineSubscriptions/>, name: 'Subscriptions' },
  ];

  const libraryCategories = [
    { icon: <MdHomeFilled/>, name: 'Your Channel' },
    { icon: <GoHistory/>, name: 'History' },
    { icon: <MdOutlinePlaylistPlay/>, name: 'Playlists' },
    { icon: <GoVideo/>, name: 'Your videos' },
    { icon: <MdOutlineWatchLater/>, name: 'Watch Later' },
    { icon: <AiOutlineLike/>, name: 'Liked videos' },
  ];

  const subscriptions = [
    { icon: <FaUserCircle/>, name: 'Channel 1' },
    { icon: <FaUserCircle/>, name: 'Channel 2' },
    { icon: <FaUserCircle/>, name: 'Channel 3' },
    { icon: <FaUserCircle/>, name: 'Channel 4' },
    { icon: <FaUserCircle/>, name: 'Channel 5' },
    { icon: <FaUserCircle/>, name: 'Channel 6' },

    // { icon: 'ic:outline-expand-more', name: 'Show 40 more' },
  ];

  const youtubeExtras = [
    { icon: <FaYoutube/>, name: 'YouTube Premium' },
    { icon: <SiYoutubestudio/>, name: 'YouTube Studio' },
    { icon: <SiYoutubemusic/>, name: 'YouTube Music' },
    { icon: <SiYoutubekids/>, name: 'YouTube Kids' }
  ];

  const youtubeExplore = [
    { icon: 'ant-design:youtube-filled', name: 'YouTube Premium' },
    { icon: 'ic:sharp-local-movies', name: 'Movies' },
    { icon: 'simple-icons:youtubegaming', name: 'Gaming' },
    { icon: 'fluent:live-24-filled', name: 'Live' },
    { icon: 'icon-park-outline:hanger-two', name: 'Fashion & Beauty' },
    { icon: 'ant-design:bulb-filled', name: 'Learning' },
    { icon: 'icomoon-free:trophy', name: 'Sports' },
  ];

  const bottomLinks = [
    'About', 'Press', 'Copyright', 'Contact us', 'Creator',
    'Advertise', 'Developers', 'Terms', 'Privacy', 'Policy & Safety',
    'How YouTube works', 'Test new features',
  ];

  return (

    // <div className="lg:w-1/4 h-full w-52 bg-white overflow-y-hidden hover:overflow-y-auto">

<div className="fixed top-14 left-0 h-full w-52 bg-white overflow-y-hidden hover:overflow-y-auto shadow-md">
  {/* Categories */}
  <div className="flex flex-col py-4">
    {categories.map((cat, index) => (
      <div
        key={index}
        className={`flex items-center px-6 py-2 h-12 text-sm cursor-pointer transition-all ${
          cat.selected ? 'bg-gray-200 font-bold text-black' : 'hover:bg-gray-100 hover:rounded-md'
        } `}
      >
        <span className={`mr-3 text-xl ${cat.selected ? 'text-red-500' : 'text-gray-600'}`}>
          {cat.icon}
        </span>
        <span>{cat.name}</span>
      </div>
    ))}
  </div>

  <hr className="border-gray-300" />

  {/* Library */}
  <div className="flex flex-col py-4">
    <span className="px-6 py-2 text-sm font-bold text-gray-800">Library</span>
    {libraryCategories.map((cat, index) => (
      <div
        key={index}
        className="flex items-center px-6 py-2 h-12 text-sm cursor-pointer hover:bg-gray-100 rounded-md transition-all"
      >
        <span className="mr-3 text-lg text-gray-600">{cat.icon}</span>
        <span>{cat.name}</span>
      </div>
    ))}
  </div>

  <hr className="border-gray-300" />

  {/* Subscriptions */}
  <div className="flex flex-col py-4">
    <span className="px-6 py-2 text-sm font-bold text-gray-800">Subscriptions</span>
    {subscriptions.map((sub, index) => (
      <div
        key={index}
        className="flex items-center px-6 py-2 h-12 text-sm cursor-pointer hover:bg-gray-100 rounded-md transition-all"
      >
        <span className="mr-3 text-lg text-gray-600">{sub.icon}</span>
        <span>{sub.name}</span>
      </div>
    ))}
  </div>

  <hr className="border-gray-300" />

  {/* YouTube Extras */}
  <div className="flex flex-col py-4">
    <span className="px-6 py-2 text-sm font-bold text-gray-800">More from YouTube</span>
    {youtubeExtras.map((extra, index) => (
      <div
        key={index}
        className="flex items-center px-6 py-2 h-12 text-sm cursor-pointer hover:bg-gray-100 rounded-md transition-all"
      >
        <span className="mr-3 text-gray-600">{extra.icon}</span>
        <span>{extra.name}</span>
      </div>
    ))}
  </div>

  <hr className="border-gray-300" />

  {/* Bottom Links */}
  <div className="px-6 py-4 bg-gray-50">
    {bottomLinks.map((link, index) => (
      <a
        key={index}
        href="/"
        className="text-xs text-gray-500 hover:underline mr-3 block"
      >
        {link}
      </a>
    ))}
    <span className="text-xs text-gray-500 block mt-2">© 2025 Google LLC</span>
  </div>
</div>

  );
};

export default Sidebar;
