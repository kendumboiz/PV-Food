import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import FoodPage from "./FoodPage";
import MainPage from "./Main";

function Pvfood(props) {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      {/* <Route exact path={`${match.url}/food`} component={FoodPage} /> */}
      <Redirect
        exact
        from={`${match.url}/food`}
        to={`${match.url}/food/all-product`}
      />
      <Route path={`${match.url}/food/:category`} component={FoodPage} />

      {/* /home/food/banhtrang */}
      {/* <Route path={`${match.url}/cloth`} component={} /> */}
    </Switch>
  );
}

export default Pvfood;
