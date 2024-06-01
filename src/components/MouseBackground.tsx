import React from "react";

const MouseBackground = () => {
  React.useEffect(() => {
    const mouseBlur = document.getElementById("mouseBlur");
    const onMouseMove = (e: MouseEvent) => {
      mouseBlur?.style.setProperty("top", `${e.clientY}px`);
      mouseBlur?.style.setProperty("left", `${e.clientX}px`);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      id="mouseBlur"
      className="fixed left-0 top-0 z-[-1] size-40 translate-x-[-50%] translate-y-[-50%] rounded-full bg-app-color blur-3xl"
    ></div>
  );
};

export default MouseBackground;
