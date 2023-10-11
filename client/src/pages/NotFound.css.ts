import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css';

export const notFoundBox = style({
  marginTop: "1rem",
  minHeight: "60vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
}) 

export const notFoundHeading = style({
  padding: vars.space['1x'],
  marginBottom: vars.space['1x'],
  fontSize: vars.fontSizes['6x'],
  fontWeight: vars.fontWeights.normal,
  color: vars.colors.complementary,
})

export const twinBox = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  margin: vars.space['4x'],
})

globalStyle(`${twinBox} img`, {
  width: `700px`,
}) 

globalStyle(`${twinBox} a`, {
  padding: vars.space['5x'],
  fontSize: vars.fontSizes['5x'],  
  fontWeight: vars.fontWeights.normal,
  color: vars.colors.complementary,
  textDecoration: "none",
});

globalStyle(`${twinBox} a:hover`, {
  color: vars.colors.brand,
  fontWeight: vars.fontWeights.bold
});