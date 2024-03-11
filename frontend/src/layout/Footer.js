import styled from "styled-components";
import { darken } from "polished";

import { GoMarkGithub } from "react-icons/go";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <HorizontalRule />
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
        <Typo>© 2024. Kim Suhjeong. All rights reserved.</Typo>
      </FooterContainer>
    </footer>
  );
};

const GithubIcon = styled(GoMarkGithub)`
  color: #6b728e;
  &:hover {
    color: ${darken(0.1, "#6B728E")};
  }
`;

const GmailIcon = styled(SiGmail)`
  color: #6b728e;
  &:hover {
    color: ${darken(0.1, "#6B728E")};
  }
`;

const FooterContainer = styled.div`
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
  font-size: 15px;
  color: #6b728e;
  margin: 1rem;
`;

const HorizontalRule = styled(FlexContainerRow)`
  border-top: 1px solid #6b728e;
  width: 90%;
  margin-bottom: 1rem;
`;

export default Footer;
