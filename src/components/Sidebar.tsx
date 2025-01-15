import React from 'react';

const Sidebar = () => {
  const categories = [
    { icon: 'ci:home-alt-fill', name: 'Home', selected: true },
    { icon: 'ic:baseline-explore', name: 'Explore' },
    { icon: 'ic:baseline-subscriptions', name: 'Subscriptions' },
  ];

  const libraryCategories = [
    { icon: 'ic:baseline-video-library', name: 'Library' },
    { icon: 'ic:baseline-history', name: 'History' },
    { icon: 'ant-design:play-square-outlined', name: 'Your videos' },
    { icon: 'ic:baseline-watch-later', name: 'Watch later' },
    { icon: 'bx:bxs-like', name: 'Liked videos' },
    { icon: 'ic:outline-expand-more', name: 'Show more' },
  ];

  const subscriptions = [
    { icon: 'carbon:user-avatar-filled', name: 'Channel 1' },
    { icon: 'carbon:user-avatar-filled', name: 'Channel 2' },
    { icon: 'carbon:user-avatar-filled', name: 'Channel 3' },
    { icon: 'carbon:user-avatar-filled', name: 'Channel 4' },
    { icon: 'carbon:user-avatar-filled', name: 'Channel 5' },
    { icon: 'carbon:user-avatar-filled', name: 'Channel 6' },
    { icon: 'carbon:user-avatar-filled', name: 'Channel 7' },
    { icon: 'ic:outline-expand-more', name: 'Show 40 more' },
  ];

  const youtubeExtras = [
    { icon: 'ant-design:youtube-filled', name: 'YouTube Premium' },
    { icon: 'ic:sharp-local-movies', name: 'Movies' },
    { icon: 'simple-icons:youtubegaming', name: 'Gaming' },
    { icon: 'fluent:live-24-filled', name: 'Live' },
    { icon: 'icon-park-outline:hanger-two', name: 'Fashion & Beauty' },
    { icon: 'ant-design:bulb-filled', name: 'Learning' },
    { icon: 'icomoon-free:trophy', name: 'Sports' },
  ];

  const bottomLinks = [
    'About', 'Press', 'Copyright', 'Contact us', 'Creators',
    'Advertise', 'Developers', 'Terms', 'Privacy', 'Policy & Safety',
    'How YouTube works', 'Test new features',
  ];

  return (
    <div className="fixed top-14 left-0 h-full w-60 bg-white overflow-y-hidden hover:overflow-y-auto">
      {/* Categories */}
      <div className="flex flex-col py-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex items-center px-6 h-10 text-sm font-roboto ${
              cat.selected ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'
            }`}
          >
            <span className={`iconify mr-3 ${cat.selected ? 'text-red-500' : ''}`} data-icon={cat.icon}></span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Library */}
      <div className="flex flex-col py-3">
        {libraryCategories.map((cat, index) => (
          <div
            key={index}
            className="flex items-center px-6 h-10 text-sm font-roboto hover:bg-gray-100"
          >
            <span className="iconify mr-3" data-icon={cat.icon}></span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Subscriptions */}
      <div className="flex flex-col py-3">
        <span className="px-6 py-2 text-sm font-bold text-gray-600">SUBSCRIPTIONS</span>
        {subscriptions.map((sub, index) => (
          <div
            key={index}
            className="flex items-center px-6 h-10 text-sm font-roboto hover:bg-gray-100"
          >
            <span className="iconify mr-3" data-icon={sub.icon}></span>
            <span>{sub.name}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* YouTube Extras */}
      <div className="flex flex-col py-3">
        <span className="px-6 py-2 text-sm font-bold text-gray-600">MORE FROM YOUTUBE</span>
        {youtubeExtras.map((extra, index) => (
          <div
            key={index}
            className="flex items-center px-6 h-10 text-sm font-roboto hover:bg-gray-100"
          >
            <span className="iconify mr-3" data-icon={extra.icon}></span>
            <span>{extra.name}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Bottom Links */}
      <div className="px-6 py-4">
        {bottomLinks.map((link, index) => (
          <a
            key={index}
            href="/"
            className="text-sm font-bold text-gray-600 hover:underline mr-3"
          >
            {link}
          </a>
        ))}
        <br />
        <span className="text-sm text-gray-600">© 2021 Google LLC</span>
      </div>
    </div>
  );
};

export default Sidebar;
