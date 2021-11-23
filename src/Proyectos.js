import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './style.css';

const Proyectos = () => {
  return (
    <div>
      <center>
      <h1>Proyectos</h1>
        <div className="card2">
          <div className="header">Dummy API</div>
        </div>
        <div className="card2">
          <div className="header">Administrador</div>
        </div>
        <div className="card2">
          <div className="header">To do list</div>
        </div>
      </center>
    </div>
  );
};
export default Proyectos;
