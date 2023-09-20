import { useEffect } from "react";

const useSidebarHandler = (ref, handler) => {
  useEffect(() => {
    // sidebar handler
    function sidebarHandler(e) {
      if (!ref?.current?.contains(e.target)) {
        handler(false);
      }
    }

    // Add event in initial page load
    window.addEventListener("mousedown", sidebarHandler);

    // Remove event when component unmount or re-render
    return () => {
      window.removeEventListener("mousedown", sidebarHandler);
    };
  }, [ref, handler]);

  return null;
};

export default useSidebarHandler;
