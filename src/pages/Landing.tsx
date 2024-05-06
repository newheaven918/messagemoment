import Image from "next/image";
import Openchart from "@/components/Openchart";
import Slider from "@/components/Slider";

export default function Landing() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-white w-full">
      <div className="bg-gradient-to-br from-[#EDEDFF] to-white px-[60px] max-[979px]:pt-[30px] max-[979px]:px-[15px] pt-[51px] min-[979px]:pb-[50px]">
        <div className="relative max-w-[1320px] w-full mx-auto overflow-hidden bg-[url(/AdobeStock.jpeg)] bg-cover bg-center pt-[238px] max-[979px]:pt-[240px] max-[549px]:pt-[56px] pb-[230px] rounded-[20px]">
          <div className="absolute inset-0 opacity-10 bg-black" />
          <div className="relative items-center justify-center text-center max-sm:traslate-y-[-60px] max-[979px]:space-y-[10px] space-y-[20px] content-center">
            <div className="text-[80px] max-[979px]:text-[70px] max-[549px]:text-[50px] max-w-[647px] max-[979px]:max-w-[599px] leading-[80px] mx-auto font-bold font-dm text-white text-center">
              The real meaning to personal
            </div>
            <div className=" max-w-[562px] mx-auto font-medium leading-[26px] text-center text-[20px] font-jetbrains-mono text-white">
              A reliable and trustworthy platform for discreet conversations
              between known parties
            </div>
          </div>
        </div>
        <div
          id="linkGenerate"
          className="bg-[#494af8] max-w-[1096px] w-[76.112%] max-[979px]:max-w-[96.5] max-[979px]:w-full absolute z-50 bottom-[-6%] max-[1160px]:bottom-[-16.3%] right-auto left-1/2 max-[979px]:right-[15px] max-[979px]:left-[15px] min-[979px]:transform min-[979px]:-translate-x-1/2 min-[979px]:mx-auto rounded-[20px]"
        >
          <div className="py-[28px] px-[24px] text-[17px] leading-[24px] text-white font-medium font-dm text-center">
            Click the button below to receive your random link that you can
            share with your friends any way you like!
          </div>
          <div className="bg-[#00000014] rounded-b-[20px] bg-opacity-[8%] pt-[35px] pb-[25px] px-[30px] mx-auto">
            <div className="flex gap-[6px] h-[50px]">
              <div className="flex w-full h-full">
                <div className="bg-white w-[140px] h-full" />
                <div className="bg-white border-l-[1px] border-l-[#DDDDDD] w-full h-full" />
              </div>
              <div className="flex gap-[5px] h-full">
                <div className="w-[50px] h-full bg-white" />
                <div className="w-[50px] h-full bg-white" />
                <div className="w-[50px] h-full bg-white" />
              </div>
            </div>
            <div className="mt-[13px] flex gap-[20px] h-[65px]">
              <div className="bg-white w-[300px] h-full" />
              <div className="bg-white w-full h-full" />
            </div>
            <div className="mt-[15px] text-[13px] text-white font-medium font-dm text-center leading-[17px]">
              By starting this chat session, you agree to our Terms of Use and
              Privacy Policy, and that you and everybody you share the chat link
              with is above 16 years of age.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#EDEDFF] to-white space-y-[100px]">
        <div className="flex gap-[48px] pb-[100px] pt-[162px] max-w-[1096px] mx-auto">
          <div className="space-y-[20px] my-auto max-w-[574px]">
            <div className="text-[#363C4F] leading-[70px] text-[60px] font-bold font-dm">
              Converse with ease and assurance
            </div>
            <div className="max-w-[538px] text-[#363C4F] text-[17px] font-jetbrains-mono">
              It is said that words cannot be unspoken, but they can be
              unwritten with MessageMoment&apos;s in-the-moment chat service
              that guarantees your conversation is history. Start chatting now
              and experience the privacy and security of MessageMoment.
            </div>
          </div>
          <Image
            src="/Landing/Image-1.png"
            className="max-w-[474px] w-full h-auto my-auto"
            width={424}
            height={475}
            alt="Image"
          />
        </div>
      </div>
      <div className="bg-[#494AF8] pt-[60px] py-[75px] mx-auto">
        <div className="text-white text-[60px] font-bold font-dm text-center">
          Express yourself freely, <br /> anytime, with those you know
        </div>
        <Image
          src="/Landing/Image-2.png"
          className="max-w-[720px] mt-[50px] mb-[56.2px] w-full h-auto mx-auto"
          alt="Image"
          width={720}
          height={300}
        />
        <Openchart />
      </div>
      <div className="bg-gradient-to-br from-[#EDEDFF] to-white pt-[90px] pb-[100px]">
        <div className="flex gap-[132px] max-w-[1101px] mx-auto">
          <Image
            src="/Landing/Image-3.png"
            className="max-w-[426px] max-h-[475px] my-auto"
            alt="image"
            width={426}
            height={475}
          />
          <div className="space-y-[20px] my-auto">
            <div className="text-[#363C4F] text-[60px] font-bold font-dm leading-[70px]">
              Your message only lasts a moment
            </div>
            <div className="text-[#363C4F] text-[17px] font-jetbrains-mono">
              We believe that words can be a powerful tool for connection and
              communication, but it&apos;s also true that words cannot be
              unspoken. That&apos;s why we created a live chat service that lets
              you unwrite those words, with a unique chat link and a secure,
              in-the-moment chat experience.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#363C4F] pt-[70px]">
        <div className="max-w-[1248px] mx-auto">
          <div className="max-w-[934px] mb-[40px] text-[60px] text-white font-bold font-dm text-center mx-auto">
            Discover more from MessageMoment
          </div>
          <Slider />
          <div className="mt-[60px] text-white text-[26px] font-bold font-dm text-center">
            Use MessageMoment on any device via Browser1
          </div>
          <div className="mt-[40px] flex mx-auto justify-center">
            <div className="space-y-[20px]">
              <Image
                src="/Landing/cellphone.png"
                alt="image"
                className="w-[48px] h-[48px] mx-auto"
                width={48}
                height={48}
              />
              <div className="text-[15px] text-white font-jetbrains-mono leading-[23px] text-center">
                Phone
              </div>
            </div>
            <div className="space-y-[20px] ml-[46px]">
              <Image
                src="/Landing/laptop.png"
                alt="image"
                className="w-[48px] h-[48px] mx-auto"
                width={48}
                height={48}
              />
              <div className="text-[15px] text-white font-jetbrains-mono leading-[23px] text-center">
                Desktop
              </div>
            </div>
            <div className="space-y-[20px] ml-[48px]">
              <Image
                src="/Landing/tablet.png"
                alt="image"
                className="w-[48px] h-[48px] mx-auto"
                width={48}
                height={48}
              />
              <div className="text-[15px] text-white font-jetbrains-mono leading-[23px] text-center">
                Tablet
              </div>
            </div>
            <div className="space-y-[20px] ml-[49px]">
              <Image
                src="/Landing/television.png"
                alt="image"
                className="w-[48px] h-[48px] mx-auto"
                width={48}
                height={48}
              />
              <div className="text-[15px] text-white font-jetbrains-mono leading-[23px] text-center">
                Smart Tv
              </div>
            </div>
            <div className="space-y-[20px] ml-[50px]">
              <Image
                src="/Landing/controller.png"
                alt="image"
                className="w-[48px] h-[48px] mx-auto"
                width={48}
                height={48}
              />
              <div className="text-[15px] text-white font-jetbrains-mono leading-[23px] text-center">
                Consoles
              </div>
            </div>
          </div>
          <div className="bg-white h-[1px] max-w-[1096px] opacity-[20%] mx-auto mt-[59px]" />
          <div className="mt-[20px] text-white text-[13px] font-medium text-center font-dm pb-[36px]">
            1Disclaimer: Compatibility may vary across different devices and
            operating systems.
          </div>
          <div className="max-w-[1320px] mx-auto">
            <div
              className="absolute w-[80px] h-[80px] justify-center border-white border-[2px] bg-[#494AF8] rounded-full max-w-none content-center right-0 mr-[60px] mt-[-40px] cursor-pointer"
              onClick={handleScrollToTop}
            >
              <Image
                src="/Landing/bottom.png"
                className="w-[24.77px] h-[14px] m-auto"
                alt="image"
                width={24}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
