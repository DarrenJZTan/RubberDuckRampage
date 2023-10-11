import { createGlobalTheme, createThemeContract, createTheme, fontFace } from "@vanilla-extract/css";
import twColors from 'tailwindcss/colors';

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Montserrat, apple-system, sans-serif",
    body: "Montserrat, apple-system, sans-serif",
  },
  // colors: {
  //   // Semantic tokens
  //   primary: twColors.slate[700],
  //   complementary: twColors.white,
  //   brand: twColors.emerald[600],
  //   brandLight: twColors.emerald[400],
  //   brandDark: twColors.emerald[700],

  //   // Color tokens
  //   success: twColors.green[400],
  //   warning: twColors.amber[400],
  //   error: twColors.rose[600],
  //   grey200: twColors.gray[200],
  //   grey300: twColors.gray[300],
  //   grey400: twColors.gray[400],
  //   grey500: twColors.gray[500],
  //   grey600: twColors.gray[600],
  // },
  space: {
    none: '0',
    '1x': '8px',
    '2x': '16px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
  },
  fontSizes: {
    '1x': '8px',
    '2x': '12px',
    '3x': '16px', 
    '4x': '20px', 
    '5x': '24px', 
    '6x': '32px'
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  }
})
const colors = createThemeContract({
    primary: null,
    complementary: null,
    brand: null,

    success: null,
    warning: null,
    error: null,
    grey200: null,
    grey300: null,
    grey400: null,
    grey500: null,
    grey600: null,
})

export const light = createTheme(colors, {
    // Semantic tokens
    primary: twColors.white,
    complementary: twColors.black,
    brand: twColors.amber[700],

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],
})
export const dark = createTheme(colors, {
    // Semantic tokens
    primary: twColors.gray[900],
    complementary: twColors.white,
    brand: twColors.amber[400],

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],
})
export const vars = { ...root, colors };