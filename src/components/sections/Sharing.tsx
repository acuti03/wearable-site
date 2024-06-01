import { IPhoneX } from "react-device-frames";

const Sharing = () => {
  return (
    <>
      {/* <h1 className="text-center text-6xl font-bold">Section 3</h1> */}
      <div className="flex h-full w-3/12 flex-col items-end justify-around">
        <div className="">
          <h1 className="text-xl font-bold">
            Take a picture and let the AI do the rest
          </h1>
          <div className="pt-2">
            <p className="font-light">
              Our AI will help you to choose the best outfit for any occasion
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">
            Take a picture and let the AI do the rest
          </h1>
          <div className="pt-2">
            <p className="font-light">
              Our AI will help you to choose the best outfit for any occasion
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-6/12 flex-row items-center justify-center p-16">
        <IPhoneX screenshot="http://placehold.jp/1125x2436.png" />
      </div>
      <div className="flex h-full w-3/12 flex-col items-end justify-around">
        <div className="">
          <h1 className="text-xl font-bold">
            Take a picture and let the AI do the rest
          </h1>
          <div className="pt-2">
            <p className="font-light">
              Our AI will help you to choose the best outfit for any occasion
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">
            Take a picture and let the AI do the rest
          </h1>
          <div className="pt-2">
            <p className="font-light">
              Our AI will help you to choose the best outfit for any occasion
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sharing;
