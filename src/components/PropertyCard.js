import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import FavoritePropertyIcon from './FavoritePropertyIcon';
import {
  numOfbath,
  formatAddress,
  formatPrice,
  formatListing,
} from '../utils/helper';

const PropertyCard = ({ property }) => {
  return (
    <Card style={{ border: 'none' }}>
      <Link to={`/properties/${property.mlsId}`} key={property.mlsId}>
        <Card.Img
          varient="top"
          src={property.photos[0]}
          className="property-listing-container__image"
        />
      </Link>
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
  );
};

export default PropertyCard;
