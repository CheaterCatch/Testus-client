import React from "react";
import { Text, Input, Grid, Button, Image } from "../elements";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
      <Text size="32px" bold>
            {props.user_name}
        </Text>
        <Image shape="circle" src={props.src}/>

        <Grid padding="16px 0px">
          <Input
            placeholder="id"
            _onChange={() => {
              console.log("아이디 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            placeholder="password"
            _onChange={() => {
              console.log("패스워드 입력했어!");
            }}
          />
        </Grid>

        <Button
          text="sign up"
          _onClick={() => {
            console.log("로그인 했어!");
          }}
        ></Button>

        <Grid is_flex>
            <Text>Don’t have an account?</Text>
            <Text>Sign up now</Text>
        </Grid>
        
        <Text>-----or-----</Text>
        <Text>Continue with social media</Text>
        <Button is_float
          text="Login with Kakao"
          _onClick={() => {
            console.log("카톡으로 로그인 할래!");
          }}
        ></Button>

      </Grid>
    </React.Fragment>
  );
};

Login.defaultProps ={
    user_name: "WELCOME QUESTIONER",
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
}

export default Login;