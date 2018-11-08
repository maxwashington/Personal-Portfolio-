import React, { Component } from 'react';

import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './animation-css/App.css';

import $ from 'jquery';

import { 
    AppWrapper,
  } from './styled-components/App';



class App extends Component {

  componentDidMount() {
 
    $('#toggle').click(function() {
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link2').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link3').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });
     $('#link4').click(function() {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
     });

  }
  
  
  render() {

    return (
      <AppWrapper>

        <div className="button_container" id='toggle'><span class="top"></span><span class="middle"></span><span class="bottom"></span></div>
          <div className="overlay" id="overlay">
              <nav className="overlay-menu" id='menu'>
                  <ul>
                      <li><AnchorLink id='link' href='#header'><a>Home</a></AnchorLink></li>
                      <li><AnchorLink id='link2' href='#about'><a>About</a></AnchorLink></li>
                      <li><AnchorLink id='link3' href='#portfolio'><a>Portfolio</a></AnchorLink></li>
                      <li><AnchorLink id='link4' href='#contact'><a>Contact</a></AnchorLink></li>
                  </ul>
              </nav>
          </div>




        
        <Header id={'header'} />
        <About id={'about'} />
        <Portfolio id={'portfolio'} />
        <Contact id={'contact'} />
        <Footer />
        
          
       

      </AppWrapper>
    );
  }
}

export default App;
