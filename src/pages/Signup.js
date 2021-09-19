import React from "react";
import { Grid, Text, Input, Button } from "../elements";

const Signup = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
            CREATE ACCOUNT
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="출제자"
            _onChange={() => {
              console.log("!!");
            }}
          />
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

Signup.defaultProps = {};

export default Signup;
