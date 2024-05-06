import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const openPageInNewTab = (url: string) => {
    window.open(url, "_blank");
  };
  const openEmailClient = (emailAddress: string) => {
    // Use window.open with the 'mailto:' protocol
    window.open(`mailto:${emailAddress}`, "_blank");
  };
  return (
    <div className="bg-white">
      <div className="pt-[30px] pb-[50px] space-y-[60px] max-[979px]:pt-[40px] max-[979px]:pb-[30px] max-[979px]:space-y-[30px]">
        <Image
          src="/Logo.svg"
          alt="mark"
          className="w-[196.5px] h-[46px] mx-auto cursor-pointer"
          onClick={() => navigateToPage("/")}
          width={16}
          height={16}
        />
        <div className="flex gap-[30px] justify-center text-[#363C4F] text-[17px] font-medium font-dm max-[979px]:flex-col max-[979px]:space-y-[11px] max-[979px]:gap-0 mx-auto">
          <div
            className="cursor-pointer text-center"
            onClick={() => {
              navigateToPage("/about");
            }}
          >
            About
          </div>
          <div
            className="cursor-pointer text-center"
            onClick={() => {
              navigateToPage("/faqs");
            }}
          >
            Help & Support{" "}
          </div>
          <div
            className="cursor-pointer text-center"
            onClick={() => {
              navigateToPage("/privacy");
            }}
          >
            Terms of Use
          </div>
          <div
            className="cursor-pointer text-center"
            onClick={() => {
              navigateToPage("/terms");
            }}
          >
            Privacy Policy
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black bg-opacity-[10%]" />
      <div className="flex max-[979px]:flex-col-reverse items-center border-t-black pl-[58px] pr-[59px] py-[33px] max-w-[1440px] max-[979px]:pt-[30px] max-[979px]:pb-[36px]">
        <div className="flex-1 text-[#555555] text-[13px] font-medium text-center max-[979px]:order-1 max-[979px]:pb-[10px]">
          Copyright © 2024 MessageMoment. All rights reserved.
        </div>
        <div className="flex flex-1 text-center justify-center gap-[15px] items-center max-[979px]:order-2 max-[979px]:pb-[30px]">
          <Image
            src="/X.png"
            alt="X"
            className="w-[22px] h-[22px] cursor-pointer"
            onClick={() => openPageInNewTab("https://www.twitter.com/")}
            width={22}
            height={22}
          />
          <Image
            src="/Instagram.png"
            alt="Instagram"
            className="w-[22px] h-[22px] cursor-pointer"
            onClick={() => openPageInNewTab("https://www.instagram.com/")}
            width={22}
            height={22}
          />
          <Image
            src="/Facebook.png"
            alt="Facebook"
            className="w-[24.06px] h-[24px] cursor-pointer"
            onClick={() => openPageInNewTab("https://www.facebook.com/")}
            width={22}
            height={22}
          />
          <Image
            src="/Youtube.png"
            alt="Youtube"
            className="w-[27.5px] h-[22px] cursor-pointer"
            onClick={() => openPageInNewTab("https://www.youtube.com/")}
            width={22}
            height={22}
          />
        </div>
        <div className="flex flex-1 gap-[10px] items-center justify-end">
          <div className="text-[#555555] text-[13px] font-medium">
            Designed By
          </div>
          <Image
            src="/Design_Icon.png"
            alt="Design_Icon"
            className="w-[17px] h-[17px] cursor-pointer"
            onClick={() => openEmailClient("pictagroup@gmail.com")}
            width={17}
            height={17}
          />
        </div>
      </div>
    </div>
  );
}
