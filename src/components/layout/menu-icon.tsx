import { buttonResetStyles } from "@/styles/css-utils"
import { elements, elevations } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

interface MenuIconProps {
  isOpen: boolean
  toggleIsOpen: () => void
}

const MenuIconWrapper = styled(motion.button)`
  ${buttonResetStyles};
  position: absolute;
  width: 2rem;
  height: 1.35rem;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  .nav-icon-part:nth-of-type(1) {
    box-shadow: ${elevations.shadowM};
    width: 100%;
  }
  .nav-icon-part:nth-of-type(2) {
    box-shadow: ${elevations.shadowM};
    width: 100%;
  }
  .nav-icon-part:nth-of-type(3) {
    box-shadow: ${elevations.shadowM};
    width: 100%;
  }
  .nav-icon-part {
  }
`
// TODO: WIP, change to SVG
// TODO: WIP, use variants
const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, toggleIsOpen }) => {
  return (
    <MenuIconWrapper
      data-testid="header-menu-icon"
      type="button"
      aria-pressed={isOpen}
      onClick={toggleIsOpen}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        top: isOpen ? "1.8rem" : "1.3rem",
        right: isOpen ? "1rem" : "5rem",
        position: isOpen ? "fixed" : "absolute",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="nav-icon-part"
        animate={{
          rotate: isOpen ? 120 : 0,
          width: isOpen ? "1.8rem" : "90%",
          height: "0.2rem",
          backgroundColor: isOpen ? elements.background : elements.stroke,
        }}
      />
      <motion.div
        className="nav-icon-part"
        animate={{
          height: "0.2rem",
          scale: isOpen ? 0 : 1,
          opacity: isOpen ? 0 : 1,
          backgroundColor: isOpen ? elements.background : elements.stroke,
          // x: isOpen ? "1000%" : 0,
        }}
      />
      <motion.div
        className="nav-icon-part"
        animate={{
          rotate: isOpen ? -120 : 0,
          width: isOpen ? "1.8rem" : "88%",
          height: "0.2rem",
          position: isOpen ? "absolute" : "static",
          backgroundColor: isOpen ? elements.background : elements.stroke,
        }}
      />
    </MenuIconWrapper>
  )
}
export default MenuIcon
