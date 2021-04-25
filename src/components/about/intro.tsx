import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { H4, Section } from "./styles"
import StrokeWrapper from "../common/stroke-wrapper"

const getDate = (dateStamp = "10/13/1995"): number => {
  const dateDiff = new Date(dateStamp)
  const date = new Date()
  let age = date.getFullYear() - dateDiff.getFullYear()
  const month = date.getMonth() - dateDiff.getMonth()
  if (month < 0 || (month === 0 && date.getDate() < dateDiff.getDate())) {
    age = age - 1
  }

  return age
}

const Intro = () => {
  return (
    <Section>
      <H4>Short about me...</H4>
      <StaticImage
        src="../../images/intro2.png"
        alt="me at work"
        width={800}
        placeholder="tracedSVG"
        layout="constrained"
      />
      <p>
        I am a developer from Gotheburg Sweden. I am {getDate()} years old and been programming for{" "}
        {getDate("10/13/2018")} years
      </p>

      <p>
        I working as <StrokeWrapper>fullstack developer</StrokeWrapper> and creating stuff is what I
        like the most.
        <br /> Learning new technologies and sharing with others is what make me happy, my mane
        focus right now is:
      </p>

      <ul>
        <li>React</li>
        <li>Node</li>
        <li>GraphQL</li>
        <li>NextJS</li>
        <li>Java</li>
        <li>Typescript</li>
      </ul>
    </Section>
  )
}

export default Intro
