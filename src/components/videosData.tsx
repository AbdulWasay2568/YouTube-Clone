const videosData = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 5,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 6,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 7,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 8,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 9,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  {
    id: 10,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
];

const Videos = () => {
  return (
    <div className="ml-52 mt-16 p-4 bg-white">
    {/* // <div className=" lg:w-3/4 p-4"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videosData.map((video) => (
          <div key={video.id} className="bg-white  overflow-hidden cursor-pointer">
            <div className="relative ">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-44 rounded-lg"
              />
            </div>
            <div className="flex p-4">
              <div className="flex-shrink-0">
                <span
                  className="iconify text-gray-500 text-2xl"
                  data-icon="carbon:user-avatar-filled"
                  data-inline="false"
                ></span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">{video.title}</h3>
                <a href="#" className="text-gray-500 font-medium text-xs">
                  {video.channel}
                </a>
                <div className="text-gray-500 font-medium text-xs">
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
