import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState, useEffect } from "react";
import {
  colorPresets,
  segmentBoundaries,
  type ColorPreset,
} from "./utils/colorPresets";
import { interpolateRGB } from "./utils/colorUtils";
import { useFadeInOnScroll } from "./hooks/useFadeInOnScroll";

function App() {
  const [sliderPercentage, setSliderPercentage] = useState(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return isDarkMode ? 25 : 75;
  });

  useEffect(() => {
    let segment = 0;
    for (let i = 0; i < segmentBoundaries.length - 1; i++) {
      if (
        sliderPercentage >= segmentBoundaries[i] &&
        sliderPercentage <= segmentBoundaries[i + 1]
      ) {
        segment = i;
        break;
      }
    }

    const nextSegment = (segment + 1) % colorPresets.length;

    const segmentStart = segmentBoundaries[segment];
    const segmentEnd = segmentBoundaries[segment + 1];
    const segmentSize = segmentEnd - segmentStart;
    const factor = (sliderPercentage - segmentStart) / segmentSize;

    const currentPreset = colorPresets[segment];
    const nextPreset = colorPresets[nextSegment];

    (Object.keys(currentPreset) as Array<keyof ColorPreset>).forEach(
      (varName) => {
        const interpolatedColor = interpolateRGB(
          currentPreset[varName],
          nextPreset[varName],
          factor,
        );
        document.documentElement.style.setProperty(varName, interpolatedColor);
      },
    );
  }, [sliderPercentage]);

  useFadeInOnScroll();

  return (
    <>
      <Header onSliderChange={setSliderPercentage} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
