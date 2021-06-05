import React from "react"
import { H4, Section } from "./styles"
import StrokeWrapper from "../common/stroke-wrapper"
import { Welcomes } from "../icons/welcomes"

const getDate = (dateStamp = "10/13/1994"): number => {
  const dateDiff = new Date(dateStamp)
  const date = new Date()
  let age = date.getFullYear() - dateDiff.getFullYear()
  const month = date.getMonth() - dateDiff.getMonth()
  if (month < 0 || (month === 0 && date.getDate() < dateDiff.getDate())) {
    age = age - 1
  }
  return age
}

const focusTopics = ["React", "Node", "GraphQL", "NextJS", "Java", "Rust"]

const Intro = () => {
  const getMyAge = getDate()
  const getTimeSpentPrograming = getDate("10/13/2018")

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
      <Welcomes />
      <p>
        I am a developer from Gotheburg Sweden. I am {getMyAge} years old and been programming for{" "}
        {getTimeSpentPrograming} years
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
