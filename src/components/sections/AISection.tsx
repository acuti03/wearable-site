import AIAnimation from "@/assets/AI_blue.json";
import Lottie from "lottie-react";

const AISection = () => {
  return (
    <div className="flex w-full flex-row">
      <div className="w-7/12 px-20">
        <h1 className="text-6xl font-bold">
          Wardrobe powered with <span className="text-app-color">AI</span>
        </h1>
        <div className="pt-20">
          <p className="text-2xl font-light">
            Hi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            voluptatibus vero dolores corporis eveniet tempora dolore velit
            deleniti sapiente blanditiis assumenda enim nesciunt! Non maxime
            necessitatibus repellendus unde, enim alias. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis
            dicta qui eveniet cumque rerum consequatur doloremque laborum vitae,
            nihil libero suscipit quaerat aperiam animi natus, non laboriosam.
            Ratione, pariatur.
          </p>
        </div>
      </div>
      <div className="flex w-5/12 flex-col items-center justify-center">
        <Lottie animationData={AIAnimation} loop={true} />
      </div>
    </div>
  );
};

export default AISection;
