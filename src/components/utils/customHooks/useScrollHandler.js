import { useEffect, useState } from "react";

const useScrollHandler = () => {
  const [scrolling, setScrolling] = useState("");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      if (lastScrollY < window.scrollY) {
        setScrolling("down");
      } else {
        setScrolling("top");
      }

      setLastScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { scrolling, lastScrollY };
};

export default useScrollHandler;
