import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const button = style({
  textDecoration: "none",
  padding: `${vars.space['1x']} ${vars.space['2x']}`,
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  borderRadius: 0,
  border: "none",
  textTransform: "uppercase",
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bolder,
  textAlign: "center",


  ":hover": {
    color: vars.colors.complementary,
    backgroundColor: vars.colors.primary,
  }
})