import { useEffect, useState } from "react";

const useTypeEffect = (text: string, delay: number, wait: number) => {
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
