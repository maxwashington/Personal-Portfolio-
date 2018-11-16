import React, { Component } from 'react';

//import { backendAPI } from '../config.js'
import { Section, FormWrap, Title } from './styled-components/Contact';
import './animation-css/Contact.css';
import $ from 'jquery';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import axios from 'axios';

class Contact extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      //url: backendAPI,
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      console.log(response);
      if (response.data.msg === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    return (
      <Section id={this.props.id}>
        <ScrollAnimation
          animateIn="fadeIn"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <FormWrap>
            <form
              id="contact-form"
              className="contact"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div>
                  <Title>Contact me!</Title>
                </div>
                <div>
                  <p
                    style={{
                      color: '#656163',
                      fontWeight: '900',
                      paddingBottom: '10px',
                      fontSize: '1.5rem'
                    }}
                  >
                    maxwashington18@gmail.com
                  </p>
                </div>
              </div>

              <fieldset>
                <input
                  style={{ fontFamily: 'Ovo, serif', fontSize: '2rem' }}
                  id="name"
                  placeholder="Your name"
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                <input
                  style={{ fontFamily: 'Ovo, serif', fontSize: '2rem' }}
                  id="email"
                  placeholder="Your Email Address"
                  type="email"
                  tabindex="2"
                  required
                />
              </fieldset>

              <fieldset>
                <textarea
                  style={{ fontFamily: 'Ovo, serif', fontSize: '2rem' }}
                  id="message"
                  placeholder="Type your message here...."
                  tabindex="3"
                  required
                />
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit">
                  Submit
                </button>
              </fieldset>
            </form>
          </FormWrap>
        </ScrollAnimation>
      </Section>
    );
  }
}

export default Contact;
