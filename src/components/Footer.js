import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import stackOverflow from '../images/stackOverflow.png';

const styles = {
  image: {
    maxHeight: '30px',
    margin: '0 20px 0 20px',
  },

}

const Footer = () => (
  <div className="footer">
  <a href="https://github.com/jrostirolla">
  <img style={styles.image} src={github} alt="github symbol"/>
  </a>
  <a href="https://www.linkedin.com/in/james-rostirolla-934b76a7/">
  <img style={styles.image} src={linkedin} alt="linkedin symbol"/>
  </a>
    <a href="https://stackoverflow.com/users/story/15819715">
  <img style={styles.image} src={stackOverflow} alt="overflow symbol"/>
  </a>
  </div>
);

export default Footer;