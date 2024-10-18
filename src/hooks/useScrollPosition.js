import { useState, useEffect } from "react";

const getPosition = (element) => {
  if (element == null) return window.scrollY;
  else return element.scrollTop;
};

function useScrollPosition(elementRef = null) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const element = elementRef?.current;
  useEffect(() => {
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
  }, [element, elementRef]);

  return scrollPosition;
}

export default useScrollPosition;
