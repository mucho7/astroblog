import styled from 'styled-components'
import { darken, lighten } from 'polished'

const SendRequest = () => {
  const handleRequest = async (event) => {
		try {
			const response = await fetch("https://kimsj.dev/api/v1/hello", {
				method: "GET"
			})
			if (response.ok) {
				console.log('GET request successful.')
				const data = await response.json()
				console.log(data.msg)
			} else {
				console.error('GET request failed.')
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

  return <FlexContainerCol>
		<Typo>Swagger style buttons</Typo>
    <RequestButton onClick={handleRequest} bgColor="#61affe">GET</RequestButton>
    <RequestButton onClick={handleRequest} bgColor="#49cc90">POST</RequestButton>
    <RequestButton onClick={handleRequest} bgColor="#fca130">PUT</RequestButton>
    <RequestButton onClick={handleRequest} bgColor="#f93e3e">DELETE</RequestButton>
  </FlexContainerCol>;
};

const RequestButton = styled.button`
	background-color: ${props => props.bgColor};
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	margin: 5px;
	width: 7rem;

	&:hover {
		background-color: ${props => darken(0.1, props.bgColor)};
	}

	text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
	font-family: UhBeeBEOJJI;
`
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
`;

export default SendRequest