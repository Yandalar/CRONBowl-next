import { CSSVariablesResolver, createTheme } from "@mantine/core";
import { openSans, cinzel } from "./fonts";

export const theme = createTheme({
  fontFamily: openSans.style.fontFamily,
  headings: {
    fontFamily: cinzel.style.fontFamily,
  },

  other: {
    brand: {
      primary: "#9e0000", // blood red
      accent: "#003366", // dark green
      highlight: "#ffd700", // gold yellow
      text: "#666666", // Metallic Grey
      additionalAccent: "#003366", // Spectral Blue
    },
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-primary-color": theme.other.brand.primary,
    "--mantine-accent-color": theme.other.brand.accent,
    "--mantine-highlight-color": theme.other.brand.highlight,
  },

  light: {},
  dark: {},
});
