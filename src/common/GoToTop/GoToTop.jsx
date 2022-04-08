import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const GoToTop = () => {
  const HandleScroll = () => {
      window.scrollTo(0, 0)
  };

  return (
    <div
      className="fixed sm:hidden bottom-[4rem] right-[4rem] text-[3rem] text-[#171717] p-[1rem] rounded-full bg-[#dbdbd8] cursor-pointer hover:text-primary animate-[opacity-show_0.3s_linear]"
      onClick={HandleScroll}
    >
      <IoIosArrowUp />
    </div>
  );
};

export default GoToTop;
