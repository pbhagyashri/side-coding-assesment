import React, { useEffect, useState } from 'react';
import './property-listing.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import FavoritePropertyIcon from './FavoritePropertyIcon';

import {
  numOfbath,
  formatAddress,
  formatPrice,
  formatListing,
} from '../../utils/helper';

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const url = 'https://api.simplyrets.com/properties';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.setRequestHeader('Accept', '*/*');
    xhr.setRequestHeader('Authorization', 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(JSON.parse(xhr.responseText));
        setProperties(JSON.parse(xhr.responseText));
      }
    };

    xhr.send();
  }, []);

  return (
    <Container className="property-listing-container">
      <Row className="property-listing-container__row">
        {properties.map((property) => {
          return (
            <Col lg={4} md={6} key={property.mlsId}>
              <Card style={{ border: 'none' }}>
                <Card.Img
                  varient="top"
                  src={property.photos[0]}
                  className="property-listing-container__image"
                />
                <Card.Body>
                  <div>
                    <FavoritePropertyIcon mlsId={property.mlsId} />
                    <ul className="property-listing-container__list">
                      <li className="property-listing-container__list-item">
                        {property.property.bedrooms} BR |
                      </li>
                      <li className="property-listing-container__list-item">
                        {numOfbath(
                          property.property.bathsFull,
                          property.property.bathsHalf,
                        )}{' '}
                        Bath |
                      </li>
                      <li className="property-listing-container__list-item">
                        {property.property.area} Sq Ft
                      </li>
                    </ul>
                    <h2>{formatPrice(property.listPrice)}</h2>
                    <address>{formatAddress(property.address)}</address>
                    <p className="text-muted">
                      Listed {formatListing(property.listDate)}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PropertyListing;
