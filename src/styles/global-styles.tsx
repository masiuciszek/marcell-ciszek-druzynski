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
          --dark-blue-shadow: rgba(19, 32, 53, 0.85);
          --light-blue: #81a7ff;
          --light-blue-xs: #9eddf8;
          --light-blue-shadow: rgba(127, 167, 255, 0.45);
          --light-blue-shadow-higher-opacity: rgba(127, 167, 255, 0.85);
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
          --box-background: var(--dark-blue);
          --box-text: var(--dark-blue);
          --filler: var(--light-blue-xs);
          --bg-shadow: var(--dark-blue-shadow);

          /* Typography */
          --h1: 3.052rem;
          --h2: 2.441rem;
          --h3: 1.953rem;
          --h4: 1.563rem;
          --h5: 1.25rem;
          --p-size: 1rem;
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

          /* fonts */

          --fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          --operator-mono: "HCo Operator Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          --operator-mono-code: "HCo Operator Mono";
          --operator-mono-masiu: "Operator Mono", "Inconsolata", Consolas, Monaco, "Andale Mono",
            "Ubuntu Mono", monospace;
          --just-mono: "Operator mono";
          --rednika: "radnika", sans-serif;
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
          font-family: var(--fallback);
          font-weight: 400;
          line-height: 1.75;
          background: var(--background);
          color: var(--p);
          font-family: var(--operator-mono);
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
          --box-background: var(--grey);
          --box-text: var(--dark-blue-2);
          --filler: var(--dark-blue);
          --bg-shadow: var(--dark-blue-shadow);
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
          --box-background: var(--dark-blue);
          --box-text: var(--white);
          --filler: var(--light-blue-xs);
          --bg-shadow: var(--light-blue-shadow-higher-opacity);
        }

        p {
          margin-bottom: 1rem;
          font-size: var(--p-size);
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(--rednika);
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

        /* Scrollbar Styles */
        body::-webkit-scrollbar {
          width: 12px;
        }

        #circle {
          fill: var(--circle);
        }
        #a,
        #header-icon {
          fill: var(--p);
        }
      `}
    />
  )
}
