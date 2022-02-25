import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { Contact } from './components/Contact';
import ReactFragmentDemo from './components/Samples/ReactFragmentDemo';
import StateDescription from './components/Samples/StateDescription';
import OnClickEventHandler from './components/Samples/OnClickEventHandler';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/ReactFragmentDemo' component={ReactFragmentDemo}/>
        <Route path='/StateDescription' component={StateDescription}/>
        <Route path='/OnClickEventHandler' component={OnClickEventHandler}/>
      </Layout>
    );
  }
}
