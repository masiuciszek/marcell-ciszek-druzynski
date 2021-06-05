import { AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"
import HobbiesImage from "../icons/hobbies"
import NameInJp from "../icons/name-in-jp"
import { H4, RefTarget, Section } from "./styles"

interface HobbiesProps {
  inView: boolean
}
export const Hobbies = React.forwardRef<HTMLDivElement, HobbiesProps>(({ inView }, ref) => (
  <RefTarget ref={ref}>
    <AnimatePresence exitBeforeEnter>
      {inView && (
        <Section
          layout
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ delay: 0.3 }}
          key="slide-hobbies"
        >
          <H4>Hobbies and some more stuff...</H4>
          <p>
            I have all my life been into sports and that’s one of my passions and hobby&apos; s.
            <br />
            When I don&apos; t go out for a long run or so, I like to read and write stuff.
            Sometimes it could just be plain ideas or a blog post where I can share knowledge with
            others.
            <br />I love to developing/programing/creating stuff, it is all about the creative and
            log thinking that makes it so fun, helping others via software is also a bonus.
          </p>
          <p>
            I work both on the client-side and on the server-side, as a{" "}
            <StrokeWrapper>full stack developer</StrokeWrapper>. Creating cool user experiences and
            awesome visible features is awesome and I really enjoy doing that.
          </p>
          <p>
            with tools like <StrokeWrapper>React</StrokeWrapper>,
            <StrokeWrapper>GraphQL</StrokeWrapper>
          </p>
          <p>And the server side logic to get a full completed application.</p>
          <p>
            using tools like <StrokeWrapper>Rust</StrokeWrapper> ,{" "}
            <StrokeWrapper>SQL</StrokeWrapper> and <StrokeWrapper>Java</StrokeWrapper>
          </p>

          <p>
            <strong>I am born and raised in Gothenburg Sweden</strong>
            <br />
            <p>Gothenburg is where I live, work eat and sleep.</p>
          </p>

          <HobbiesImage />
          <NameInJp />
          <p>
            <strong>My hobbies.</strong> I like to exercise I have always been into sports. To get a
            mental break from the computer can be good sometimes, just to do something different,
            nothing beats a long run. <br /> I also have a passion for photography and music.
          </p>
          <p>
            Running in the nature with the camera to captures some awesome{" "}
            <StrokeWrapper>pixels</StrokeWrapper> is unbeatable.
          </p>
          <p>
            To see some of my <StrokeWrapper>pixels(photos)</StrokeWrapper> you can check them out
            att my{" "}
            <Link to="/pixels">
              <StrokeWrapper>pixels gallery</StrokeWrapper>
            </Link>
          </p>
        </Section>
      )}
    </AnimatePresence>
  </RefTarget>
))
