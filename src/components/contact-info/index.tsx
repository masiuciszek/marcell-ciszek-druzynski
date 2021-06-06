import { above } from "@/styles/media-query"
import { ContactType } from "@/types/types"
import styled from "@emotion/styled"
import { AnimatePresence, motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ContactInfoItem from "./contact-info-item"

const CONTACT_QUERY = graphql`
  {
    contactList: allContactListJson {
      edges {
        node {
          id
          name
          path
        }
      }
    }
  }
`

interface Node {
  node: ContactType
}
interface QueryType {
  contactList: {
    edges: Node[]
  }
}

const InViewWrapper = styled.div`
  width: 100%;
  min-height: 20rem;
  display: flex;
  align-items: center;
`

const ContactGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5em;
  list-style: none;
  @media ${above.tablet} {
    margin-bottom: 2rem;
  }
`

const variants = (inView: boolean) => {
  return {
    initial: { opacity: 0, x: -1000 },
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -1000,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        // delay: 0.24,
        duration: 0.45,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -1000,
      transition: {
        when: "afterChildren", // let children exit first before parent will run it's thing
      },
    },
  } as const
}

interface ContactInfoProps {
  inView: boolean
}
const ContactInfo = React.forwardRef<HTMLDivElement, ContactInfoProps>(({ inView }, ref) => {
  const { contactList } = useStaticQuery<QueryType>(CONTACT_QUERY)
  return (
    <InViewWrapper ref={ref}>
      <ContactGrid
        layout
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants(inView)}
      >
        <AnimatePresence exitBeforeEnter>
          {inView && (
            <>
              {contactList.edges.map(({ node }, i) => (
                <ContactInfoItem key={node.id} contactData={node} i={i} />
              ))}
            </>
          )}
        </AnimatePresence>
      </ContactGrid>
    </InViewWrapper>
  )
})

export default ContactInfo
