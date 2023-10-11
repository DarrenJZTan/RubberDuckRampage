import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navlink = style({
  textDecoration: "none",
  margin: vars.space['1x'],
  padding: `${vars.space['1x']} ${vars.space['2x']}`,
  color: vars.colors.complementary,
  borderRadius: 0,
  border: `3px ${vars.colors.complementary} solid`,
  textTransform: "uppercase",
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bolder,
  textAlign: "center",

  ":hover": {
    color: vars.colors.brand,
    backgroundColor: vars.colors.primary,
    border: `3px ${vars.colors.complementary} solid`,
  }
})