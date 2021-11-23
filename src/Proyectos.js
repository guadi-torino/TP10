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
          <div className="header">
            Dummy API
            <img
              className="imagen"
              src={
                'https://stackblitz.com/files/react-phgqov/github/guadi-torino/TP10/master/dummyapi.PNG'
              }
            />
          </div>
        </div>
        <br />
        <div className="card2">
          <div className="header">
            Administrador de pacientes{' '}
            <img
              className="imagen"
              src={
                'https://stackblitz.com/files/react-phgqov/github/guadi-torino/TP10/master/administrador.PNG'
              }
            />
          </div>
        </div>
        <br />
        <div className="card2">
          <div className="header">
            <p> To do list</p>
            <img
              className="imagen"
              src={
                'https://stackblitz.com/files/react-phgqov/github/guadi-torino/TP10/master/todolist.PNG'
              }
            />
          </div>
        </div>
      </center>
    </div>
  );
};
export default Proyectos;
