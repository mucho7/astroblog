import styled from "styled-components";
import { lighten } from "polished";

const Header = () => {
	const inProgress = () => {
		alert("준비 중입니다. \u{1F30A}\u{1F30A}\u{26F5}")
	}

  return (
    <header>
      <HeaderContainer>
        <FlexItem>
          <NavItemTypo onClick={inProgress}>ABOUT</NavItemTypo>
        </FlexItem>
        <FlexItem>
          <NavItemTypo onClick={inProgress}>PROJECT</NavItemTypo>
        </FlexItem>
        <FlexItem>
          <CustomLink href="https://github.com/kimsj-git">
            <NavItemTypo>GITHUB</NavItemTypo>
          </CustomLink>
        </FlexItem>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.div`
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexItem = styled.div`
  margin: 0 0.5rem 0 0.5rem;
`;

const NavItemTypo = styled.p`
  font-family: UhBeeSkyrain;
  font-size: 20px;
  color: #24292f;
  // margin: 1rem;
  cursor: pointer;

  &:hover {
    color: ${lighten(0.5, "#24292f")};
  }
`;

const CustomLink = styled.a`
	text-decoration: none;
`

export default Header;
