import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  const [sliderPercentage, setSliderPercentage] = useState(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return isDarkMode ? 25 : 75;
  });

  // Define 4 color presets (each with multiple CSS variables)
  const presets = [
    {
      "--bg-gradient-1": "hsl(211.6, 44.2%, 91.6%)",
      "--bg-gradient-2": "hsl(49, 68.4%, 57.8%)",
      "--bg-gradient-3": "hsl(11.3, 75.1%, 47.3%)",
      "--bg-secondary": "hsl(37.1, 100%, 93.3%)",
      "--clr-header": "hsl(24.8, 100%, 5.7%)",
      "--clr-text": "hsl(60, 0.6%, 35.1%)",
    },
    {
      "--bg-gradient-1": "hsl(244, 89%, 7%)",
      "--bg-gradient-2": "hsl(253.3, 100%, 3.5%)",
      "--bg-gradient-3": "hsl(231.4, 100%, 2.7%)",
      "--bg-secondary": "hsl(229, 30%, 22%)",
      "--clr-header": "hsl(0, 0%, 97%)",
      "--clr-text": "hsl(240, 6%, 89%)",
    },
    {
      "--bg-gradient-1": "hsl(210, 4.3%, 9%)",
      "--bg-gradient-2": "hsl(231.1, 32.3%, 37.1%)",
      "--bg-gradient-3": "hsl(41.4, 12.1%, 46.9%)",
      "--bg-secondary": "hsl(229, 30%, 22%)",
      "--clr-header": "hsl(0, 0%, 91%)",
      "--clr-text": "hsl(250, 18.2%, 74.1%)",
    },
    {
      "--bg-gradient-1": "hsl(180, 100%, 99.8%)",
      "--bg-gradient-2": "hsl(186, 58.8%, 93.3%))",
      "--bg-gradient-3": "hsl(43.6, 100%, 97.8%)",
      "--bg-secondary": "hsl(0, 0%, 100%)",
      "--clr-header": "hsl(24.8, 100%, 5.7%)",
      "--clr-text": "hsl(60, 0.6%, 35.1%)",
    },
  ];

  const segmentBoundaries = [0, 25, 50, 75, 100];

  // Helper function to convert HSL to RGB
  const hslToRgb = (h, s, l) => {
    s = s / 100;
    l = l / 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    };
  };

  // Helper function to convert RGB to HSL
  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
      h *= 360;
    }

    return { h, s: s * 100, l: l * 100 };
  };

  // Helper function to parse HSL string into components
  const parseHSL = (hslString) => {
    const match = hslString.match(
      /hsl\((\d+\.?\d*),\s*(\d+\.?\d*)%,\s*(\d+\.?\d*)%\)/,
    );
    if (match) {
      return {
        h: parseFloat(match[1]),
        s: parseFloat(match[2]),
        l: parseFloat(match[3]),
      };
    }
    return { h: 0, s: 0, l: 0 };
  };

  // Interpolate using RGB color space
  const interpolateRGB = (color1, color2, factor) => {
    const hsl1 = parseHSL(color1);
    const hsl2 = parseHSL(color2);

    const rgb1 = hslToRgb(hsl1.h, hsl1.s, hsl1.l);
    const rgb2 = hslToRgb(hsl2.h, hsl2.s, hsl2.l);

    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);

    const hsl = rgbToHsl(r, g, b);
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  };

  useEffect(() => {
    // Find which segment we're in
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

    // For continuous loop: wrap from last preset back to first
    const nextSegment = (segment + 1) % presets.length;

    // Calculate interpolation factor (0 to 1) within the current segment
    const segmentStart = segmentBoundaries[segment];
    const segmentEnd = segmentBoundaries[segment + 1];
    const segmentSize = segmentEnd - segmentStart;
    const factor = (sliderPercentage - segmentStart) / segmentSize;

    const currentPreset = presets[segment];
    const nextPreset = presets[nextSegment];

    // Interpolate and set each CSS variable using RGB interpolation
    Object.keys(currentPreset).forEach((varName) => {
      const interpolatedColor = interpolateRGB(
        currentPreset[varName],
        nextPreset[varName],
        factor,
      );
      document.documentElement.style.setProperty(varName, interpolatedColor);
    });
  }, [sliderPercentage]);

  return (
    <>
      <Header onSliderChange={setSliderPercentage} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
