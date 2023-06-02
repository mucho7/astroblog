import styled from "styled-components"
import { lighten } from "polished"
import terminal_icon from "../assets/terminal_icon.png"

import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {
  const inProgress = () => {
    alert("준비 중입니다. \u{1F30A}\u{1F30A}")
  }

  const location = useLocation()
  const navigate = useNavigate()

  const handleNav = (page) => {
    // console.log(location.pathname)
    if (location.pathname !== page) {
      switch (page) {
        case "/project/":
          navigate("/project/")
          break
        case "/":
          navigate("/")
          break
      }
    }
  }

  return (
    <header>
      <HeaderContainer>
        <FlexItem>
          <img
            src={terminal_icon}
            alt="shark"
            style={{ height: "2.5rem", cursor: "pointer"}}
            onClick={() => {handleNav("/")}}
          />
        </FlexItem>
          <FlexItem>
            <NavItemTypo onClick={inProgress}>ABOUT</NavItemTypo>
          </FlexItem>
          <FlexItem>
            <NavItemTypo onClick={() => handleNav("/project/")}>
              PROJECT
            </NavItemTypo>
          </FlexItem>
          <FlexItem>
            <CustomLink href="https://github.com/kimsj-git">
              <NavItemTypo>GITHUB</NavItemTypo>
            </CustomLink>
          </FlexItem>
      </HeaderContainer>
    </header>
  )
}

const HeaderContainer = styled.div`
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FlexItem = styled.div`
  margin: 0 1rem 0 1rem;
`

const NavItemTypo = styled.p`
  font-family: UhBeeSkyrain;
  font-size: 20px;
  color: #24292f;
  // margin: 1rem;
  cursor: pointer;

  &:hover {
    color: ${lighten(0.5, "#24292f")};
  }
`

const CustomLink = styled.a`
  text-decoration: none;
`

export default Header
