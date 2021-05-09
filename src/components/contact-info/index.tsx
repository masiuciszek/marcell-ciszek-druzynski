import { ContactType } from "@/types/types"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
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

const ContactGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5em;
  list-style: none;
`

const variants = {
  initial: { opacity: 0, x: "-100" },
  visible: {
    opacity: 1,
    x: 0,
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
    x: "100",
    transition: {
      when: "afterChildren", // let children exit first before parent will run it's thing
    },
  },
} as const

const ContactInfo = () => {
  const { contactList } = useStaticQuery<QueryType>(CONTACT_QUERY)
  

  return (
    <ContactGrid initial="initial" animate="visible" exit="exit" variants={variants}>
      {contactList.edges.map(({ node }, i) => (
        <ContactInfoItem key={node.id} contactData={node} i={i} />
      ))}
    </ContactGrid>
  )
}

export default ContactInfo
