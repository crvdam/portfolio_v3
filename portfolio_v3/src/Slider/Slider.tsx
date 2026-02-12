import "./Slider.css";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
  onValueChange: (percentage: number) => void;
}

function Slider({ onValueChange }: SliderProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const [controlPos, setControlPos] = useState<{
    left: string | number;
    top: string | number;
  }>({
    left: "50%",
    top: 0,
  });

  const moveControl = (event: globalThis.MouseEvent) => {
    if (!circleRef.current) return;

    const rect = circleRef.current.getBoundingClientRect();
    const radius = rect.width / 2;
    const centerPos = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const mousePos = {
      x: event.clientX,
      y: event.clientY,
    };

    const mouseRel = {
      x: mousePos.x - centerPos.x,
      y: mousePos.y - centerPos.y,
    };

    let theta = Math.atan2(mouseRel.y, mouseRel.x);

    const control = {
      x: radius * Math.cos(theta),
      y: radius * Math.sin(theta),
    };

    setControlPos({
      left: radius + control.x,
      top: radius + control.y,
    });

    let adjusted = (theta + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI);
    const newPercentage = (adjusted / (2 * Math.PI)) * 100;
    onValueChange(newPercentage);
  };

  const onMouseDown = () => {
    window.addEventListener("mousemove", moveControl);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", moveControl);
    window.removeEventListener("mouseup", onMouseUp);
  };

  return (
    <>
      <div className="slider" ref={circleRef}>
        <div
          className="slider-control"
          style={{ left: controlPos.left, top: controlPos.top }}
          onMouseDown={onMouseDown}
        ></div>
      </div>
    </>
  );
}

export default Slider;
