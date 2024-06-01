import Highlited from "../Highlited";
import MobileSharing from "./mobile/SharingMobile";
import Sharing from "./Sharing";

const ShareSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around xl:justify-center">
      <div className="h-1/12 flex w-full items-center justify-center">
        <h1 className="text-center text-5xl font-bold md:p-0 md:text-6xl xl:text-left">
          <Highlited>Share</Highlited> & take inspiration
        </h1>
      </div>
      <div className="hidden h-full w-full flex-row justify-center p-14 md:flex">
        <Sharing />
      </div>
      <div className="flex h-full w-full items-center justify-center px-5 md:hidden">
        <MobileSharing />
      </div>
    </div>
  );
};

export default ShareSection;
