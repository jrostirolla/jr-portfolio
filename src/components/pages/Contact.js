import React from 'react';

const styles = {
  text: {
    margin: '30px 0 30px 0',
    fontWeight: 'bolder',
    textAlign: 'centre'
  },
  nameSpacer: {
    margin: '30px 0 30px 0 '
  },
  subject: {
    margin: '30px 0 30px 0 '
  },
  message: {
    margin: '30px 0 0 0',
    height: '300px'
  }
}


export default function Contact() {
  return (
    <div className='ContactForm'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <div className='contactForm'>
            <form id='contact-form' noValidate>
              <div>
                <p style={styles.text}>
                Hi there! Looking to contact me? Fill in your information in the sections below and I will get back to you as soon as I can.
                </p>
              </div>
              {/* Row 1 of form */}
              <div style={styles.nameSpacer} className='row formRow'>
                <div className='col-6'>
                  <input type='text' name='name' className='form-control formInput' placeholder='Name'></input>
                </div>
                <div className='col-6'>
                  <input type='email' name='email' className='form-control formInput' placeholder='Email address'></input>
                </div>
              </div>
              {/* Row 2 of form */}
              <div style={styles.subject} className='row formRow'>
                <div className='col'>
                  <input type='text' name='subject' className='form-control formInput' placeholder='Subject'></input>
                </div>
              </div>
              {/* Row 3 of form */}
              <div style={styles.message} className='row formRow'>
                <div className='col'>
                  <textarea rows={10} name='message' className='form-control formInput' placeholder='Message' ></textarea>
                </div>
              </div>
              <button className='submit-btn' type='submit'> Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}