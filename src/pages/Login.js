import React from "react";
import { Text, Input, Grid, Button, Image } from "../elements";

const Login = (props) => {

  return (
    <React.Fragment>
      <Grid padding="16px">
      <Text size="32px" bold>
            {props.user_name}
        </Text>
        {/* <Image shape="rectangle" src={props.src}/> */}

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
          text="Login"
          _onClick={() => {
            console.log("로그인 했어!");
            // login();
          }}
        ></Button>

        <Grid is_flex>
                <Grid>
                    <Text>Don’t have an account?</Text>
                    {/* <Button _onClick={() => {console.log("지금 회원가입하러 갈래!");}}>
                        Sign up now
                    </Button> */}
                    <Text page>Sign up now</Text>
                </Grid>
        </Grid>
        
        <Text>-----or-----</Text>
        <Text page2 >Continue with social media</Text>
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
    image_url: "https://cdn.mkhealth.co.kr/news/photo/202004/img_MKH200424005_0.jpg",
    sign_up_now: "sign up now",
}

export default Login;