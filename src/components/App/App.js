import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Welcome from '../Welcome';
import AboutUs from '../AboutUs';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className='overlay'>
          <Header />
          <section className='content-container'>
            <Welcome />
            <AboutUs />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
