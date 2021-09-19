import React from "react";
import { Grid, Text, Input, Button } from "../elements";

const Signup = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
            {props.user_name}
        </Text>

        <Grid padding="16px 0px">
          <Text>
            출제자
          </Text>
          <Text>
            응시자
          </Text>
        </Grid>

        <Grid padding="16px 0px">
          <Input
            placeholder="user name"
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            placeholder="id"
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            placeholder="password"
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            placeholder="confirm password"
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            placeholder="phone"
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            placeholder="email"
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        {/* <Button text="sign up"></Button> */}
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {
    user_name: "CREATE ACCOUNT",
};

export default Signup;
