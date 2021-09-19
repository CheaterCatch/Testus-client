import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width} = props;

  const styles = {
    margin: margin,
    width: width,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton {...styles} onClick={_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = { // 버튼 스타일 없을 때 디폴트 디자인 값
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '30%',
};

const ElButton = styled.button` // 로그인 버튼 디자인
  width: ${(props) => props.width};
  background-color: #0D6EFD;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const FloatButton = styled.button` // 카톡 로그인 버튼 디자인
    width: ${(props) => props.width};
    background-color: #ffd400;
    text-color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

// const FloatButton = styled.button` // 동그란 버튼 만들기
//   width: ${(props) => props.width};
// //   height: 50px;
//   background-color: #ffd400;
//   color: #ffffff;
//   padding: 12px 0px;
//   box-sizing: border-box;
// //   font-size: 36px;
// //   font-weight: 800;
// //   position: fixed;
// //   bottom: 50px;
// //   right: 16px;
// //   text-align: center;
// //   vertical-align: middle;
//   border: none;
// //   border-radius: 50px;
// `;

export default Button;