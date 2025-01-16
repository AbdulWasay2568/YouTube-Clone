import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { MdMic } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-8 sm:h-10 lg:h-14 sticky top-0 w-full z-50 shadow-sm">

      {/* Logo Section */}

        <div className="flex items-center justify-between ml-3 h-8 w-12 sm:w-16 sm:h-8 lg:h-14">
          <div className="text-sm lg:text-xl text-black cursor-pointer">
            <IoMdMenu/>
          </div>
          <img
            className="cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAwFBMVEX/////AAAoKCgAAAASEhIhISELCwsVFRUkJCTv7+/GxsYaGhpmZmY9PT0dHR3q6upZWVmqqqqIiIj/Z2eioqJOTk54eHhvb2/h4eGMjIz19fXV1dXCwsLNzc2wsLBUVFSAgID/5OT/VFT/9/f/oaH/Jib/gID/qKj/xMT/8fGbm5v/kJD/Njb/Rkb/ZWX/eno5OTn/ycn/Fhb/4OC4uLj/sLD/TU3/09P/lJT/QkL/g4P/MDAvLy//HR3/vb1FRUWaqQ/xAAAHCElEQVR4nO2baXfaOhCGDUK2iYmBJOxLyEKbkKXNbZamN23+/7+60oxsgzFgKsftOfd9Psk+QpZeS6OZkXEcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/wvXL1dPlzc3x+fPr7fz+T+Vdebz19e78/svN9+frl7OLv50hz+Yi8vXDA128PP4qeRu9ol6Kc/6vL8ghqtS+hchiHYZj/r025JUKpdJM62GovW4eplrAIPGGq2serWqoja1HW8OLi0kqVR+xe10Aiml1zNXfaGupJjk6UHDk2lEVr3SNDmzkqRSiRs68XSXQ3P1SANwc3WhIatpaln1StPEZuVoPkcNjYTusmjy1SxUF7KRqwt/nSaWklTuVrvsjvniq6/7n88eNtxAEbIaUpeDP7p2zmw1SRZPV48qGFB5yJOmn6sP7aOB4ohEkb0BXWTVK0uTK2tNvkVNkQmRp1SeuKrsv+3TE5bR3WKVy9LEbtfRxDtPnQblUXmhDW6Q+bY3wT93DzbXKEsTWxO77KK8+/F6ackd41vn79Hk3lqTH3FbgyDuM9vb4T49+Xs0+XfjWO9u82lyH7c10aMKZ4722BLToizFZDw+2Glu99GkPhmn7M5oPJ2Om3sPP5OsAJg5zhkHPa922j9UhakueSd0c9wRwnVdIY/MtGkedhTvFAX0dLHTSmvCNRa6uHin8rImw65qULiL+LnNnrqs1VxxWMgk2jzWYxUv57E286Qxcr7E0HhsbFkaIvLIvNqIR0Buv0u+y6kOCMKvaU2oRo1M9MyLfX2jSV0G1J6YmcceCOPbVH2Rz0vcysVWTZT7cr5blKS1tmd20zdtbQN9q1dLnFNf1FmTauzPkS2mqbWqSTXetmYkgBtr4k0PI5EFa0wLNcIdWGtyvUMTx3nYvLrWNKHeqSVDrkbYdfQrJDFcfpNhw16T6pv0XJ4oZLrUXCON1OphofYy7L+nyW4XZqk5PfKwxx4befm0PftfR80uDYOiIUtNfHcxOTLF+EVUg0l9IpN2bfiWQxPn4kteTciOVDlE1i+sn/imVa2Ot7DXhPIPHDaSxOwe6oZp6eaMO7fwkkcTZVaet2iylJkd6wkiKPKRHcfsP2xYjvTYZMtaE1qSUSpCy0NLh0r0BvYLKCw0UXHRz40Vr5NaZEjckV4xNCVo3vi0kbI80loT3uE5MVF7jOrSHscRU83WoDzk1WSLWVnSxOmoMQZtGW0K9A55NvOb1TtPEZqY2KodlXhHWypakHueOJvTCsua6MXtk2GlhBtvD5SPPHCj91mEJkNqTc9FNlm82+yToChEk1zzhOa0HwvhpTXR674ITbhlnawZuX9Mk3z2xPQ1WurGKi5rclCQJmFUY7KmyagcTfLuO8pvNU4mrWqe4R+iCT1GO21GE6c4TQr2T6LtRblpTrYm40I16Uaa+C2NX4gmBfux0YBNWrY8Tap0KlQtSZN94h0NhX8mrVqiJgnWmhQbF2sGyRjK1EQk2GpSQP7kdrVBPg7kTLXzYTbWqD1b3XcKwj7Pdr5Fkw/biz9Uk/nGsebNx6Z8uxVNPsxnG8Y1RqJwTXLYix3cbNGE7C3HO8a3HxWjCbeR9u0nB6N+016d7a5HHj6vNriiSUeLQgmCgmNAExdP41NYCvwaZGOtRbE/B0x9q7SiCR0h85Db8acY5h2f7NKEU4tHmZqY/ImuzI7a0kmbtSa/rDU526IJX1BGg+ShIx8ePHt1nWxN3GTNceourQm1xnm2Xhj/LIhkt+PMWpNUgyuaLKV+vMgAmD2DMk2PXFzThB0/PboRxwqJJv5bM07V6wwVRxOUfaMtiPJ7lthKcpdqb0UTzsJWg+mYk+s8xc3NbrvlSj9TE063yta0J9hjX8lRN2YcfXMa0mTXZuN2GMtuyQ9LTVImNqVJm1+oV2O/k/PHM3MU4cmwq+O2dU1OePjSk/K0K1OaVKU54jJfyw3YC6qxUEXsymeWmqS/HV7VxDmNEio0RO7vKDqk8j0yDOua1ONjLNGkBhNNZPzrMDqPPgySZ4hHpwCK+u7RsBChIvn2qiFCnxVx36Iz7iNBt7yg7yxcKQNzNko/5DP0NtcI1VQYi+hsVFfwTtWNgI4ZZT39DOkG4yIksfsE5ftaa4+9rqKX3Bh137TX4LaWzrfbOmajQ/WJ/o6Wag/5hyaCezxUNWo9bU9b0feyukJPzYNmV/3c6y4tkkn3sCbcaqO47zCeipsl2Qz7/fRnEM3+rrTp1hrDIn35bJ7Od2ZJ1jkv+3v70rk4e/h1eXPz6f75+e51Ps9KSf+c3/L/Mi6fHl6udzcJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPoT/AMZ1jvgtYbAmAAAAAElFTkSuQmCC"
            alt="YouTube Logo"
          />
          <span className="lg:ml-2 text-[8px] lg:text-xs text-gray-600 font-roboto">PK</span>
        </div>

      {/* Search Section */}
      <div className="flex items-center justify-center min-w-[200px] sm:min-w-96 lg:min-w-[500px] h-5 sm:h-8 lg:h-14 rounded-xl">
        <input
          type="text"
          placeholder="Search"
          name="search"
          className="h-5 sm:h-8 lg:h-8 w-full max-w-xl px-2 border border-gray-300 text-gray-800 text-[6px] sm:text-sm lg:text-sm font-roboto rounded-l-2xl"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-5 sm:h-8 lg:h-8 sm:w-12 lg:w-16 bg-gray-200 border border-gray-300 border-l-0 hover:bg-gray-300 rounded-r-2xl"
        >
          <span
            className="flex w-6 h-6 items-center justify-center text-xs sm:text-lg lg:text-xl text-black"><CiSearch/></span>
        </button>
        <button className="ml-1 lg:ml-4 flex items-center justify-center bg-gray-200 h-5 w-6 sm:h-8 sm:w-10 lg:h-8 lg:w-10 rounded-2xl text-xs sm:text-base lg:text-xl"><MdMic/></button>
      </div>

      {/* User Section */}
      <div className="flex items-center justify-center h-5 w-16 sm:w-24 lg:w-56 ">
        <button className="lg:h-10 lg:w-10 flex items-center justify-center">
          <span className="text-xs sm:text-lg lg:text-xl text-black"><RiVideoAddLine/></span>
        </button>
        <button className="lg:h-10 lg:w-10 ml-2 flex items-center justify-center">
          <span className="text-xs sm:text-lg lg:text-xl text-black"><CiBellOn/></span>
        </button>
        <button className="lg:h-10 lg:w-10 ml-2 flex items-center justify-center">
          <span className="text-xs sm:text-xl lg:text-2xl"><FaUserCircle/></span>
        </button>
      </div>
    </header>
  );
};

export default Header;