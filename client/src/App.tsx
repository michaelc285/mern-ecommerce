import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./context/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "@material-ui/core/Container";

import { loadUser } from "./context/actions/AuthAction";

import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

import ErrorPage from "./components/ErrorPage";
import ProdcutPage from "./components/product/ProductPage";
import ProductCreate from "./components/product/ProductCreate";
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <AppNavbar />

          <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
            <Switch>
              <Route path="/" exact component={ProdcutPage} />
              <Route path="/market" exact component={ProdcutPage} />
              <Route path="/productcreate" exact component={ProductCreate} />
              <Route component={ErrorPage} />
            </Switch>
          </Container>
          <AppFooter />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;