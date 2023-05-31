import { useState } from "react";
import shark from "./assets/shark.png";
import "./App.css";
import Layout from "./layout/Layout";
import SendRequest from "./components/SendRequest";

import React from "react";
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { SiFastapi } from "react-icons/si";

function App() {
  return (
    <Layout>
      <FlexContainerCol>
        <img
          className="App-logo"
          src={shark}
          alt="shark"
          style={{ margin: "2rem" }}
        />
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
              <FiGithub style={{ fontSize: "1.5rem", marginLeft: "5px" }} />
            </a>
          </Typo>
        </FlexItem>
        <FlexItem
          style={{
            backgroundColor: "#fafafa",
            width: "100%",
            boxShadow: "0 1px 2px 0 rgba(0,0,0,.15), 0 -1px 2px 0 rgba(0,0,0,.15)",
            padding: "2rem",
          }}
        >
          <FlexContainerCol>
            <SiFastapi size={50} color="#009485" />
            <SendRequest />
          </FlexContainerCol>
        </FlexItem>
      </FlexContainerCol>
    </Layout>
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
