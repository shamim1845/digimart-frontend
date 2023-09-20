import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleWindow() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleWindow);
    return () => {
      window.removeEventListener("resize", handleWindow);
    };
  }, []);
  return windowSize;
};

export default useWindowSize;
