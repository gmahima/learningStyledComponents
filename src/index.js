import React from "react";
import ReactDOM from "react-dom";
import styled, { CSS } from "styled-components";

import "./styles.css";
const Title = styled.h1`
  font-size: 1.5 em;
  text-align: center;
  color: red;
`;

const Wrapper = styled.section`
  padding: 5 em;
  background: purple;
`;
const Button = styled.button`
  background: ${props => (props.primary ? "brown" : "green")};
`;
function App() {
  return (
    <Wrapper>
      <div className="App">
        <Title>Hello CodeSandbox</Title>
        <Button primary={false}>asdfsf</Button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
