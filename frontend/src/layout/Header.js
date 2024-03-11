import styled from "styled-components";
import { lighten } from "polished";
import terminal_icon from "../assets/terminal_icon.png";

import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (page) => {
    if (location.pathname !== page) {
      switch (page) {
        case "/project/":
          navigate("/project/");
          break;
        case "/":
          navigate("/");
          break;
      }
    }
  };

  return (
    <header>
      <HeaderContainer>
        <FlexItem style={{ display: "flex", alignItems: "center" }}>
          <img
            src={terminal_icon}
            alt="shark"
            style={{ height: "2.5rem", cursor: "pointer", marginRight: "1rem" }}
            onClick={() => {
              handleNav("/");
            }}
          />
          <NavItemTypo>KIMSJ's Portfolio</NavItemTypo>
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
  justify-content: space-between;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexItem = styled.div`
  margin: 0 1rem 0 1rem;
`;

const NavItemTypo = styled.p`
  font-family: UhBeeZZIBA-Regular;
  font-size: 22px;
  color: #24292f;
  // margin: 1rem;
  cursor: pointer;

  &:hover {
    color: ${lighten(0.5, "#24292f")};
  }
`;

const CustomLink = styled.a`
  text-decoration: none;
`;

export default Header;
