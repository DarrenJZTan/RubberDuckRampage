import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const button = style({
  textDecoration: "none",
  margin: vars.space['1x'],
  padding: `${vars.space['1x']} ${vars.space['4x']}`,
  color: vars.colors.complementary,
  borderRadius: "0.2em",
  border: `${vars.colors.brand} 4px solid`,
  textTransform: "uppercase",
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bolder,
  textAlign: "center",
  transition: "0.2s ease-in",

  ":hover": {
    backgroundColor: vars.colors.brand,
    color: vars.colors.primary
  }
})