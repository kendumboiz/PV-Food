import React, { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import FoodPage from "./FoodPage";
import MainPage from "./Main";

function Pvfood(props) {
  const [checked, setChecked] = useState(false);

  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Redirect
        exact
        from={`${match.url}/food`}
        to={`${match.url}/food/all-product`}
      />
      <Route path={`${match.url}/food/:category`} component={FoodPage} />

      <input
        type="checkbox"
        name="IsAgree "
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        id="rules"
      />
    </Switch>
  );
}

export default Pvfood;
