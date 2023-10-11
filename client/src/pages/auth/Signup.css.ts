import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const styledGroup = style({
  margin: vars.space["4x"],
})

export const styledLabel = style({
  textAlign: "center",
  fontWeight: vars.fontWeights.bolder,
  fontSize: vars.fontSizes["4x"],
  marginBottom: vars.space["1x"]
})

export const styledInput = style({
  textAlign: "center",
  fontWeight: vars.fontWeights.normal,
  fontSize: vars.fontSizes["3x"],
  border: `2px solid ${vars.colors.grey300}` ,
  color: vars.colors.primary,
  transition: "all 0.2s",

  ":focus": {
    border: `2px solid ${vars.colors.grey400}`,
    boxShadow: "none",
    transform: "scale(1.01)"
  }
})

export const userNav = style({
  marginTop: "1rem",
  paddingTop: "1rem",
  fontSize: "0.9em",
  fontStyle: "italic",
})

globalStyle(`${userNav} a`, {
  textDecoration: "none",
  color: vars.colors.brand,
});

globalStyle(`${userNav} a:hover`, {
  color: vars.colors.brand,
  textDecoration: "underline"
});