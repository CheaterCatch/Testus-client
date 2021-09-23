import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, page, page2 } = props;

  const styles = {bold: bold, color: color, size: size, margin};

  if (page) {
    return (
      <P2 {...styles}>
          {children}
      </P2>
    );
  }

  else if (page2) {
    return (
      <P22 {...styles}>
          {children}
      </P22>
    );
  }

  return (
      <P {...styles}>
          {children}
      </P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#0764f0",
  size: "14px",
  margin: false,
};

const P = styled.p`
  color: "ffffff";
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const P2 = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const P22 = styled.p`
  color: "#f0076c";
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

export default Text;