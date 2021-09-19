import './App.css';
import React from "react";

import {BrowserRouter, Route} from "react-router-dom";
import { Grid } from "../elements";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from '../conponents/Header';

function App() {
  return (
    <React.Fragment>
      <Grid isRoot>
        {/* <Header></Header> */}
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route path="/signup" exact component={Signup}/>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;