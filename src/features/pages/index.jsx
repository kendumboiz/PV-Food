import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import FoodPage from "./FoodPage";
import MainPage from "./Main";

function Pvfood(props) {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/food`} component={FoodPage} />
      {/* <Route path={`${match.url}/cloth`} component={} /> */}
    </Switch>
  );
}

export default Pvfood;
