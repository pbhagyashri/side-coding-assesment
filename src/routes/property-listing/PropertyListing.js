import React, { useState, useMemo } from 'react';
import './property-listing.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';

import PropertyCard from '../../components/PropertyCard';

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);

  useMemo(() => {
    const url = 'https://api.simplyrets.com/properties';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', '*/*');
    xhr.setRequestHeader('Authorization', 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText)[0]);
        setProperties(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }, []);

  return (
    <Container className="property-listing-container">
      <Outlet />
      <Row className="property-listing-container__row">
        {properties.map((property) => {
          return (
            <Col lg={4} md={6} key={property.mlsId}>
              <PropertyCard property={property} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PropertyListing;
