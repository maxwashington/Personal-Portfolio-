import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import Zoom from 'react-reveal/Zoom';

import {
  Section,
  DivWrap,
  LeftDiv,
  RightDiv,
  Text,
  BoldText,
  Image,
  ImageWrap,
  IconImage,
  IconImageWrap,
  IconImageCss,
  Top,
  Title,
  TopLeft,
  BotLeft
} from './styled-components/About';
import './animation-css/About.css';

import pic from '../assets/maxwas.jpg';
import css from '../assets/css.png';
import html from '../assets/HTML5.png';
import js from '../assets/js.png';
import node from '../assets/nodejs.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import github from '../assets/github.png';
import mongo from '../assets/mongoDB.png';
import python from '../assets/python.png';

const About = props => {
  return (
    <Section id={props.id}>
      <Top>
        <div>
          <Title>About</Title>
        </div>
      </Top>
      <DivWrap
        style={{
          padding: '2%',
          width: '100%',
          height: '90%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <LeftDiv>
          <ScrollAnimation
            animateIn="fadeIn"
            style={{ height: '100%', width: '100%' }}
          >
            <TopLeft>
              <ImageWrap>
                <Image src={pic} />
              </ImageWrap>
            </TopLeft>

            <BotLeft>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ height: '100%' }}>
                    <BoldText>I'm a fullstack developer from</BoldText>
                  </div>

                  <div style={{ height: '100%' }}>
                    <BoldText>Chicago.</BoldText>
                  </div>
                </div>

                <div>
                  <Text>
                    When I'm not hacking away at projects and learning about new
                    technologies,
                  </Text>
                </div>
              </div>
            </BotLeft>
          </ScrollAnimation>
        </LeftDiv>

        <RightDiv>
          <ScrollAnimation
            animateIn="fadeIn"
            style={{ height: '100%', position: 'relative', zIndex: '999' }}
          >
            <div style={{ height: '100%' }}>
              <div
                style={{
                  height: '33.33%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <IconImageWrap>
                  <IconImage src={js} />
                </IconImageWrap>
                <IconImageWrap>
                  <IconImage src={react} />
                </IconImageWrap>
                <IconImageWrap>
                  <IconImage src={redux} />
                </IconImageWrap>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '33.33%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <IconImageWrap>
                  <IconImage src={node} />
                </IconImageWrap>
                <IconImageWrap>
                  <IconImageCss src={css} />
                </IconImageWrap>
                <IconImageWrap>
                  <IconImage src={html} />
                </IconImageWrap>
              </div>

              <div
                style={{
                  height: '33.33%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <IconImageWrap>
                  <IconImage src={github} />
                </IconImageWrap>
                <IconImageWrap>
                  <IconImage style={{ width: '80%' }} src={mongo} />
                </IconImageWrap>
                <IconImageWrap>
                  <IconImage src={python} />
                </IconImageWrap>
              </div>
            </div>
          </ScrollAnimation>
        </RightDiv>
      </DivWrap>
    </Section>
  );
};

export default About;
