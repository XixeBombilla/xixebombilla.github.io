import { useEffect, useState } from "react";

/**
 * Custom hook that simulates typing effect on a given text.
 * @param {string} text - The text to simulate typing effect.
 * @param {number} delay - The delay between each character being displayed.
 * @param {number} wait - The delay before starting the typing effect.
 * @returns {string} The text with typing effect.
 */
const useTypeEffect = (text: string, delay: number, wait: number): string => {
  const [index, setIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [waitAnimation, setWaitAnimation] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWaitAnimation(false);
    }, wait);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (displayedText.length === text.length || waitAnimation) return;

    const timeoutId = setTimeout(() => {
      setDisplayedText(displayedText.concat(text[index]));
      const nextIndex = index + 1;
      setIndex(nextIndex);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index, waitAnimation, delay, displayedText, text]);

  return displayedText.join("");
};

export default useTypeEffect;
