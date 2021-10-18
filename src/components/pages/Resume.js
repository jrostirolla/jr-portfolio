import React from 'react';
import Resume from '../../Resume.pdf';

const styles = {
  title: {
    margin: '30px',
  },
  list: {
    background: 'whitesmoke',
    margin: '30px',
    width: '300px'
  },
  button: {
    borderRadius: '5px',
    background: 'lightblue',
    margin: '0 0 0 30px',
    padding: '5px'
  }
}

export default function Home() {
  return (
    <div>
      <h1 style={styles.title}>Resume</h1>  
      <div style={styles.list}>
      <p>
        My various skills include:
      </p>
    
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Javascript</li>
          <li>HTML & CSS</li>
        </ul>
        </div>
        <p style={styles.title}>
        For a copy of my Resume, click the download button below!
        </p>
        <a style={styles.button} href={Resume} download='James_Rostirolla.pdf'>DOWNLOAD</a>
    </div>
  );
}