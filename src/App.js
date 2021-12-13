import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './app.scss';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Navbar varient="light" bg="light" fixed="top" className="navbar">
            <Container>
              <Navbar.Brand>
                <Link to={'/properties'} className="header-link">
                  Property Listings
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Outlet />
    </Container>
  );
}

export default App;
