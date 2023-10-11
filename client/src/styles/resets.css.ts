import { globalStyle } from '@vanilla-extract/css';
import { vars } from  './themes.css'

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  background: vars.colors.primary
})

// Set core root defaults
globalStyle("html:focus-within", {
  scrollBehavior: "smooth"
})

// Set core body defaults
globalStyle("body", {
  minHeight: "100vh",
  textRendering: "optimizeSpeed",
  lineHeight: 1.5,
  // ...
});

// Set core anchor settings
globalStyle("a", {
  textDecoration: "none",
  color: vars.colors.complementary,
});

// Make images easier to work with
globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block"
});

// Inherit fonts for inputs and buttons
globalStyle("input, button, textarea, select", {
  font: "inherit"
})