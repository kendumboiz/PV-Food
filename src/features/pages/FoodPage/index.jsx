import Error from "components/NotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AllProduct from "./AllProduct";
import Banner from "./banner";
import "./Foodpage.css";
import ProdDetail from "./ProdDetail";

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
