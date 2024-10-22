import { useState, useEffect } from "react";

const getPosition = (element) => {
  return element == window ? window.scrollY : element.scrollTop;
};

const setPosition = (element, startPosition) => {
  if (element === window) window.scrollTo(0, startPosition);
  else element.scrollTop = startPosition;
};

function useScrollPosition(startPosition = 0, elementRef = null) {
  const [scrollPosition, setScrollPosition] = useState(startPosition);
  useEffect(() => {
    const element = elementRef?.current ?? window;
    setPosition(element, startPosition);

    const updateScrollPosition = () => setScrollPosition(getPosition(element));
    element.addEventListener("scroll", updateScrollPosition);

    return () => {
      element.removeEventListener("scroll", updateScrollPosition);
    };
  }, [elementRef, startPosition]);

  return scrollPosition;
}

export default useScrollPosition;
