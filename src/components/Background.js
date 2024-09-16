import React from 'react';
import './Background.css';

const Background = () => (
  <div className="background-container">
    <img
      src={`${process.env.PUBLIC_URL}/images/blankhsrdaily1.png`}
      alt="Background"
      className="background-image"
    />
  </div>
);

export default Background;
