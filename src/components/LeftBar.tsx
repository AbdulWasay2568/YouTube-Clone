import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


const LeftBar = () => {
  const categories = [
    { icon: <MdHomeFilled/>, name: 'Home', selected: true },
    { icon: <SiYoutubeshorts/>, name: 'Shorts' },
    { icon: <MdOutlineSubscriptions/>, name: 'Subscriptions' },
    { icon: <FaUserCircle/>, name: 'You' },
];

return (
    <div className="flex flex-col items-center mt-2 fixed left-0 h-full w-9 sm:w-14 lg:w-20 bg-white overflow-y-hidden hover:overflow-y-auto shadow-md">
        <div className="flex flex-col gap-1">
            {categories.map((cat, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-center items-center h-8 sm:h-14 lg:h-20 gap-1 cursor-pointer transition-all ${
                    cat.selected ? 'bg-gray-200 font-bold text-black' : 'hover:bg-gray-100 hover:rounded-md'
                    } `}
                >
                    <span className={`text-[10px] sm:text-lg lg:text-2xl ${cat.selected ? 'text-red-500' : 'text-gray-600'}`}>{cat.icon}</span>
                    <span className="text-[5px] sm:text-[8px] lg:text-[10px] text-black">{cat.name}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default LeftBar;
