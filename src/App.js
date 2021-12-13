import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import heartFill from './assets/heart-fill.svg';
import heartStroke from './assets/heart-stroke.svg';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Navbar varient="light" bg="light" fixed="top" className="navbar">
            <Container>
              <Navbar.Brand href="/properties">Property Listings</Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Outlet />
    </Container>
  );
}

export default App;
