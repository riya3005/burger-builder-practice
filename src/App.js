
import Layout from './components/Layouts/Layout'
import './App.css';
import BurgerBuild from './components/BurgerBuilder/BurgerBuild';
import { BrowserRouter, Route } from 'react-router-dom';
import OrderSummary from './components/OrderSummary/OrderSummary';

import React, { Component } from 'react'




export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route path='/' exact component={BurgerBuild} />
            <Route path='/OrderSummary' render={() => <OrderSummary /> } />
          </Layout>
        </BrowserRouter>
      </div>
    )
  }
}