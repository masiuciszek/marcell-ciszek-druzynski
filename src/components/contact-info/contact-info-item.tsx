import { ContactType } from "@/types/types"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"
import { Codepen } from "../icons/codepen"
import { Github } from "../icons/github"
import { Linkedin } from "../icons/linkedin"
import { Twitter } from "../icons/twitter"

interface ContactInfoItemProps {
  contactData: ContactType
}

const renderIcon = (contactDataName: string) => {
  switch (contactDataName.toLowerCase()) {
    case "github":
      return <Github />
    case "twitter":
      return <Twitter />
    case "linkedin":
      return <Linkedin />
    case "codepen":
      return <Codepen />
    default:
      throw new Error(`could not find icon with name ${contactDataName}`)
  }
}

const StyledContactItem = styled(motion.li)`
  border: 2px solid red;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
`

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ contactData }) => {
  return (
    <StyledContactItem>
      <p>{contactData.name}</p>
      <Icon>{renderIcon(contactData.name)}</Icon>
    </StyledContactItem>
  )
}
export default ContactInfoItem
