import React, { Component } from 'react';

import Particles from 'react-particles-js';

import './animation-css/Header.css';
import {
  Section,
  HeaderTitle,
  Title,
  TitleWrap,
  ButtonWrap,
  Button
} from './styled-components/Header';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import anime from 'animejs';
import $ from 'jquery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PDF from '../assets/Max_Washington_Resume_2018.pdf';

class Header extends Component {
  componentDidMount() {
    $('.ml11 .letters').each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
      );
    });

    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 1100
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, $('.ml11 .letters').width()],
        easing: 'easeOutExpo',
        duration: 729,
        delay: 300
      })
      .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 620,
        offset: '-=775',
        delay: function(el, i) {
          return 20 * (i + 1);
        }
      })
      .add({
        targets: '.line',
        opacity: 0
      });
  }

  render() {
    return (
      <Section id={this.props.id}>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <HeaderTitle>
            <TitleWrap>
              <Title className="fade-in-top">Hi, I'm Max</Title>
            </TitleWrap>
            <div className="ml11">
              <span className="text-wrapper">
                <span className="line line1 blinker" />
                <span className="letters">and I am a fullstack developer</span>
              </span>
            </div>

            <ScrollAnimation
              animateIn="fadeInUp"
              style={{ width: '100%' }}
              delay="1600"
              animateOnce="true"
            >
              <ButtonWrap>
                <AnchorLink href="#portfolio">
                  <Button className="button">My Portfolio</Button>
                </AnchorLink>
              </ButtonWrap>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInUp"
              style={{ width: '100%' }}
              delay="1900"
              animateOnce="true"
            >
              <ButtonWrap>
                <a href={PDF} download>
                  <Button className="button">My Résumé</Button>
                </a>
              </ButtonWrap>
            </ScrollAnimation>
          </HeaderTitle>
        </div>
        {this.props.children}
      </Section>
    );
  }
}

export default Header;
