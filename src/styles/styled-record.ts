interface Colors {
  dark: string
  darkBlue: string
  darkBlue2: string
  darkBlueMain: string
  lightBlue: string
  grey: string
  greyDark: string
  white: string
  stroke: string
  highlightShadow: string
}

const colors: Colors = {
  dark: "var(--dark)",
  darkBlue: "var(--dark-blue)",
  darkBlue2: "var(--dark-blue-2)",
  darkBlueMain: "var(--dark-blue-main)",
  lightBlue: "var(--light-blue)",
  grey: "var(--grey)",
  greyDark: "(var--dark-grey)",
  white: "var(--white)",
  stroke: "var(--stroke)",
  highlightShadow: "var(--highlight-shadow)",
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
  filler: string
  fillerStroke: string
  boxBackground: string
  boxText: string
  bgShadow: string
  tableBg: string
  tableText: string
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
  filler: "var(--filler)",
  fillerStroke: "var(--filler-stroke)",
  boxBackground: "var(--box-background)",
  boxText: "var(--box-text)",
  bgShadow: "var(--bg-shadow)",
  tableBg: "var(--table-bg)",
  tableText: "var(--table-text)",
}

const transition = {
  main: "var(--main-trans)",
}

interface Sizes {
  h1: "var(--h1)"
  h2: "var(--h2)"
  h3: "var(--h3)"
  h4: "var(--h4)"
  h5: "var(--h5)"
  p: "var(--p-size)"
  small: "var(--small)"
}

export const sizes: Sizes = {
  h1: "var(--h1)",
  h2: "var(--h2)",
  h3: "var(--h3)",
  h4: "var(--h4)",
  h5: "var(--h5)",
  p: "var(--p-size)",
  small: "var(--small)",
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

interface Fonts {
  fallback: string
  operatorMono: string
  operatorMonoCode: string
  operatorMonoMasiu: string
  justMono: string
  rednika: string
}

const fonts: Fonts = {
  fallback: "var(--fallback)",
  operatorMono: "var(--operator-mono)",
  operatorMonoCode: "var(--operator-mono-code)",
  operatorMonoMasiu: "var(--operator-mono-masiu)",
  justMono: "var(--just-mono)",
  rednika: "var(--rednika)",
}

export { colors, elements, elevations, transition, baseColors, fonts }
