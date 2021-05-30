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
            I like to work both on the client-side and on the server-side. I would say that it all
            depends on what mode you are one. When it is colorful and rainbows and{" "}
            <StrokeWrapper>unicorns</StrokeWrapper> outside then it is a typical, front-end day.{" "}
            <br />
            raining and cloudy outside then I put on my hoodie and start to hack on my machine 😁
            ...it is a typical <StrokeWrapper>hack/server-side</StrokeWrapper> day
          </p>

          <p>
            <strong>I Live in Gothenburg Sweden</strong>
            <br />
            <p>
              Gothenburg is where I am born and raised, I been living in asia for a longer period
              which has been a great experience for me
            </p>
            <p>But home is home</p>
          </p>

          <HobbiesImage />
          <NameInJp />
          <p>
            <strong>My hobbies.</strong> I really like to exercise I have always been into sports
            and to get a mental break from the computer, just to do something different, nothing
            beats a long run.I also have a passion for photography and when have some time over I
            like to run with my camera and take some nice pictures of the nature.
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
