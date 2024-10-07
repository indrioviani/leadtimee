import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavbarComponent.css';
import Button from 'react-bootstrap/Button';

const NavbarComponent = () => {
  return (
    <div>
      <header className="header">
        <div className="title-left">REALTIME ASSEMBLING PROGRESS</div>
        <div className="title-right">
          <h1>HITACHI</h1>
          <p>HITACHI CONSTRUCTION MACHINERY INDONESIA</p>
        </div>
      </header>

      <nav className="navbar">
        <ul>
          <li><Button variant="danger" as={Link} to="/">Dashboard</Button></li>
          <li><Button variant="danger" as={Link} to="/map">Map</Button></li>
          <li><Button variant="danger" as={Link} to="/gate1-4">GATE 1-4</Button></li>
          <li><Button variant="danger" as={Link} to="/gate4-7">GATE 4-7</Button></li>
          <li><Button variant="danger" as={Link} to="/gate7-10">GATE 7-10</Button></li>
          <li><Button variant="danger" as={Link} to="/gate10-13">GATE 10-13</Button></li>
          <li><Button variant="danger" as={Link} to="/gate13-16">GATE 13-16</Button></li>
          <li><Button variant="danger" as={Link} to="/gate16-19">GATE 16-19</Button></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarComponent;
