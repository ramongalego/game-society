import React, { Component } from 'react';
import './Contact.css';
import { contactInfo, socialMedia } from '../../util/constants';
import { Element } from 'react-scroll';

class Contact extends Component {
  render() {
    return (
      <Element name='contact' className='element'>
        <section className='section-contact'>
          <div className='contact-info'>
            <h1>CONTACT INFORMATION</h1>
            <p>Praesent in rhoncus ante. Ut in turpis eros. Duis erat enim, suscipit ac rutrum at, consectetur sed nulla. In et nibh porta, sodales urna ut, viverra eros. Ut in turpis eros. Praesent in rhoncus ante.</p>
            {contactInfo.map(info => (
              <div 
                key={info.icon}
                className='info-container'>
                <i className={`fas fa-${info.icon}`} />
                <div className='info-values'>
                  <p>{info.title}</p>
                  <h3>{info.value}</h3>
                </div>
              </div>
            ))}
            <div className='social-container'>
              {socialMedia.map(social => (
                <a
                  key={social.icon}
                  href={social.link}>
                  <i className={`fab fa-${social.icon}`} />
                </a>
              ))}
            </div>
          </div>
          <form className='contact-form'>
            <div className='double-input'>
              <input 
                type='text'
                placeholder='YOUR NAME' />
              <input 
                type='text'
                placeholder='EMAIL ADDRESS' />
            </div>
            <textarea 
              type='text'
              className='contact-message'
              placeholder='YOUR MESSAGE' /> 
            <button>SEND MESSAGE</button>
          </form>
        </section>
      </Element>
    );
  }
}

export default Contact;