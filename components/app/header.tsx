import styled from "@emotion/styled"
import MarcellLogo from "@components/icons/marcell-logo"
import Navigation from "./nav"
import {above} from "@styles/media-query"
import Link from "next/link"

const StyledHeader = styled.header`
  border: 2px solid red;
  min-height: 10rem;
  display: flex;
  flex-flow: row wrap;

  @media ${above.tablet} {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`

const LogoWrapper = styled.div`
  border: 2px solid red;
  display: inline-block;
  display: flex;
  align-items: center;
  border: 2px solid red;
`

const Header = () => (
  <StyledHeader>
    <LogoWrapper>
      <Link href="/">
        <a>
          <MarcellLogo />
        </a>
      </Link>
    </LogoWrapper>
    <Navigation />
  </StyledHeader>
)

export default Header
