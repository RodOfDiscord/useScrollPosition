import { useState, useEffect } from "react";

const getPosition = (element) => {
  return element == window ? window.scrollY : element.scrollTop;
};

function useScrollPosition(elementRef = null) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const element = elementRef?.current ?? window;
    const updateScrollPosition = () => setScrollPosition(getPosition(element));
    element.addEventListener("scroll", updateScrollPosition);

    return () => {
      element.removeEventListener("scroll", updateScrollPosition);
    };
  }, [elementRef]);

  return scrollPosition;
}

export default useScrollPosition;
