import React from "react";
import styled from "styled-components";

import { Grid } from "./index";

const Input = (props) => {
    const {placeholder, _onChange} = props;
  
  return (
    <React.Fragment>
      <Grid>
        <ElInput placeholder={placeholder} onChange={_onChange}/>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 50%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;