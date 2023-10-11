import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';
import { gray, inherit } from 'tailwindcss/colors';

export const navbar = style({
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.primary,
  padding: `${vars.space['2x']} 0`,
  borderBottom: `1px solid ${vars.colors.grey300}`,
})

export const brandLink = style({
  display: 'flex',
  flexDirection: "row",
  gap: vars.space['2x'],
  alignItems: "center",
  color: vars.colors.complementary,
  textTransform: "uppercase",
  ":hover": {
    color: vars.colors.complementary
  }
})

export const logo = style({
  width: 60,
})

export const logoTextBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
  marginTop: "5px"
})

export const brand = style({
  fontSize: vars.fontSizes["4x"],
  fontWeight: vars.fontWeights.bolder,
  lineHeight: "20px"
})

export const brandSub = style({
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.light,
})

export const navLink = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes["3x"],
  textTransform: "uppercase",
  fontWeight: vars.fontWeights.normal,

  ":hover": {
    color: vars.colors.brand
  }
})