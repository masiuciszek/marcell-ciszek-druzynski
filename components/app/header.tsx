import React from "react"
import styled from "@emotion/styled"
import MarcellLogo from "@components/icons/marcell-logo"

const StyledHeader = styled.header`
  border: 2px solid red;
  min-height: 10rem;
`

const LogoWrapper = styled.div`
  border: 2px solid red;
`

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <MarcellLogo />
      </LogoWrapper>
    </StyledHeader>
  )
}

export default Header
