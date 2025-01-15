import React from "react";

const videosData = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    channel: "Channel 1",
    views: "10M views",
    time: "3 Months Ago",
  },
  // Add more video objects as needed
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
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videosData.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
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
                <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
                <a href="#" className="text-blue-500 hover:underline text-sm">
                  {video.channel}
                </a>
                <div className="text-gray-500 text-sm">
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
