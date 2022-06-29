import "./Foodpage.css";

import { Route, Switch, useRouteMatch } from "react-router-dom";

import AllProduct from "components/AllProduct";
import Banner from "components/banner";
import Error from "components/NotFound";
import ProdDetail from "components/ProdDetail";
import React from "react";

function FoodPage(props) {
  const { path } = useRouteMatch();
  console.log("🚀 ~ file: index.jsx ~ line 29 ~ FoodPage ~ path", path);

  return (
    <div>
      <Banner />
      <div className="filter">
        <Switch>
          <Route exact path={`${path}/food`} component={AllProduct} />

          <Route
            exact
            path={`${path}/item-detail/:id`}
            component={ProdDetail}
          />

          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default FoodPage;
