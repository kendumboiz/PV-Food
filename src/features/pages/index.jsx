import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./Main";

function Pvfood(props) {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      {/* 
       <Redirect
        exact
        from={`${match.url}/food`}
        to={`${match.url}/food/all-product`}
      /> 
      <Route path={`${match.url}/food/:category`} component={FoodPage} /> */}
    </Switch>
  );
}

export default Pvfood;
