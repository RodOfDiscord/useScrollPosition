import { useState, useEffect } from "react";

const getPosition = (element) => {
  if (element == null) return window.scrollY;
  else return element.scrollTop;
};

function useScrollPosition(elementRef = null) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const element = elementRef?.current;
    const updateScrollPosition = () => setScrollPosition(getPosition(element));

    if (element) {
      element.addEventListener("scroll", updateScrollPosition);
    } else {
      window.addEventListener("scroll", updateScrollPosition);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", updateScrollPosition);
      } else {
        window.removeEventListener("scroll", updateScrollPosition);
      }
    };
  }, [elementRef]);

  return scrollPosition;
}

export default useScrollPosition;
