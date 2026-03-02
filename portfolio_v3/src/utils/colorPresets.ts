export type ColorPreset = {
  "--bg-gradient-1": string;
  "--bg-gradient-2": string;
  "--bg-gradient-3": string;
  "--bg-secondary": string;
  "--clr-header": string;
  "--clr-text": string;
  "--clr-cta": string;
};

export const colorPresets: ColorPreset[] = [
  {
    "--bg-gradient-1": "rgb(246, 208, 98)",
    "--bg-gradient-2": "rgb(229, 122, 76)",
    "--bg-gradient-3": "rgb(253, 80, 61)",
    "--bg-secondary": "rgb(255, 242, 209)",
    "--clr-header": "rgb(20, 8, 0)",
    "--clr-text": "rgb(18, 18, 18)",
    "--clr-cta": "rgb(255, 0, 0)"
  },
  {
    "--bg-gradient-1": "rgb(0, 0, 0)",
    "--bg-gradient-2": "rgb(2, 0, 18)",
    "--bg-gradient-3": "rgb(0, 0, 27)",
    "--bg-secondary": "rgb(44, 49, 88)",
    "--clr-header": "rgb(247, 247, 247)",
    "--clr-text": "rgb(224, 224, 227)",
    "--clr-cta": "rgb(0, 255, 136)"
  },
  {
    "--bg-gradient-1": "rgb(5, 11, 44)",
    "--bg-gradient-2": "rgb(70, 72, 152)",
    "--bg-gradient-3": "rgb(129, 91, 125)",
    "--bg-secondary": "rgb(44, 49, 88)",
    "--clr-header": "rgb(232, 232, 232)",
    "--clr-text": "rgb(218, 218, 218)",
     "--clr-cta": "rgb(255, 0, 221)"
  },
  {
    "--bg-gradient-1": "rgb(250, 255, 255)",
    "--bg-gradient-2": "rgb(224, 245, 248)",
    "--bg-gradient-3": "rgb(255, 253, 240)",
    "--bg-secondary": "rgb(255, 255, 255)",
    "--clr-header": "rgb(0, 8, 50)",
    "--clr-text": "rgb(1, 4, 71)",
     "--clr-cta": "rgb(0, 162, 255)"
  },
];

export const segmentBoundaries = [0, 25, 50, 75, 100];