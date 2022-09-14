import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { Homepage } from "../pages/Homepage";

export const Router = () => {
    return(
<BrowserRouter>
<Switch>

  <Route exact path={"/"}>      
    <Homepage />
  </Route>

  <Route exact path={"/carrinho"}>      
    <CartPage />
  </Route>

</Switch>
</BrowserRouter>
    )
}
