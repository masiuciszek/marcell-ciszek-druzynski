interface Colors {
  dark: string
  darkBlue: string
  darkBlue2: string
  darkBlueMain: string
  lightBlue: string
  grey: string
  greyDark: string
  white: string
}

const colors: Colors = {
  dark: "var(--dark)",
  darkBlue: "var(--dar-blue)",
  darkBlue2: "var(--dark-blue-2)",
  darkBlueMain: "var(--dark-blue-main)",
  lightBlue: "var(--light-blue)",
  grey: "var(--grey)",
  greyDark: "(var--dark-grey)",
  white: "var(--white)",
}

const baseColors = {
  background: "var(--background)",
  p: "var(--p)",
  a: "var(--a)",
  stroke: "var(--stroke)",
  highlightShadow: "var(--highlight-shadow)",
}

interface Elements {
  background: string
  p: string
  a: string
  maxWidth: string
  borderRadiusS: string
  btnBackgroundOne: string
  btnBackgroundTwo: string
  highlightShadow: string
  stroke: string
}

const elements: Elements = {
  background: "var(--background)",
  p: "var(--p)",
  a: "var(--a)",
  maxWidth: "var(--max-width)",
  borderRadiusS: "var(--border-radius-s)",
  btnBackgroundOne: "var(--btn-bg-1)",
  btnBackgroundTwo: "var(--btn-bg-2)",
  highlightShadow: "var(--highlight-shadow)",
  stroke: "var(--stroke)",
}

const transition = {
  main: "var(--main-trans)",
}

interface Elevations {
  shadowXs: string
  shadowS: string
  shadowSh: string
  shadowM: string
  shadowL: string
  shadowLg: string
  shadowXl: string
  shadowInner: string
  shadowOutline: string
}
const elevations: Elevations = {
  shadowXs: "var(--sh-xs)",
  shadowS: "var(--sh-s)",
  shadowSh: "var(--sh)",
  shadowM: "var(--sh-m)",
  shadowL: "var(--sh-l)",
  shadowLg: "var(--sh-lg)",
  shadowXl: "var(--sh-xl)",
  shadowInner: "var(--sh-inner)",
  shadowOutline: "var(--sh-outline)",
}

export { colors, elements, elevations, transition, baseColors }
