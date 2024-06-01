import Lottie from "lottie-react";
import IosAnimation from "@/assets/ios_logo.json";
import AndroidAnimation from "@/assets/android_logo.json";
import Highlited from "@/components/Highlited";

const Download = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="w-7/12">
        <h1 className="text-center text-6xl font-bold">
          <Highlited>IOS</Highlited> and <Highlited>Android</Highlited>{" "}
          compatible
        </h1>
        <div className="flex p-20">
          <a href="#" className="m-2 h-auto w-1/2 p-0">
            <img
              className="h-auto w-full"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </a>
          <a
            href="#"
            className="m-2 flex h-auto w-1/2 items-center justify-center p-0"
          >
            <img
              className="h-auto w-[82%]"
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
            />
          </a>
        </div>
      </div>
      <div className="flex w-5/12 flex-col items-center justify-center">
        <Lottie
          className="size-80"
          animationData={AndroidAnimation}
          loop={true}
        />
        <Lottie className="size-80" animationData={IosAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Download;
