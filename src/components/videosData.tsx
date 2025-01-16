import { FaUserCircle } from "react-icons/fa";

const videosData = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelIcon: <FaUserCircle/>,
    channelName: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelIcon: <FaUserCircle/>,
    channelName: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelIcon: <FaUserCircle/>,
    channelName: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 5,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 6,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 7,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 8,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 9,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 10,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 11,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 12,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channelName: "Channel 1",
    channelIcon: <FaUserCircle/>,
    views: "10M views",
    time: "3 Months Ago",
  },
];

const Videos = () => {
  return (
    <div className="ml-52 mt-12 p-4 h-min-screen bg-white">
    {/* // <div className=" lg:w-3/4 p-4"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videosData.map((video) => (
          <div key={video.id} className="bg-white cursor-pointer">
            <div>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-44 rounded-lg"
              />
            </div>
            <div className="flex p-4">
              <div className="flex-shrink-0">
                <span
                  className="text-gray-500 text-2xl"
                >{video.channelIcon}</span>
              </div>
              <div className="ml-4">
                <h3 className="w-48 h-10 text-sm font-medium text-gray-900 line-clamp-2">{video.title}</h3>
                <a href="#" className="text-gray-500 font-medium text-xs">
                  {video.channelName}
                </a>
                <div className="text-gray-500 font-medium text-[10px]">
                  {video.views} • {video.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
