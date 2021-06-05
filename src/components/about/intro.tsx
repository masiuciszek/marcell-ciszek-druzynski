import React from "react"
import { H4, Section } from "./styles"
import StrokeWrapper from "../common/stroke-wrapper"
import { Welcomes } from "../icons/welcomes"
import { css } from "@emotion/css"

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

const welcomeStyles = css``

const focusTopics = ["React", "Node", "GraphQL", "NextJS", "Java", "Rust"]

const Intro = () => {
  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: [1, 1.02, 1.02, 1, 1],
        rotate: [0, 0, 2, 2, 0],
      }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
    >
      <H4>Short about me...</H4>
      {/* <StaticImage
        src="../../images/fantasy.jpg"
        alt="me at work"
        width={800}
        placeholder="tracedSVG"
        layout="constrained"
        backgroundColor={elements.filler}
      /> */}
      <Welcomes className={welcomeStyles} />
      <p>
        I am a developer from Gotheburg Sweden. I am {getDate()} years old and been programming for{" "}
        {getDate("10/13/2018")} years
      </p>

      <p>
        I working as <StrokeWrapper>software developer</StrokeWrapper> and creating stuff is what I
        like the most.
        <br /> Learning new technologies and sharing with others is what make me happy, my mane
        focus right now is:
      </p>

      <ul>
        {focusTopics.map((focus) => (
          <li key={focus}>{focus}</li>
        ))}
      </ul>
    </Section>
  )
}

export default Intro
