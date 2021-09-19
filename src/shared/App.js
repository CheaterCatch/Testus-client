import './App.css';
import React from "react";

import {BrowserRouter, Route} from "react-router-dom";
import { Grid } from "../elements";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from '../components/Header';
import MainPage from '../pages/MainPage';

function App() {
  return (
    <React.Fragment>
      <Grid isRoot>
        {/* <Header></Header> */}
        <BrowserRouter>
          <Route exact path="/" component={MainPage} />
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;