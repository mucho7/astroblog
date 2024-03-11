import Layout from "../layout/Layout";

import shark from "../assets/shark.png";
import profile_img from "../assets/profile_img.jpg";

import styled from "styled-components";
import { darken } from "polished";

const MainPage = () => {
  const linkToResume = () => {
    // window.location.href = "/resume.pdf"
    // window.open("/resume.pdf")
  };
  const linkToGithub = () => {
    window.open("https://github.com/kimsj-git");
  };
  const linkToBlog = () => {
    window.open("https://babyshark.tistory.com/");
  };

  return (
    <Layout>
      <FlexContainerCol style={{ minHeight: "70vh" }}>
        <FlexContainerRow style={{ width: "60%" }}>
          <FlexItem
            style={{
              margin: "0.5rem",
              borderRadius: "50%",
              boxShadow: "5px 5px 5px 5px gainsboro",
            }}
          >
            <img
              src={profile_img}
              style={{ height: "14rem", borderRadius: "50%" }}
            />
          </FlexItem>
          <FlexContainerCol style={{ margin: "0.5rem" }}>
            <img
              className="App-logo"
              src={shark}
              alt="shark"
              style={{ margin: "1rem", height: "4rem" }}
            />
            <Typo style={{ fontSize: "1.3rem" }}>안녕하세요</Typo>
            <Typo>웹 개발자 김서정입니다.</Typo>
          </FlexContainerCol>
        </FlexContainerRow>
        <FlexContainerCol
          style={{ width: "80%", alignItems: "start", margin: "2rem 0 1rem 0" }}
        >
          <TypoAboutMe style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            About Me
          </TypoAboutMe>
          <TypoAboutMe>
            💡 코드 실행 도중 에러를 마주하면? 배울게 하나 늘어서 오히려 좋아요.
          </TypoAboutMe>
          <TypoAboutMe>
            💡 이게 왜 안됨? 이건 왜 됨?? 실행되면 끝이 아니라 동작 원리를
            알고싶어요.
          </TypoAboutMe>
          <TypoAboutMe>
            💡 이 기술을 써야하는 이유는? 아무리 좋은 기술 스택이라도 우리
            프로젝트에 적용할땐 이유가 필요해요.
          </TypoAboutMe>
          <TypoAboutMe>
            🚀 주니어 개발자로 아직 부족한 점이 많지만, 부족하다는 사실이 저를
            불안하게 하지 않고 그만큼 배울 것이 많다고 생각되어 즐겁습니다. 이
            즐거움이 제가 개발을 지속할 수 있는 원동력이라고 생각합니다.
          </TypoAboutMe>
        </FlexContainerCol>
        <FlexItem>
          <ColorButton onClick={linkToResume} bgColor="#61affe">
            Resume
          </ColorButton>
          <ColorButton onClick={linkToGithub} bgColor="#49cc90">
            Github
          </ColorButton>
          <ColorButton onClick={linkToBlog} bgColor="#fca130">
            Blog
          </ColorButton>
        </FlexItem>
      </FlexContainerCol>
    </Layout>
  );
};

const FlexContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexItem = styled.div`
  margin: 1rem 0 1rem 0;
`;

const Typo = styled.p`
  font-family: Gowun Dodum;
  font-size: 1.5rem;
  word-break: keep-all;
  text-align: center;
  margin: 0;
`;

const TypoAboutMe = styled.p`
  font-family: Gowun Dodum;
  font-size: 18px;
  word-break: keep-all;
  text-align: justify;
  margin: 5px 0 5px 0;
`;

const ColorButton = styled.button`
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  width: 7rem;

  &:hover {
    background-color: ${(props) => darken(0.1, props.bgColor)};
  }

  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: UhBeeBEOJJI;
`;

export default MainPage;
