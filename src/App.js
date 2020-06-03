import React, { Component } from 'react';
//import HeaderNav from './containers/HeaderNav/HeaderNav';
//import SideBar from './containers/SideBar/SideBar';
import Home from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';

class App extends Component {
  render() {
      return (
          <AppLayout>
              {/*<HeaderNav />*/}
              {/*<SideBar />*/}
              <Home />
          </AppLayout>
      );
  }
}

export default App;
