import Image from "next/image";
import { useState } from "react";

export default function Openchart() {
  const [mousehover, setMousehover] = useState(false);
  const [number, setNumber] = useState(1);

  const handleMouseEnter = (number) => {
    setMousehover(true);
    setNumber(number);
  };
  const handleMouseEvent = (number) => {
    setMousehover(false);
    setNumber(number);
  };
  return (
    <div>
      <div className="flex gap-[20px] mb-[75px] mx-auto justify-center">
        <div
          className={`${
            mousehover && number == 1
              ? "w-[476px] bg-white"
              : "w-[260px] bg-[#FFFFFF33]"
          } h-[242px] relative rounded-[20px] transition-all duration-500 ease-in-out cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseEvent(1)}
        >
          <div
            className={`${
              mousehover && number == 1
                ? "text-[#494AF8]"
                : "text-white text-opacity-[20%]"
            } text-[60px] font-bold font-dm absolute top-[16px] left-[30px]`}
          >
            1
          </div>
          <div className="mx-auto mt-[61px] mb-[30px]">
            <Image
              src="/Landing/icon-1.png"
              alt="icon"
              className="w-[80px] h-[80px] ml-[90px]"
              width={80}
              height={80}
            />
            <div
              className={`${
                mousehover && number == 1
                  ? "ml-[30px] text-[#555555]"
                  : "ml-[107px] text-white"
              } w-[47px] h-[17px] mt-[20px] text-[13px] font-medium font-jetbrains-mono duration-500 ease-in-out`}
            >
              Step 1
            </div>
            <div
              className={`${
                mousehover && number == 1
                  ? "ml-[30px] text-[#494AF8]"
                  : "ml-[42px] text-white"
              } w-[177px] h-[34px] text-[26px] font-bold font-dm duration-500 ease-in-out`}
            >
              Generate Link
            </div>
          </div>
        </div>
        <div
          className={`${
            mousehover && number == 2
              ? "w-[476px] bg-white"
              : "w-[260px] bg-[#FFFFFF33]"
          } h-[242px] relative rounded-[20px] transition-all duration-500 ease-in-out cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseEvent(1)}
        >
          <div
            className={`${
              mousehover && number == 2
                ? "text-[#494AF8]"
                : "text-white text-opacity-[20%]"
            } text-[60px] font-bold font-dm absolute top-[16px] left-[30px]`}
          >
            2
          </div>
          <div className="mx-auto mt-[61px] mb-[30px]">
            <Image
              src="/Landing/icon-2.png"
              alt="icon"
              className="w-[80px] h-[80px] ml-[90px]"
              width={80}
              height={80}
            />
            <div
              className={`${
                mousehover && number == 2
                  ? "ml-[30px] text-[#555555]"
                  : "ml-[107px] text-white"
              } w-[47px] h-[17px] mt-[20px] text-[13px] font-medium font-jetbrains-mono  duration-500 ease-in-out`}
            >
              Step 2
            </div>
            <div
              className={`${
                mousehover && number == 2
                  ? "ml-[30px] text-[#494AF8]"
                  : "ml-[82px] text-white"
              } w-[96px] h-[34px] text-[26px] font-bold font-dm  duration-500 ease-in-out`}
            >
              Share It
            </div>
          </div>
        </div>
        <div
          className={`${
            mousehover && number == 3
              ? "w-[476px] bg-white"
              : "w-[260px] bg-[#FFFFFF33]"
          } h-[242px] relative rounded-[20px] transition-all duration-500 ease-in-out cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseEvent(1)}
        >
          <div
            className={`${
              mousehover && number == 3
                ? "text-[#494AF8]"
                : "text-white text-opacity-[20%]"
            } text-[60px] font-bold font-dm absolute top-[16px] left-[30px]`}
          >
            3
          </div>
          <div className="mx-auto mt-[61px] mb-[30px]">
            <Image
              src="/Landing/icon-3.png"
              alt="icon"
              className="w-[80px] h-[80px] ml-[90px]"
              width={80}
              height={80}
            />
            <div
              className={`${
                mousehover && number == 3
                  ? "ml-[30px] text-[#555555]"
                  : "ml-[106px] text-white"
              } w-[47px] h-[17px] mt-[20px] text-[13px] font-medium font-jetbrains-mono duration-500 ease-in-out`}
            >
              Step 3
            </div>
            <div
              className={`${
                mousehover && number == 3
                  ? "ml-[30px] text-[#494AF8]"
                  : "ml-[66px] text-white"
              } w-[128px] h-[34px] text-[26px] font-bold font-dm duration-500 ease-in-out`}
            >
              Set Expiry
            </div>
          </div>
        </div>
        <div
          className={`${
            mousehover && number == 4
              ? "w-[476px] bg-white"
              : "w-[260px] bg-[#FFFFFF33]"
          } h-[242px] relative rounded-[20px] transition-all duration-500 ease-in-out cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseEvent(1)}
        >
          <div
            className={`${
              mousehover && number == 4
                ? "text-[#494AF8]"
                : "text-white text-opacity-[20%]"
            } justify-start text-[60px] font-bold font-dm absolute top-[16px] left-[30px]`}
          >
            4
          </div>
          <div className="mx-auto mt-[61px] mb-[30px]">
            <Image
              src="/Landing/icon-4.png"
              alt="icon"
              className="w-[80px] h-[80px] ml-[90px]"
              width={80}
              height={80}
            />
            <div
              className={`${
                mousehover && number == 4
                  ? "ml-[30px] text-[#555555]"
                  : "ml-[106px] text-white"
              } w-[47px] h-[17px] mt-[20px] text-[13px] font-medium font-jetbrains-mono duration-500 ease-in-out`}
            >
              Step 4
            </div>
            <div
              className={`${
                mousehover && number == 4
                  ? "ml-[30px] text-[#494AF8]"
                  : "ml-[55px] text-white"
              } w-[151px] h-[34px] text-[26px] font-bold font-dm duration-500 ease-in-out`}
            >
              End Session
            </div>
          </div>
        </div>
      </div>
      {number == 1 && (
        <div className="max-w-[930px] mx-auto text-white text-[18px] text-center font-medium font-jetbrains-mono">
          Start a chat session by clicking the &quot;Open Chat&quot; button on
          our site and receive a link. Optionally, make the chat secure by
          generating a security code.
        </div>
      )}
      {number == 2 && (
        <div className="max-w-[728px] mx-auto text-white text-[18px] text-center font-medium font-jetbrains-mono">
          Share the link with others by simply clicking the Copy URL button or
          scanning the QR code and sending via your favorite method.
        </div>
      )}
      {number == 3 && (
        <div className="max-w-[1208px] mx-auto text-white text-[18px] text-center font-medium font-jetbrains-mono">
          When the link is accessed, the chat facility will appear and users can
          enter their handle to start chatting. The chat messages will start to
          automatically disappear as specified by the expiry time limit.
        </div>
      )}
      {number == 4 && (
        <div className="max-w-[810px] mx-auto text-white text-[18px] text-center font-medium font-jetbrains-mono">
          The chat session is permanently terminated when every user has left by
          clicking the Disconnect button or simply closing their browser.
        </div>
      )}
    </div>
  );
}
