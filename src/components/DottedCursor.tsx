import React, { useEffect, useState, JSX } from "react";

/**
 * DottedCursor component that renders a custom cursor with a trailing effect.
 * @returns {JSX.Element} The rendered DottedCursor component.
 */
const DottedCursor: React.FC = (): JSX.Element => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrailingPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.1, // Smooth transition effect
        y: prev.y + (cursorPos.y - prev.y) * 0.1,
      }));
    }, 8);

    return () => clearInterval(interval);
  }, [cursorPos]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="cursor-dot hidden lg:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <div
        className="trailing-dot hidden lg:block"
        style={{ left: trailingPos.x, top: trailingPos.y }}
      />
    </>
  );
};

export default DottedCursor;
