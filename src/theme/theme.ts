import type { PartialDeep } from "type-fest";
import { deepmerge } from "../utils/deepmerge";

export const DefaultTheme = {
  "item-height": "3rem",
  color: {
    secondary: {
      h: "196",
      s: "40%",
      l: "49%",
      "": "hsl($.h, $.s, $.l)",
      "50": "hsl($.h, $.s, 95%)",
      "100": "hsl($.h, $.s, 90%)",
      "200": "hsl($.h, $.s, 80%)",
      "300": "hsl($.h, $.s, 70%)",
      "400": "hsl($.h, $.s, 60%)",
      "500": "hsl($.h, $.s, 50%)",
      "600": "hsl($.h, $.s, 40%)",
      "700": "hsl($.h, $.s, 30%)",
      "800": "hsl($.h, $.s, 20%)",
      "900": "hsl($.h, $.s, 10%)",
      "1000": "hsl($.h, $.s, 5%)",
    },

    primary: {
      h: "174",
      s: "39%",
      l: "48%",
      "": "hsl($.h, $.s, $.l)",
      "50": "hsl($.h, $.s, 95%)",
      "100": "hsl($.h, $.s, 90%)",
      "200": "hsl($.h, $.s, 80%)",
      "300": "hsl($.h, $.s, 70%)",
      "400": "hsl($.h, $.s, 60%)",
      "500": "hsl($.h, $.s, 50%)",
      "600": "hsl($.h, $.s, 40%)",
      "700": "hsl($.h, $.s, 30%)",
      "800": "hsl($.h, $.s, 20%)",
      "900": "hsl($.h, $.s, 10%)",
      "1000": "hsl($.h, $.s, 5%)",
    },

    neutral: {},

    info: {
      h: "218",
      s: "41%",
      l: "56%",
      "": "hsl($.h, $.s, $.l)",
      "50": "hsl($.h, $.s, 95%)",
      "100": "hsl($.h, $.s, 90%)",
      "200": "hsl($.h, $.s, 80%)",
      "300": "hsl($.h, $.s, 70%)",
      "400": "hsl($.h, $.s, 60%)",
      "500": "hsl($.h, $.s, 50%)",
      "600": "hsl($.h, $.s, 40%)",
      "700": "hsl($.h, $.s, 30%)",
      "800": "hsl($.h, $.s, 20%)",
      "900": "hsl($.h, $.s, 10%)",
      "1000": "hsl($.h, $.s, 5%)",
    },

    success: {
      "h": "96",
      "s": "47%",
      "l": "53%",
      "": "hsl($.h, $.s, $.l)",
      "50": "hsl($.h, $.s, 95%)",
      "100": "hsl($.h, $.s, 90%)",
      "200": "hsl($.h, $.s, 80%)",
      "300": "hsl($.h, $.s, 70%)",
      "400": "hsl($.h, $.s, 60%)",
      "500": "hsl($.h, $.s, 50%)",
      "600": "hsl($.h, $.s, 40%)",
      "700": "hsl($.h, $.s, 30%)",
      "800": "hsl($.h, $.s, 20%)",
      "900": "hsl($.h, $.s, 10%)",
      "1000": "hsl($.h, $.s, 5%)",
    },

    error: {
      "h": "6",
      "s": "70%",
      "l": "51%",
      "": "hsl($.h, $.s, $.l)",
      "50": "hsl($.h, $.s, 95%)",
      "100": "hsl($.h, $.s, 90%)",
      "200": "hsl($.h, $.s, 80%)",
      "300": "hsl($.h, $.s, 70%)",
      "400": "hsl($.h, $.s, 60%)",
      "500": "hsl($.h, $.s, 50%)",
      "600": "hsl($.h, $.s, 40%)",
      "700": "hsl($.h, $.s, 30%)",
      "800": "hsl($.h, $.s, 20%)",
      "900": "hsl($.h, $.s, 10%)",
      "1000": "hsl($.h, $.s, 5%)",
    },
  },

  text: {
    color: {
      "on-surface": {
        "": "#3c3c3c",
        "1": "#2f2f2f",
        "2": "#292929",
        "3": "#202020",
      },
      "on-contrast-surface": {
        "": "var(--color-primary-50)",
        "1": "#f8f8f8",
        "2": "#f0f0f0",
        "3": "#e9e9e9",
      },
      "on-primary": {
        "": "#fefefe",
        "700": "#fcfcfc",
        "900": "#ffffff",
      },
      "on-secondary": {
        "": "#fefefe",
        "700": "#fcfcfc",
        "900": "#ffffff",
      },
    },
  },

  radius: ["0px", "3px", "5px", "7px", "10px"],

  surface: {
    "0": "transparent",
    "1": "rgba(0,0,0,0.05)",
    "2": "rgba(0,0,0,0.1)",
    "3": "rgba(0,0,0,0.15)",
    "4": "rgba(0,0,0,0.2)",
    contrast: {
      "0": "rgba(30,30,30,0.6)",
      "1": "rgba(30,30,30,0.7)",
      "2": "rgba(30,30,30,0.8)",
      "3": "rgba(30,30,30,0.9)",
      "4": "rgba(30,30,30,1)",
    },
  },

  elevation: {
    "0": "0 0 0 transparent",
    "1": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    "2": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    "3": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
    "4": "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
    "5": "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
  },

  transition: {
    duration: {
      "": "250ms",
      slower: "700ms",
      slow: "400ms",
      fast: "150ms",
      faster: "100ms",
    },
  },

  icon: {},

  // Components
  titlebar: {
    bg: "var(--surface-1)",
    height: "clamp(30px, 5vh, 60px)",
  },

  "icon-button": {
    bg: "var(--surface-1)",
    color: "var(--text-color-on-surface-1)",
    hover: {
      color: "var(--text-color-on-surface-2)",
      bg: "var(--surface-2)",
    },
  },

  "vertical-separator": {
    width: "2px",
    height: "100%",
  },

  "list-item": {
    subtitle: {
      size: "0.8em",
      weight: "100",
      color: "var(--text-color-on-surface-1)",
    },
  },
};

export type TSculptorTheme = typeof DefaultTheme;

export function customizeTheme<T extends PartialDeep<TSculptorTheme>>(
  options: T
): TSculptorTheme {
  return deepmerge(DefaultTheme, options) as TSculptorTheme;
}
