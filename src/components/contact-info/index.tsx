import { ContactType } from "@/types/types"
import styled from "@emotion/styled"
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

const ContactGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-gap: 1rem;
  border: 2px solid blanchedalmond;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5em;
  list-style: none;
`

const ContactInfo = () => {
  const { contactList } = useStaticQuery<QueryType>(CONTACT_QUERY)

  return (
    <ContactGrid>
      {contactList.edges.map(({ node }) => (
        <ContactInfoItem key={node.id} contactData={node} />
      ))}
    </ContactGrid>
  )
}

export default ContactInfo
