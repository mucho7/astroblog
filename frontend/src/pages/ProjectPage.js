import Layout from "../layout/Layout"
import styled from "styled-components"

const ProjectPage = () => {
  return (
    <Layout>
      <FlexContainerCol>
        <Typo>🐳</Typo>
        <Typo style={{fontSize: "2rem"}}>프로젝트 페이지에요</Typo>
        <Typo style={{fontSize: "1rem"}}>~*~~*~~*~</Typo>
        <Typo style={{fontSize: "1.5rem"}}>5가지 프로젝트 업데이트 예☆정</Typo>
      </FlexContainerCol>
    </Layout>
  )
}

const FlexContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;

  min-height: 90vh;
`

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FlexItem = styled.div`
  margin: 1rem 0 1rem 0;
`

const Typo = styled.p`
  font-family: UhBeeBEOJJI;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`

export default ProjectPage
