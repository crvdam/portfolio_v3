export type ColorPreset = {
  "--bg-gradient-1": string;
  "--bg-gradient-2": string;
  "--bg-gradient-3": string;
  "--bg-secondary": string;
  "--clr-header": string;
  "--clr-text": string;
};

export const colorPresets: ColorPreset[] = [
  {
    "--bg-gradient-1": "rgb(210, 224, 238)",
    "--bg-gradient-2": "rgb(218, 182, 77)",
    "--bg-gradient-3": "rgb(218, 88, 34)",
    "--bg-secondary": "rgb(255, 242, 209)",
    "--clr-header": "rgb(20, 8, 0)",
    "--clr-text": "rgb(91, 91, 89)",
  },
  {
    "--bg-gradient-1": "rgb(0, 0, 0)",
    "--bg-gradient-2": "rgb(2, 0, 18)",
    "--bg-gradient-3": "rgb(0, 0, 27)",
    "--bg-secondary": "rgb(44, 49, 88)",
    "--clr-header": "rgb(247, 247, 247)",
    "--clr-text": "rgb(224, 224, 227)",
  },
  {
    "--bg-gradient-1": "rgb(5, 11, 44)",
    "--bg-gradient-2": "rgb(70, 72, 152)",
    "--bg-gradient-3": "rgb(129, 91, 125)",
    "--bg-secondary": "rgb(44, 49, 88)",
    "--clr-header": "rgb(232, 232, 232)",
    "--clr-text": "rgb(181, 177, 201)",
  },
  {
    "--bg-gradient-1": "rgb(250, 255, 255)",
    "--bg-gradient-2": "rgb(224, 245, 248)",
    "--bg-gradient-3": "rgb(255, 253, 240)",
    "--bg-secondary": "rgb(255, 255, 255)",
    "--clr-header": "rgb(20, 8, 0)",
    "--clr-text": "rgb(91, 91, 89)",
  },
];

export const segmentBoundaries = [0, 25, 50, 75, 100];