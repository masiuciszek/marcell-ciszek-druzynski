import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"
import { H4, Section } from "./styles"

export const Hobbies = () => {
  return (
    <Section>
      <H4>More things to know, if you want of course...</H4>
      <p>
        I have all my life been into sports and that’s one of my passions and hobby&apos;s.
        <br />
        Then I discovered programing and I felt in love since then. I have a big passion for
        developing/programing/creating stuff.
      </p>
      <p>
        I like to work both on the client-side and on the server-side. I would say that it all
        depends on what mode you are one. When it is colorful and rainbows and{" "}
        <StrokeWrapper>unicorns</StrokeWrapper> outside then it is a typical, front-end day. <br />
        raining and cloudy outside then it is a typical hack/server-side day
      </p>
    </Section>
  )
}
