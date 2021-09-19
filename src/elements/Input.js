import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
    const {placeholder, _onChange, label} = props;

    // if (type="radio") {
    //   return (
    //     <React.Fragment>
    //       <RadioInput></RadioInput>
    //     </React.Fragment>
    //   );
    // }
  
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
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

// const RadioInput = styled.input`

// `;

export default Input;