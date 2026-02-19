import "./Slider.css";
import { useRef, useState } from "react";

interface SliderProps {
  onValueChange: (percentage: number) => void;
}

function Slider({ onValueChange }: SliderProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const [controlPos, setControlPos] = useState(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return isDarkMode
      ? { left: "100%", top: "50%" }
      : { left: "0%", top: "50%" };
  });

  const moveControlToPoint = (clientX: number, clientY: number) => {
    if (!circleRef.current) return;

    const rect = circleRef.current.getBoundingClientRect();
    const radius = rect.width / 2;

    const theta = Math.atan2(
      clientY - (rect.top + radius),
      clientX - (rect.left + radius),
    );

    setControlPos({
      left: `${((radius + radius * Math.cos(theta)) / (radius * 2)) * 100}%`,
      top: `${((radius + radius * Math.sin(theta)) / (radius * 2)) * 100}%`,
    });

    const adjusted = (theta + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI);
    onValueChange((adjusted / (2 * Math.PI)) * 100);
  };

  const onMouseMove = (event: globalThis.MouseEvent) => {
    moveControlToPoint(event.clientX, event.clientY);
  };

  const onTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    moveControlToPoint(event.touches[0].clientX, event.touches[0].clientY);
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    event.preventDefault();
    circleRef.current?.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });
    window.addEventListener("touchend", onTouchEnd);
  };

  const onTouchEnd = () => {
    circleRef.current?.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
  };

  return (
    <>
      <div className="slider" ref={circleRef}>
        <div
          className="slider-control"
          style={{ left: controlPos.left, top: controlPos.top }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        ></div>
      </div>
    </>
  );
}

export default Slider;
