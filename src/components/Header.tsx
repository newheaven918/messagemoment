import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  const openPageInNewTab = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="bg-white">
      <div className="w-full h-[5px] bg-[#494AF8]" />
      <div className="flex max-w-[1440px] mx-auto px-[60px] w-full h-[80px] content-center max-[979px]:pl-[17px] max-[979px]:pr-[24px] container">
        <div className="flex gap-[50px] items-center mr-auto">
          <Image
            src="/Logo.svg"
            alt="mark"
            className="max-w-[196.5px] max-h-[46px] w-full h-full cursor-pointer"
            onClick={() => navigateToPage("/")}
            width={16}
            height={16}
          />
          <div className="flex gap-[30px] text-black text-base font-medium font-dm max-[979px]:hidden">
            <div
              className="cursor-pointer w-[47px]"
              onClick={() => navigateToPage("/about")}
            >
              About
            </div>
            <div
              className="cursor-pointer w-[117px]"
              onClick={() => navigateToPage("/faqs")}
            >
              Help & Support
            </div>
          </div>
        </div>
        <div className="flex gap-[29.5px] ml-auto max-[979px]:hidden">
          <div className="flex gap-[20px] items-center ml-auto">
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
              className="w-[24.1px] h-[24px] cursor-pointer"
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
          <div className="bg-[#494AF8] px-[51px] pt-[13px] pb-[12px] my-auto rounded-md">
            <div className="text-[16px] text-white font-extrabold font-jetbrains-mono h-[21px]">
              Start
            </div>
          </div>
        </div>
        <div className="min-[979px]:hidden ml-auto my-auto w-[46px] h-[46px] bg-[#494AF8] rounded-[6px]" />
      </div>
    </div>
  );
}
