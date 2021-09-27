import React from 'react';
import './style.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Products from './pages/product';
import Cart from './pages/cart';

export class App extends React.Component {
  // main render component
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Redirect to="/products" />
            </Route>
            <Route>NoMatch</Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
