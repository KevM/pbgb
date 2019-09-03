import Typography from "typography"
import sternGrove from "typography-theme-stern-grove"

delete sternGrove.googleFonts

const typography = new Typography(sternGrove)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
