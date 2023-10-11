import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from '../../styles/themes.css';


export const app = style({
  fontFamily: vars.fonts.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
})

export const appContent = style({
  margin: `${vars.space["2x"]} 0`,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

globalStyle(`.Toastify__toast`, {
  background: "none",
  margin: 0,
  color: vars.colors.error,
  fontSize: vars.fontSizes["3x"],
  height: "100px"
})