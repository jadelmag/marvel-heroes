import { useLayoutEffect, useState } from "react";

export interface WindowSizeValues {
  width: number;
  height: number;
  setWindowSize: React.Dispatch<React.SetStateAction<WindowSize>>;
}

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSizeValues => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = windowSize;
  return { width, height, setWindowSize };
};

export default useWindowSize;
