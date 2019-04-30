import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Wallpaper from './components/Wallpaper/Wallpaper'
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Wallpaper/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
