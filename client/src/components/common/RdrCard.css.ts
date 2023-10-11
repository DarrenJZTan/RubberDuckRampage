import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';
import { brand } from '../layout/Header.css';

export const generalForm = style({
  minWidth: "60vw"
})

export const authForm = style({
  minWidth: "40vw"
})

export const container = style({
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  marginTop: `${vars.space["4x"]}`,
  marginBottom: `${vars.space["6x"]}`
})

export const leadCard = style({
  background: vars.colors.primary,
  color: vars.colors.complementary,
  margin: `auto`,
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: `0px 1px 20px 1px ${vars.colors.complementary}, ${vars.colors.complementary} 0px 0px 0px 1px`,
  textAlign: "center",
})

export const cardTitle = style({
  color: vars.colors.brand,
  paddingBottom: "1rem",
  fontSize: "2em",
  fontWeight: vars.fontWeights.bold
})