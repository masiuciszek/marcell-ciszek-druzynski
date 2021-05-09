import useToggle from "@/hooks/toggle"
import { elements, elevations } from "@/styles/styled-record"
import { ContactType } from "@/types/types"
import { positiveOrNegative } from "@/util"
import styled from "@emotion/styled"
import { motion, useMotionValue, useTransform } from "framer-motion"
import React from "react"
import { Codepen } from "../icons/codepen"
import { Github } from "../icons/github"
import { Linkedin } from "../icons/linkedin"
import { Twitter } from "../icons/twitter"

interface ContactInfoItemProps {
  contactData: ContactType
  i: number
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
  border-left: 2px solid ${elements.stroke};
  p {
    margin-left: 0.5em;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ contactData, i }) => {
  const { state: isDragging, setToTrue: startDragging, setToFalse: stopDragging } = useToggle()
  const random = positiveOrNegative() * 2
  const y = useMotionValue(0)
  const opacity = useTransform(y, [-200, 0, 200], [0, 1, 0])
  return (
    <StyledContactItem
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={isDragging}
      style={{ y, opacity }}
      whileHover={{ scale: 1.025, rotate: random, boxShadow: elevations.shadowLg }}
      whileTap={{ scale: 0.9 }}
      custom={i}
      animate="visible"
      variants={variants}
      onDragStart={() => startDragging()}
      onDragEnd={(_, info) => {
        if (info.offset.y >= 50) {
          stopDragging()
        }
      }}
    >
      <p>{contactData.name}</p>
      <a href={contactData.path} target="_blank" rel="noreferrer">
        <Icon>{renderIcon(contactData.name)}</Icon>
      </a>
    </StyledContactItem>
  )
}
export default ContactInfoItem
