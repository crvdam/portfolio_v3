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

export const segmentBoundaries = [0, 25, 50, 75, 100];