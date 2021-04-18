import { css } from "@emotion/react"
import blackgrit from "../images/blackgrit.png"
import whitegrit from "../images/whitegrit.png"

export const strains = css`
  background: var(--highlight-shadow) url(${blackgrit});
  background-size: 550px;
  transform: rotate(1deg) scale(1);
  position: relative;
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(${whitegrit}) top left, url(${whitegrit}) bottom right;
    background-size: 550px;
    pointer-events: none;
  }
`
