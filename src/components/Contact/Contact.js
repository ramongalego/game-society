import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className='section-contact'>
    <div className='contact-info'>
      <h1>CONTACT INFORMATION</h1>
      <p>Praesent in rhoncus ante. Ut in turpis eros. Duis erat enim, suscipit ac rutrum at, consectetur sed nulla. In et nibh porta, sodales urna ut, viverra eros. Ut in turpis eros. Praesent in rhoncus ante.</p>
      <div></div>
      <div></div>
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
      <input 
        type='text'
        className='contact-message'
        placeholder='YOUR MESSAGE' /> 
      <button>SEND MESSAGE</button>
    </form>
  </section>
);

export default Contact;