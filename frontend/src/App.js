import shark from "./assets/shark.png";
import "./App.css";

import React from "react";
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";

function App() {
  return (
    <>
      <FlexContainerCol>
        <img className="App-logo" src={shark} alt="shark" style={{margin: '5rem'}}/>
        <FlexItem>
          <Typo>상어 밥 주는중...🐟</Typo>
        </FlexItem>
        <FlexItem>
          <a
            className="App-link"
            href="https://github.com/kimsj-git/oracle-cloud-server"
          >
            <FlexContainerRow>
              <Typo>Project Github</Typo>
              <FiGithub style={{ fontSize: "2rem", marginLeft: "5px" }} />
            </FlexContainerRow>
          </a>
        </FlexItem>
        <FlexItem>
          <Typo>
            밥 주는 사람:{" "}
            <a className="App-link" href="https://github.com/kimsj-git">
              김서정
            </a>
          </Typo>
        </FlexItem>
      </FlexContainerCol>
    </>
  );
}

const FlexContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-family: UhBeeBEOJJI;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

export default App;
