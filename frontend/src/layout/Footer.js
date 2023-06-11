import styled from "styled-components";
import { darken } from "polished";

import { GoMarkGithub } from "react-icons/go";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FlexContainerRow>
          <FlexIcon>
            <a href="https://github.com/kimsj-git">
              <GithubIcon size={30} />
            </a>
          </FlexIcon>
          <FlexIcon>
            <a href="mailto:kimsj.py@gmail.com">
              <GmailIcon size={30} />
            </a>
          </FlexIcon>
        </FlexContainerRow>
        <Typo>© 2023. Kim Suhjeong. All rights reserved.</Typo>
      </FooterContainer>
    </footer>
  );
};

const GithubIcon = styled(GoMarkGithub)`
  color: #eff0f0;
  &:hover {
    color: ${darken(0.1, "#eff0f0")};
  }
`;

const GmailIcon = styled(SiGmail)`
  color: #eff0f0;
  &:hover {
    color: ${darken(0.1, "#eff0f0")};
  }
`;

const FooterContainer = styled.div`
  background-color: #24292f;
  padding: 2rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexIcon = styled.div`
  margin: 0 0.5rem 0 0.5rem;
`;

const Typo = styled.p`
  // font-family: UhBeeBEOJJI;
  font-size: 15px;
  color: #eff0f0;
  margin: 1rem;
`;

export default Footer;
