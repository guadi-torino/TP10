import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './style.css';

const About = () => {
  return (
    <div>
      <center>
        <h1>About</h1>
        <div className="btn">
          <Link to="/proyectos">
            <p style={{ textDecoration: 'none' }}>Ver proyectos</p>
          </Link>
        </div>
      </center>
    </div>
  );
};
export default About;
