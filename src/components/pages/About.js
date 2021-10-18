import React from 'react';
import headshot from '../../images/headshot.jpg';

const styles = {
  divStyle: {
    background: 'whitesmoke',
  },
  paraStyle: {
    margin: '10px',
  },
  title: {
    margin: '0 0 0 15px '
  }
}


export default function About() {
  return (
    <div>
      <h1 style={styles.title}>About Me</h1>
        <img id="headshot" alt="headshot" src={headshot}/>
        <div style={styles.divStyle}>
                            <p style={styles.paraStyle}>
                                Hi there! My name is James, and I'm currently looking to grow
                                my knowledge and become a programmer! I started out as a surveyor,
                                worked 8 years in the field, and finally decided that it wasn't
                                what I wanted to do anymore. So I left the industry and join the 
                                coding side instead, to see what it's all about!
                            </p>
                            <p style={styles.paraStyle}>
                                I am driven for success in the industry. With my many years of survey
                                knowledge, I hope to work with companies to better improve on the
                                modern technology surveyors use everyday. I also hope to one day
                                learn enough to become a teacher myself, and prepare the next
                                generation of programmers!
                            </p>
                            <p style={styles.paraStyle}>
                                I have worked in a lot of interesting places in my career. Some of 
                                my proudest jobs include the containment upgrades on the Bomaderry Ethanol
                                plant, construction surveys conducted across various large 
                                housing developments across NSW, and working with various other contractors
                                on the contruction of the Parramatta Light Rail.
                            </p>
                            <p style={styles.paraStyle}>
                                I am currently working on developing my creative skills through studying
                                in the "UNSW Trinity Coding Bootcamp", and hope to find work with a company 
                                working with survey technology, as  I believe my experience will be very 
                                useful to my work.
                            </p>
          </div>
    </div>
  );
}