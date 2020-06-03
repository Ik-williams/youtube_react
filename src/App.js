import React, { Component } from 'react';
//import HeaderNav from './containers/HeaderNav/HeaderNav';
//import SideBar from './containers/SideBar/SideBar';
import Home from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import  {Route, Switch} from 'react-router-dom';
import Watch from './containers/Watch/Watch';

class App extends Component {
  render() {
      return (
          <AppLayout>
              <Switch>
                  <Route path='/watch' component={Watch} />
                  <Route path='/' component={Home} />
              </Switch>
          </AppLayout>
      );
  }
}

export default App;
