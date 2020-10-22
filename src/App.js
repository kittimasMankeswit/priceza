import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from './Global/header';
import Home from './components/Options'
import Result from './Pages/result'
function Container ()
{
  return (
    <Switch>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/Result" component={Result} />
    </Switch>
  );
}



export default Container;