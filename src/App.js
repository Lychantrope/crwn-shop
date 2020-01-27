import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

import './App.css';



function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />

    </div>
  );
}

export default App;
