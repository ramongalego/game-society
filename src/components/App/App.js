import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Welcome from '../Welcome';
import Carousel from '../Carousel';
import Games from '../Games';
import AboutUs from '../AboutUs';
import NewsLetter from '../NewsLetter';
import Contact from '../Contact';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className='overlay'>
          <Header />
          <section className='content-container'>
            <Welcome />
            <Carousel isSecret />
            <Games />
            <AboutUs />
            <NewsLetter />
            <Contact />
            <Footer />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
