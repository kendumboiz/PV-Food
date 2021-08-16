import React from "react";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./Main";
import FoodPage from "./FoodPage";
import Product from "./FoodPage/Product";
import SnackProduct from "./FoodPage/SnackProduct";

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
