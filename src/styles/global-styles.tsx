import * as React from "react"
import { Global, css } from "@emotion/react"
import { pxToRem } from "./css-utils"

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          /* colors */
          --dark-main: #384357;
          --dark-blue: #222f44;
          --dark-blue-2: #0e182a;
          --dark-blue-main: #132035;
          --dark-blue-main-shadow: rgba(19, 32, 53, 0.45);
          --light-blue: #81a7ff;
          --light-blue-shadow: rgba(127, 167, 255, 0.45);
          --grey: #e2e8f0;
          --grey-dark: #718096;
          --white: #fff;

          /* elements */
          --background: var(--dark-blue-main);
          --p: var(--white);
          --a: var(--grey);
          --stroke: var(--light-blue);
          --highlight-shadow: var(--light-blue-shadow);
          --btn-bg-1: var(--light-blue);
          --btn-bg-2: var(--dark-blue);
          --circle: var(--dark-blue);

          /* Typography */
          --h1: 3.052rem;
          --h2: 2.441rem;
          --h3: 1.953rem;
          --h4: 1.563rem;
          --h5: 1.25rem;
          --small: 0.8rem;

          /* Element-size */
          --header-size: 6rem;
          --a-size: ${pxToRem(16)};

          /* border-radius */
          --border-radius-s: 4px;

          /* transition */
          --main-trans: 300ms ease all;

          /* elevations */
          --sh-xs: 0 0 0 1px var(--transparentDark);
          --sh-s: 0 1px 2px 0 var(--transparentDark);
          --sh: 0 1px 3px 0 var(--transparentDark2), 0 1px 2px 0 var(--transparentDark3);
          --sh-m: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --sh-l: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --sh-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --sh-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
          --sh-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --sh-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);

          /* elements */
          --max-width: 970px;
        }
        *::before,
        *::after,
        * {
          box-sizing: inherit;
        }
        html {
          box-sizing: border-box;
          font-size: 100%;
          /* 16px */
        }
        body {
          margin: 0;
          padding: 0;
          font-family: "HCo Operator Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-weight: 400;
          line-height: 1.75;
          background: var(--background);
          color: var(--p);
        }

        body[data-theme="light"] {
          --background: var(--white);
          --p: var(--dark-blue-2);
          --stroke: var(--light-blue);
          --a: var(--dark-blue-2);
          --highlight-shadow: var(--dark-blue-main-shadow);
          --btn-bg-1: var(--light-blue);
          --btn-bg-2: var(--dark-blue);
          --circle: var(--dark-blue);
        }
        body[data-theme="dark"] {
          --background: var(--dark-blue-main);
          --p: var(--white);
          --stroke: var(--light-blue);
          --a: var(--white);
          --highlight-shadow: var(--light-blue-shadow);
          --btn-bg-1: var(--light-blue);
          --btn-bg-2: var(--dark-blue);
          --circle: var(--light-blue);
        }

        p {
          margin-bottom: 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "radnika", sans-serif;
          font-weight: normal;
          font-style: italic;
        }

        h1 {
          margin-top: 0;
          font-size: var(--h1);
        }

        h2 {
          font-size: var(--h2);
        }

        h3 {
          font-size: var(--h3);
        }

        h4 {
          font-size: var(--h4);
        }

        h5 {
          font-size: var(--h5);
        }

        small {
          font-size: var(--small);
        }

        p,
        ul,
        ol {
          line-height: 1.7;
          font-weight: 400;
        }

        ul {
          list-style-type: square;
        }
        code,
        kbd,
        samp {
          font-family: "HCo Operator Mono";
          font-weight: 300;
        }

        a {
          text-decoration: none;
          color: var(--a);
        }

        #circle {
          fill: var(--circle);
        }
      `}
    />
  )
}
